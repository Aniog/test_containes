import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(value) {
  if (typeof value !== "number") return value;
  return `$${value.toFixed(0)}`;
}
