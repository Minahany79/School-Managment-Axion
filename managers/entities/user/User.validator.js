const Joi = require("joi");

const createUserValidator = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
    username: Joi.string().required().min(3).max(16).messages({
      "any.required": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "Password is required",
    }),
  }),
};

const createStudentValidator = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
    username: Joi.string().required().min(3).max(16).messages({
      "any.required": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "Password is required",
    }),
    schoolId: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const updateUserValidator = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
    username: Joi.string().required().min(3).max(16).messages({
      "any.required": "Email is required",
    }),
  }),
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const changePasswordValidator = {
  body: Joi.object({
    oldPassword: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "oldPassword is required",
    }),
    newPassword: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "newPassword is required",
    }),
  }),
};

const deleteUserValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const getUserByIdValidator = {
  query: Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^[0-9a-fA-F]{24}$/),
  }),
};

const loginValidator = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "Password is required",
    }),
  }),
};

module.exports = {
  createUserValidator,
  createStudentValidator,
  updateUserValidator,
  changePasswordValidator,
  deleteUserValidator,
  getUserByIdValidator,
  loginValidator,
};
