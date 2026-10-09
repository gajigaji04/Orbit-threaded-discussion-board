const Comment = require("../models/Comment");
const Post = require("../models/Post");

exports.createComment = async (req, res) => {
  const { postId, content } = req.body;
  if (!postId || !content) {
    return res.status(400).json({ error: "postId and content are required" });
  }
  if (!(await Post.findById(postId))) {
    return res.status(404).json({ error: "Post not found" });
  }
  const newComment = await Comment.create({ postId, content });
  res.status(201).json(newComment);
};

// GET /api/comments?postId=1 → 특정 게시글의 댓글만 조회
exports.getComments = async (req, res) => {
  const comments = await Comment.findAll(req.query.postId);
  res.json(comments);
};

exports.getCommentById = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.json(comment);
};

exports.updateComment = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: "content is required" });
  }
  const updatedComment = await Comment.update(req.params.commentId, {
    content,
  });
  if (!updatedComment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.json(updatedComment);
};

exports.deleteComment = async (req, res) => {
  const deleted = await Comment.remove(req.params.commentId);
  if (!deleted) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.json({ message: "Comment deleted successfully" });
};
