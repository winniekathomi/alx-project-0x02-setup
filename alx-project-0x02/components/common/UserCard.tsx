// components/common/UserCard.tsx
import React from "react";

interface UserCardProps {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default function UserCard({ id, name, email, username }: UserCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">@{username}</p>
      <p className="text-sm text-gray-700 dark:text-gray-400">{email}</p>
    </div>
  );
}
