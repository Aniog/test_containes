import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`;
}

export function renderStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return { full, hasHalf, empty: 5 - full - (hasHalf ? 1 : 0) };
}
