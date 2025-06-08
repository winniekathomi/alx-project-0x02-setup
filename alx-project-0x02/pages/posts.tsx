import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: PostProps[] = await res.json();
        setPosts(data.slice(0, 10)); // Limit to first 10 posts
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))
        )}
      </main>
    </>
  );
}
