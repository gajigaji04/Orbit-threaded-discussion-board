const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const asyncHandler = require("../utils/asyncHandler");

// POST /api/posts
router.post("/posts", asyncHandler(postController.createPost));

// GET /api/posts
router.get("/posts", asyncHandler(postController.getPosts));

// GET /api/posts/:postId
router.get("/posts/:postId", asyncHandler(postController.getPostById));

// PUT /api/posts/:postId
router.put("/posts/:postId", asyncHandler(postController.updatePost));

// DELETE /api/posts/:postId
router.delete("/posts/:postId", asyncHandler(postController.deletePost));

module.exports = router;
