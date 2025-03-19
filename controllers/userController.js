const User = require("../models/User");

// create user
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.create({ name, email, age: Number(age) });
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user by id
exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.age = Number(req.body.age) || user.age;

    await user.save();

    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user by id
exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
