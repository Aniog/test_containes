import { clsx } from 'clsx';
import { products } from '@/data/products';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return { full, half, empty };
}

export function getBestsellers() {
  return products.filter(p => p.bestseller);
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

export function getRelatedProducts(slug, limit = 4) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter(p => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}
