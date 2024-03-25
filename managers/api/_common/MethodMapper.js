const { SchoolController } = require("../../entities/school/School.controller");
const {
  ClassroomController,
} = require("../../entities/classroom/Classroom.controller");
const { UserController } = require("../../entities/user/User.controller");
const {
  authenticationAndAuthorizationMiddleware,
} = require("../../middlewares/Authentication-and-authorization.middleware");
const {
  getAndDeleteSchoolValidator,
  createSchoolValidator,
  updateSchoolValidator,
} = require("../../entities/school/School.validator");
const {
  createClassroomValidator,
  updateClassroomValidator,
  deleteClassroomValidator,
  getClassroomByIdValidator,
  getAllClassroomsBySchoolValidator,
} = require("../../entities/classroom/Classroom.validator");
const {
  createUserValidator,
  createStudentValidator,
  updateUserValidator,
  changePasswordValidator,
  deleteUserValidator,
  getUserByIdValidator,
  loginValidator,
} = require("../../entities/user/User.validator");
const handelValidation = require("../../middlewares/Validator.middleware");

module.exports = {
  login: [handelValidation(loginValidator), new UserController().login],

  "student-register": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(createStudentValidator),
    new UserController().registerStudent,
  ],
  "school-admin-register": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(createUserValidator),
    new UserController().createSchoolAdmin,
  ],
  "admin-register": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(createUserValidator),
    new UserController().createSuperAdmin,
  ],
  "get-users": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    new UserController().getAllUsers,
  ],
  "get-user": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(getUserByIdValidator),
    new UserController().getUserById,
  ],
  "update-user": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(updateUserValidator),
    new UserController().updateUser,
  ],
  "change-password": [
    authenticationAndAuthorizationMiddleware([
      "SuperAdmin",
      "SchoolAdmin",
      "Student",
    ]),
    handelValidation(changePasswordValidator),
    new UserController().changePassword,
  ],
  "delete-user": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(deleteUserValidator),
    new UserController().deleteUser,
  ],

  "get-schools": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    new SchoolController().getAllSchools,
  ],
  "get-school": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(getAndDeleteSchoolValidator),
    new SchoolController().getSchoolById,
  ],
  "new-school": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(createSchoolValidator),
    new SchoolController().createSchool,
  ],
  "update-school": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(updateSchoolValidator),
    new SchoolController().updateSchool,
  ],
  "delete-school": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin"]),
    handelValidation(getAndDeleteSchoolValidator),
    new SchoolController().deleteSchool,
  ],

  "get-classroom": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(getClassroomByIdValidator),
    new ClassroomController().getClassroomById,
  ],
  "new-classroom": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(createClassroomValidator),
    new ClassroomController().createClassroom,
  ],
  "update-classroom": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(updateClassroomValidator),
    new ClassroomController().updateClassroom,
  ],
  "delete-classroom": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(deleteClassroomValidator),
    new ClassroomController().deleteClassroom,
  ],
  "get-classrooms": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    new ClassroomController().getAllClassrooms,
  ],
  "by-school": [
    authenticationAndAuthorizationMiddleware(["SuperAdmin", "SchoolAdmin"]),
    handelValidation(getAllClassroomsBySchoolValidator),
    new ClassroomController().getAllClassroomsBySchool,
  ],
};
