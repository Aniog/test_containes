import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function getImagePlaceholder(category = 'jewelry') {
  const placeholders = {
    jewelry: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop',
    earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
    necklace: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
    huggies: 'https://images.unsplash.com/photo-1630019852942-f89202989a51?w=600&h=750&fit=crop',
    hero: 'https://images.unsplash.com/photo-1573408301185-9519f94a2a2c?w=1920&h=1080&fit=crop',
    brand: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
    testimonial: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  };
  return placeholders[category] || placeholders.jewelry;
}
