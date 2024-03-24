const School = require("./School.mongoModel");
const {
  NotFoundError,
  ValidationError,
} = require("../../_common/ErrorHandler");
const Joi = require("joi");

class SchoolController {
  async getAllSchools(req, res) {
    const schools = await School.find();
    return {
      data: {
        schools,
      },
    };
  }

  async getSchoolById(req, res) {
    const { id } = req.query;

    const school = await School.findById(id);
    if (!school) {
      throw new NotFoundError("School not found");
    }
    return {
      data: {
        school,
      },
    };
  }

  async createSchool(req, res) {
    const { name } = req.body;
    const school = new School({ name });
    const newSchool = await school.save();
    return { data: { school: newSchool } };
  }

  async updateSchool(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("School id required in query");

    const { name } = req.body;
    const updatedSchool = await School.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedSchool) {
      throw new NotFoundError("School not found");
    }
    return { data: { school: updatedSchool } };
  }

  async deleteSchool(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("School id required in query");

    const deletedSchool = await School.findByIdAndDelete(id);
    if (!deletedSchool) {
      throw new NotFoundError("School not found");
    }
    return {
      data: {
        message: "School deleted successfully",
      },
    };
  }
}

module.exports = { SchoolController };
