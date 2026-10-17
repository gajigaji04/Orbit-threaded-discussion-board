import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createComment,
  deleteComment,
  deletePost,
  getComments,
  getPost,
} from "../api";
import { formatDate } from "../utils/formatDate";

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getPost(postId), getComments(postId)])
      .then(([postData, commentData]) => {
        setPost(postData);
        setComments(commentData);
      })
      .catch(() => setError("게시글을 찾을 수 없습니다."));
  }, [postId]);

  const handleDeletePost = async () => {
    if (!window.confirm("이 게시글을 삭제할까요?")) return;
    await deletePost(postId);
    navigate("/posts");
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment = await createComment({ postId, content: newComment });
    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setComments((prev) => prev.filter((c) => c.id !== commentId));
  };

  if (error) return <p className="error">{error}</p>;
  if (!post) return <p className="loading">불러오는 중...</p>;

  return (
    <div>
      <Link to="/posts" className="backLink">
        ← 목록으로
      </Link>

      <article className="card">
        <h2>{post.title}</h2>
        <p className="meta">
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </p>
        <p className="postContent">{post.content}</p>
        <button className="danger" onClick={handleDeletePost}>
          삭제
        </button>
      </article>

      <section>
        <h3>댓글 {comments.length}</h3>
        <ul className="commentList">
          {comments.map((comment) => (
            <li key={comment.id} className="card">
              <span>{comment.content}</span>
              <button
                className="danger small"
                onClick={() => handleDeleteComment(comment.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
        <form className="form inline" onSubmit={handleAddComment}>
          <input
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">등록</button>
        </form>
      </section>
    </div>
  );
}

export default PostDetail;
