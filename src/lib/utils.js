import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(value) {
  const num = Number(value) || 0;
  return `$${num.toFixed(0)}`;
}
