import axios from "axios";

// 개발 시에는 package.json의 proxy 설정으로 http://localhost:5000 에 전달됨
const api = axios.create({ baseURL: "/api" });

export const getPosts = () => api.get("/posts").then((res) => res.data);
export const getPost = (postId) =>
  api.get(`/posts/${postId}`).then((res) => res.data);
export const createPost = (post) =>
  api.post("/posts", post).then((res) => res.data);
export const updatePost = (postId, post) =>
  api.put(`/posts/${postId}`, post).then((res) => res.data);
export const deletePost = (postId) => api.delete(`/posts/${postId}`);

export const getComments = (postId) =>
  api.get("/comments", { params: { postId } }).then((res) => res.data);
export const createComment = (comment) =>
  api.post("/comments", comment).then((res) => res.data);
export const deleteComment = (commentId) =>
  api.delete(`/comments/${commentId}`);
