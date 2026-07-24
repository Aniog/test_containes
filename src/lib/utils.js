import { clsx } from 'clsx';

export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function calculateDiscount(original, sale) {
  return Math.round(((original - sale) / original) * 100);
}
