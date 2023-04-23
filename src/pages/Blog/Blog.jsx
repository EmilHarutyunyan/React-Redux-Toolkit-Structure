import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from '../../components/ErrorFallBack/ErrorFallBack';



const Bomb = ({ username }) => {
  if (username === "bomb") {
    throw new Error("💥 CABOOM 💥");
  }
  return `Hi ${username}`;
};


const Blog = () => {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get("blog") || "";
  const latest = searchParams.has("latest");
  const startsForm = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <Link
        to="/posts/new"
        style={{ margin: "1rem 0", display: "inline-block" }}
      >
        Add new post
      </Link>
      <div>
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={() => {
            setUsername([]);
          }}
          resetKeys={[posts]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsForm
        )
        .map((post, _) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
}

export default Blog