// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

export default function Button({
  size,
  shape,
  label,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
}
