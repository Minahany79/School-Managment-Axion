const Joi = require("joi");

const createClassroomValidator = {
  body: Joi.object({
    name: Joi.string().required().trim(),
    schoolId: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const updateClassroomValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
  body: Joi.object({
    name: Joi.string().required().trim(),
  }),
};

const deleteClassroomValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const getClassroomByIdValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const getAllClassroomsBySchoolValidator = {
  query: Joi.object({
    school_id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

module.exports = {
  createClassroomValidator,
  updateClassroomValidator,
  deleteClassroomValidator,
  getClassroomByIdValidator,
  getAllClassroomsBySchoolValidator
};
