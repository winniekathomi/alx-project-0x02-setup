// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <Header />
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Posts</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}  // API returns 'body' instead of 'content'
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
}

// Fetch posts at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  // Optional: map data if needed
  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
  }));

  return {
    props: { posts },
  };
}
