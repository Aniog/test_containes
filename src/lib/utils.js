import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(value) {
  const n = Number(value || 0);
  return `$${n.toFixed(0)}`;
}

export function formatPriceWithCents(value) {
  const n = Number(value || 0);
  return `$${n.toFixed(2)}`;
}
