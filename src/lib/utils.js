import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`;
}

export function getStarArray(rating) {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
}
