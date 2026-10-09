const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }
  const newPost = await Post.create({ title, content });
  res.status(201).json(newPost);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  const updatedPost = await Post.update(req.params.postId, { title, content });
  if (!updatedPost) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
  const deleted = await Post.remove(req.params.postId);
  if (!deleted) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json({ message: "Post deleted successfully" });
};
