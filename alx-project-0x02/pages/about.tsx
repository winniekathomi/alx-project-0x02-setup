import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm" label="Small Rounded-sm" />
          <Button size="medium" shape="rounded-md" label="Medium Rounded-md" />
          <Button size="large" shape="rounded-full" label="Large Rounded-full" />
        </div>
      </main>
    </>
  );
}
