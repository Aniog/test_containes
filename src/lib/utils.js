import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import strkImgConfig from '@/strk-img-config.json';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function getStarArray(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return { full, half, empty };
}

/**
 * Resolve a strk-img ID to a URL from the config.
 * Returns the first result URL, or null if not found.
 */
export function resolveStrkImgUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (entry && entry.results && entry.results.length > 0) {
    return entry.results[0].url;
  }
  return null;
}

/**
 * Resolve a strk-img ID to alt text from the config.
 */
export function resolveStrkImgAlt(imgId) {
  const entry = strkImgConfig[imgId];
  if (entry && entry.results && entry.results.length > 0) {
    return entry.results[0].alt || '';
  }
  return '';
}
