const mongoose = require("mongoose");

const userGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserGroup", userGroupSchema);
