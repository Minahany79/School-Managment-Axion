const bcrypt = require("bcryptjs");
const config = require("../../config/index.config.js");

class HashingService {
  constructor() {
    this.saltRounds = config.dotEnv.SALT_ROUNDS;
  }

  async hash(data) {
    return await bcrypt.hash(data, this.saltRounds);
  }

  async verify(data, hashValue) {
    return await bcrypt.compare(data, hashValue);
  }
}

module.exports = HashingService;
