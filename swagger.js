const config = require("./config/index.config.js");
const swaggerDocument = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "School Management System",
    description: "A service for managing School Management System",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host:
    config.dotEnv.ENV === "production" || config.dotEnv.ENV === "prod"
      ? `${config.dotEnv.DEPLOYMENT_HOST}:${config.dotEnv.USER_PORT}`
      : `${config.dotEnv.HOST}:${config.USER_PORT}`,

  paths: {
    "/api/users/login": {
      post: {
        tags: ["Users"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "Login",
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/users/student-register": {
      post: {
        tags: ["Users"],
        summary: "Register student",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "register",
            schema: {
              type: "object",
              required: ["email", "password", "username"],
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
                username: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/users/school-admin-register": {
      post: {
        tags: ["Users"],
        summary: "Register student",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "register",
            schema: {
              type: "object",
              required: ["email", "password", "username"],
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
                username: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/users/admin-register": {
      post: {
        tags: ["Users"],
        summary: "Register student",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "register",
            schema: {
              type: "object",
              required: ["email", "password", "username"],
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
                username: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },

    "/api/users/get-user": {
      get: {
        tags: ["Users"],
        summary: "Get user by id",
        parameters: [
          {
            name: "id",
            in: "query",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/users/delete-user": {
      delete: {
        tags: ["Users"],
        summary: "Delete user by id",
        parameters: [
          {
            name: "id",
            in: "query",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },

    "/api/users/update-user": {
      put: {
        tags: ["Users"],
        summary: "update user",
        consumes: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "query",
            schema: {
              type: "string",
            },
          },
          {
            in: "body",
            name: "register",
            schema: {
              type: "object",
              required: ["email", "username"],
              properties: {
                email: {
                  type: "string",
                },
                username: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },

    "/api/users/get-users": {
      get: {
        tags: ["Users"],
        summary: "Get users logged in user",
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
      post: {
        tags: ["Users"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "search",
            schema: {
              type: "object",
              properties: {
                ids: {
                  type: "array",
                  items: {
                    type: "integer",
                  },
                },
                userName: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/users/change-password": {
      put: {
        tags: ["Users"],
        summary: "change password",
        parameters: [
          {
            in: "body",
            name: "change-password",
            schema: {
              type: "object",
              required: ["oldPassword", "newPassword"],
              properties: {
                oldPassword: {
                  type: "string",
                },
                newPassword: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
          400: {
            description: "bad request",
          },
          401: {
            description: "Un Authorized",
          },
          403: {
            description: "Forbidden",
          },

          404: {
            description: "Not Found",
          },
          500: {
            description: "internal server error",
          },
        },
      },
    },
    "/api/schools/get-schools": {
      get: {
        tags: ["Schools"],
        summary: "Retrieve all schools",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/schools/new-school": {
      post: {
        tags: ["Schools"],
        summary: "Create a new school",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "school",
            schema: {
              type: "object",
              required: ["name"],
              properties: {
                name: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/schools/get-school": {
      get: {
        tags: ["Schools"],
        summary: "Retrieve a single school by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            schema: {
              type: "string",
            },
            required: true,
            description: "ID of the school to retrieve",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "School not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/schools/update-school": {
      put: {
        tags: ["Schools"],
        summary: "Update a school by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            schema: {
              type: "string",
            },
            required: true,
            description: "ID of the school to update",
          },
          {
            in: "body",
            name: "school",
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "School not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/schools/delete-school": {
      delete: {
        tags: ["Schools"],
        summary: "Delete a school by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            schema: {
              type: "string",
            },
            required: true,
            description: "ID of the school to delete",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "School not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },

    "/api/classrooms/get-classrooms": {
      get: {
        tags: ["Classrooms"],
        summary: "Retrieve all classrooms",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/classrooms/new-classroom": {
      post: {
        tags: ["Classrooms"],
        summary: "Create a new classroom",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "classroom",
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                schoolId: {
                  type: "string",
                },
              },
              required: ["name", "schoolId"],
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/classrooms/get-classroom": {
      get: {
        tags: ["Classrooms"],
        summary: "Retrieve a single classroom by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID of the classroom to retrieve",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Classroom not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/classrooms/update-classroom": {
      put: {
        tags: ["Classrooms"],
        summary: "Update a classroom by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID of the classroom to update",
          },
          {
            in: "body",
            name: "classroom",
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Classroom not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/classrooms/delete-classroom": {
      delete: {
        tags: ["Classrooms"],
        summary: "Delete a classroom by ID",
        parameters: [
          {
            in: "query",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID of the classroom to delete",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Classroom not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/classrooms/by-school": {
      get: {
        tags: ["Classrooms"],
        summary: "Retrieve all classrooms by school ID",
        parameters: [
          {
            in: "query",
            name: "school_id",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID of the school to retrieve classrooms for",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
  securityDefinitions: {
    bearerAuth: {
      name: "Authorization",
      in: "header",
      type: "apiKey",
      description: "JWT Authorization header",
    },
  },
  security: [{ bearerAuth: [] }],
};

module.exports = {
  swaggerDocument,
};
