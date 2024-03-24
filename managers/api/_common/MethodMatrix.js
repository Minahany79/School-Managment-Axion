module.exports = {
  users: {
    get: ["get-users", "get-user"],
    post: [
      "login",
      "school-admin-register",
      "admin-register",
      "student-register",
    ],
    put: ["update-user", "change-password"],
    delete: ["delete-user"],
  },
  
  schools: {
    get: ["get-schools", "get-school"],
    post: ["new-school"],
    put: ["update-school"],
    delete: ["delete-school"],
  },

  classrooms: {
    get: ["get-classrooms", "by-school", "get-classroom"],
    post: ["new-classroom"],
    put: ["update-classroom"],
    delete: ["delete-classroom"],
  },
};
