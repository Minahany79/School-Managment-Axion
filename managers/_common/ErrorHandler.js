class BaseAPIError extends Error {
  constructor(message = "Error", status = 500) {
    super(message);
    this.message = message;
    this.cause = message;
    this.status = status;
    this.ok = false;
  }
}

class NotFoundError extends BaseAPIError {
  type = "NotFoundError";
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

class AuthError extends BaseAPIError {
  type = "AuthError";
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

class ServerError extends BaseAPIError {
  type = "ServerError";
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

class ValidationError extends BaseAPIError {
  type = "ValidationError";
  constructor(message = "Validation Error") {
    super(message, 400);
  }
}

class AccessDeniedError extends BaseAPIError {
  type = "AccessDeniedError";
  constructor(message = "Access Denied") {
    super(message, 403);
  }
}

module.exports = {
  BaseAPIError,
  AuthError,
  ServerError,
  NotFoundError,
  ValidationError,
  AccessDeniedError
};
