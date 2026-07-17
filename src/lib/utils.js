import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(value) {
  if (typeof value !== "number") return "";
  return `$${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
