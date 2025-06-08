// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "../../interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <span className="text-sm text-gray-400">User ID: {userId}</span>
    </div>
  );
}
