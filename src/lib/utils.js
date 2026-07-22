import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return "$0";
  return `$${n.toFixed(0)}`;
}
