// pages/home.tsx
import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Welcome to SoloForge", content: "This is a reusable card component." },
    { title: "Next.js + TypeScript", content: "Building modern web apps with React." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Post
      </button>

      <div className="flex flex-col gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={addPost}
      />
    </div>
  );
}
