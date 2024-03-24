const ApiHandler = require("./Api.manager");
const MethodMapper = require("./_common/MethodMapper");
const MethodMatrix = require("./_common/MethodMatrix");

module.exports = class ExtendedApiHandler extends ApiHandler {
  constructor({ config, cortex, cache, managers, mwsRepo, prop }) {
    super({ config, cortex, cache, managers, mwsRepo, prop });
    this.mw = this.mw.bind(this);
    this.methodMatrix = MethodMatrix;
    this.methodMapper = MethodMapper;
  }

  async mw(req, res, next) {
    let method = req.method?.toLowerCase();
    let moduleName = req.params?.moduleName?.toLowerCase();
    let fnName = req.params?.fnName;
    let moduleMatrix = this.methodMatrix[moduleName];

    if (!moduleMatrix)
      return this.managers.responseDispatcher.dispatch(res.status(400), {
        ok: false,
        message: `module ${moduleName} not found`,
      });

    /** validate method */
    if (!moduleMatrix[method]) {
      return this.managers.responseDispatcher.dispatch(res, {
        ok: false,
        message: `unsupported method ${method} for ${moduleName}`,
      });
    }

    if (!moduleMatrix[method].includes(fnName)) {
      return this.managers.responseDispatcher.dispatch(res, {
        ok: false,
        message: `unable to find function ${fnName} with method ${method}`,
      });
    }

    let result = {};
    try {
      for (const method in this.methodMapper[fnName]) {
        const { data, new_req, new_res } = await this.methodMapper[fnName][
          method
        ](req, res);
        if (new_req) req = new_req;
        if (new_res) res = new_res;

        result = { ...data };
      }
    } catch (err) {
      console.log(`error`, err.status);
      return this.managers.responseDispatcher.dispatch(res, {
        ok: false,
        code: err.status,
        errors: [err],
        message: `${fnName} failed to execute`,
      });
    }
    this.managers.responseDispatcher.dispatch(res, {
      ok: true,
      data: result,
      message: "ok",
    });
  }
};
