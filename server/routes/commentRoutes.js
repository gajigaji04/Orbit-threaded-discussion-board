const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const asyncHandler = require("../utils/asyncHandler");

// POST /api/comments
router.post("/comments", asyncHandler(commentController.createComment));

// GET /api/comments (?postId=1)
router.get("/comments", asyncHandler(commentController.getComments));

// GET /api/comments/:commentId
router.get(
  "/comments/:commentId",
  asyncHandler(commentController.getCommentById)
);

// PUT /api/comments/:commentId
router.put("/comments/:commentId", asyncHandler(commentController.updateComment));

// DELETE /api/comments/:commentId
router.delete(
  "/comments/:commentId",
  asyncHandler(commentController.deleteComment)
);

module.exports = router;
