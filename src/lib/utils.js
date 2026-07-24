import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`;
}

export function generateStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return { full, hasHalf, empty };
}
