import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-center gap-8">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/posts" className="hover:underline">
        Posts
      </Link>
    </header>
  );
};

export default Header;
