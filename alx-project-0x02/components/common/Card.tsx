// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-md p-4 shadow-md max-w-md w-full bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default Card;
