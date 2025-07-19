import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Generate a unique ID for todo items
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}