const UserGroup = require("../managers/entities/user/UserGroup.mongoModel");

// Function to seed user groups
async function seedUserGroups() {
  // Check if any user groups exist
  const existingUserGroups = await UserGroup.find();

  // If no user groups exist, create them
  if (existingUserGroups.length === 0) {
    const userGroups = [
      { name: "SuperAdmin" },
      { name: "SchoolAdmin" },
      { name: "Student" },
    ];
    // Insert user groups into the database
    await UserGroup.insertMany(userGroups);
  }
}

module.exports = {
  seedUserGroups,
};
