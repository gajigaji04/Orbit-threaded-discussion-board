const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const asyncHandler = require("../utils/asyncHandler");

// POST /api/users
router.post("/users", asyncHandler(userController.createUser));

// GET /api/users
router.get("/users", asyncHandler(userController.getUsers));

// GET /api/users/:userId
router.get("/users/:userId", asyncHandler(userController.getUserById));

// PUT /api/users/:userId
router.put("/users/:userId", asyncHandler(userController.updateUser));

// DELETE /api/users/:userId
router.delete("/users/:userId", asyncHandler(userController.deleteUser));

module.exports = router;
