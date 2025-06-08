// interfaces/index.ts

// Interface for the Card component
export interface CardProps {
  title: string;
  content: string;
}

// Interface for the Button component
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
  onClick?: () => void;
}

// Interface for the PostCard component
export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  body: string;
  content: string;
}

// Interface for the UserCard component (for later task)
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
