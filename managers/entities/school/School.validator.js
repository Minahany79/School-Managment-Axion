const Joi = require("joi");

const getAndDeleteSchoolValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .messages({
        "string.pattern.base": "Invalid school ID format",
      }),
  }),
};

const createSchoolValidator = {
  body: Joi.object({
    name: Joi.string().required().trim(),
  }),
};

const updateSchoolValidator = {
  query: Joi.object({
    id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/),
  }),
  body: Joi.object({
    name: Joi.string().required().trim(),
  }),
};

module.exports = {
  getAndDeleteSchoolValidator,
  createSchoolValidator,
  updateSchoolValidator,
};
