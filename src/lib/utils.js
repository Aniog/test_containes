import { clsx } from 'clsx';

export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`;
}
