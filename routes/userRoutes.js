// Importing express module
const express = require("express");

// Creating a router object
const router = express.Router();

// Importing controller function from userController
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

// Defining routes
router.post("/create", createUser);
router.get("/get-all", getAllUsers);
router.get("/get/:id", getUserById);
router.put("/update/:id", updateUserById);
router.delete("/delete/:id", deleteUserById);

module.exports = router;
