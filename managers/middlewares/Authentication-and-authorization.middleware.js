const {
  AuthError,
  AccessDeniedError,
} = require("../_common/ErrorHandler");
const TokenManager = require("../token/Token.manager");

const authenticationAndAuthorizationMiddleware = (roles) => {
  return (req, res, next) => {
    const jwtService = new TokenManager();
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new AuthError("unAuthorized");
    }
    try {
      const decodedToken = jwtService.verifyLongToken({ token });
      if (roles.includes(decodedToken.userGroup)) {
        res.locals.user = {
          userId: decodedToken.userId,
          username: decodedToken.username,
          userEmail: decodedToken.userEmail,
          userGroup: decodedToken.userGroup,
        };
        return {
          req,
          res,
        };
      } else {
        throw new AccessDeniedError("Access denied");
      }
    } catch (error) {
      if (error instanceof AccessDeniedError)
        throw new AccessDeniedError("Access denied");
      throw new AuthError("Unauthorized - Invalid token");
    }
  };
};

module.exports = { authenticationAndAuthorizationMiddleware };
