import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPost, getPosts } from "../api";
import { formatDate } from "../utils/formatDate";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError("게시글을 불러오지 못했습니다. 서버를 확인하세요."));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      const newPost = await createPost({ title, content });
      setPosts((prev) => [newPost, ...prev]);
      setTitle("");
      setContent("");
      setError("");
    } catch {
      setError("게시글 작성에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>게시판</h2>

      <form className="card form" onSubmit={handleSubmit}>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">글쓰기</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id} className="card">
            <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <time className="meta" dateTime={post.createdAt}>
              {formatDate(post.createdAt)}
            </time>
          </li>
        ))}
        {posts.length === 0 && !error && <p>아직 게시글이 없습니다.</p>}
      </ul>
    </div>
  );
}

export default Posts;
