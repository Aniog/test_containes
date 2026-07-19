import { clsx } from "clsx";

// Lightweight cn helper. We don't pull tailwind-merge to keep the bundle
// slim — for this storefront we have no conflicting Tailwind utilities that
// require canonical merging.
export function cn(...inputs) {
  return clsx(inputs);
}

// Format a number as USD currency.
export function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Slug helper for product URLs.
export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
