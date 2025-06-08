// components/common/PostModal.tsx
import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddPost(title, content);
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-gray-100">Add New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
