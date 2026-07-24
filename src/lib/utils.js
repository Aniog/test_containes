import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
