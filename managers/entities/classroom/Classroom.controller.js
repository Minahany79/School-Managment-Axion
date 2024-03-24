const Classroom = require("./Classroom.mongoModel");
const {
  NotFoundError,
  ValidationError,
} = require("../../_common/ErrorHandler");

class ClassroomController {
  async getAllClassrooms(req, res) {
    const classrooms = await Classroom.find().populate('school');
    return {
      data: {
        classrooms,
      },
    };
  }

  async getClassroomById(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("Classroom id required in query");

    const classroom = await Classroom.findById(id).populate('school');
    if (!classroom) {
      throw new NotFoundError("Classroom not found");
    }
    return {
      data: {
        classroom,
      },
    };
  }

  async getAllClassroomsBySchool(req, res) {
    const { school_id } = req.query;
    if (!school_id)
      throw new ValidationError("School_id is required in query Param");

    const classrooms = await Classroom.find({ school: school_id });
    return {
      data: {
        classrooms,
      },
    };
  }

  async createClassroom(req, res) {
    const { name, schoolId } = req.body;
    const classroom = new Classroom({ name, school: schoolId });
    const newClassroom = await classroom.save();
    return {
      data: {
        classroom: newClassroom,
      },
    };
  }

  async updateClassroom(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("Classroom id required in query");

    const { name } = req.body;
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedClassroom) {
      throw new NotFoundError("Classroom not found");
    }
    return {
      data: {
        classroom: updatedClassroom,
      },
    };
  }

  async deleteClassroom(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("Classroom id required in query");

    const deletedClassroom = await Classroom.findByIdAndDelete(id);
    if (!deletedClassroom) {
      throw new NotFoundError("Classroom not found");
    }
    return {
      data: {
        message: "Classroom deleted successfully",
      },
    };
  }
}

module.exports = { ClassroomController };
