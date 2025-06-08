// pages/users.tsx
import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UsersPageProps {
  users: User[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <Header />
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
