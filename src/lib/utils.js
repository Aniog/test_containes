import { clsx } from "clsx"

// Lightweight cn — Tailwind merge is not installed in this template,
// but clsx handles conditional class composition cleanly.
export function cn(...inputs) {
  return clsx(...inputs);
}

export function formatPrice(value) {
  if (typeof value !== "number") return "";
  return `$${value.toFixed(0)}`;
}

export function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
