const User = require("./User.mongoModel");
const UserGroup = require("./UserGroup.mongoModel");
const {
  NotFoundError,
  ValidationError,
} = require("../../_common/ErrorHandler");
const HashingService = require("../../_common/HashingService");
const TokenManager = require("../token/Token.manager");

class UserController {
  constructor() {
    // Bind the methods to the instance of UserController
    this.login = this.login.bind(this);
    this.registerStudent = this.registerStudent.bind(this);
    this.createSchoolAdmin = this.createSchoolAdmin.bind(this);
    this.createSuperAdmin = this.createSuperAdmin.bind(this);
    this.generateToken = this.generateToken.bind(this);
    this.addUserAsRole = this.addUserAsRole.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  getUserClaims(user) {
    return {
      userId: user._id,
      username: user.username,
      userEmail: user.email,
      userGroup: user.userGroup.name,
    };
  }

  async login(req, res) {
    const userInDb = await User.findOne({
      email: req.body.email.toLowerCase(),
    }).populate("userGroup");

    if (!userInDb) {
      throw new NotFoundError("User not found");
    }

    const isValidPassword = await new HashingService().verify(
      req.body.password,
      userInDb.password
    );

    if (!isValidPassword) {
      throw new ValidationError("Invalid password");
    }
    const token = this.generateToken(userInDb);

    return {
      data: {
        token,
      },
    };
  }

  generateToken(userInDb) {
    const tokenClaims = this.getUserClaims(userInDb);
    return new TokenManager().genLongToken(tokenClaims);
  }

  async registerStudent(req, res) {
    return await this.createUser(req, res, "Student");
  }

  async createSchoolAdmin(req, res) {
    return await this.createUser(req, res, "SchoolAdmin");
  }

  async createSuperAdmin(req, res) {
    return await this.createUser(req, res, "SuperAdmin");
  }

  async addUserAsRole(role) {
    const userGroup = await UserGroup.findOne({ name: role });
    return userGroup._id;
  }

  async getAllUsers(req, res) {
    const usersInDb = await User.find()
      .select("-password")
      .populate("userGroup");
    return {
      data: {
        users: usersInDb,
      },
    };
  }

  async getUserById(req, res) {
    const { id } = req.query;
    if (!id) throw new ValidationError("User id required in query");

    const userInDb = await User.findById(id)
      .select("-password")
      .populate("userGroup");
    if (!userInDb) {
      throw new NotFoundError("User not found");
    }
    return {
      data: {
        user: userInDb,
      },
    };
  }

  // used to create any user
  async createUser(req, res, role) {
    const userInDb = await User.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (userInDb) {
      const errorMessage = `The email already exists in the database`;
      throw new ValidationError(errorMessage);
    }
    const hashedPassword = await new HashingService().hash(req.body.password);
    const userDto = {
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email.toLowerCase(),
      userGroup: await this.addUserAsRole(role),
    };

    const newUser = new User(userDto);
    await newUser.save();

    return {
      data: {
        message: "Account created successfully.",
      },
    };
  }

  async updateUser(req, res) {
    const user = res.locals.user;
    const userInDb = await User.findById(user.userId);
    if (!userInDb) {
      throw new NotFoundError("User not found");
    }

    const userDto = {
      username: req.body.username,
      email: req.body.email,
    };

    const updatedUser = await User.findByIdAndUpdate(user.userId, userDto, {
      new: true,
    }).select("-password");
    return {
      data: {
        user: updatedUser,
      },
    };
  }

  async changePassword(req, res) {
    const user = res.locals.user;

    const userInDb = await User.findById(user.userId);
    if (!userInDb) {
      throw new NotFoundError("User not found");
    }

    const { oldPassword, newPassword } = req.body;
    const isValidPassword = await new HashingService().verify(
      oldPassword,
      userInDb.password
    );
    if (!isValidPassword) {
      throw new ValidationError("Invalid password");
    }
    const hashedPassword = await new HashingService().hash(newPassword);
    await User.findByIdAndUpdate(user.userId, { password: hashedPassword });
    return {
      data: {
        message: "Updated password successfully",
      },
    };
  }

  async deleteUser(req, res) {
    const { id } = req.query;
    if (!id) {
      throw new Error("Id required in query");
    }
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundError("User not found");
    }
    return {
      data: {
        message: "User deleted successfully",
      },
    };
  }
}

module.exports = { UserController };
