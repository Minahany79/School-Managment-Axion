const headerMethods = ["body", "params", "query"];
const { ValidationError } = require("../_common/ErrorHandler");

const handelValidation = (schema) => {
  return (req, res, next) => {
    const validation = [];
    headerMethods.forEach((key) => {
      if (schema[key]) {
        const validationResult = schema[key].validate(req[key]);
        if (validationResult.error) {
          validation.push(validationResult.error.details[0]);
        }
      }
    });

    if (validation.length) {
      throw new ValidationError(validation);
    } else {
      return {
        req,
        res,
      };
    }
  };
};

module.exports = handelValidation;
