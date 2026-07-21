import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getImagePlaceholder(ratio = '4x3') {
  const ratios = {
    '1x1': { width: 400, height: 400 },
    '4x3': { width: 600, height: 450 },
    '3x4': { width: 450, height: 600 },
    '16x9': { width: 800, height: 450 },
    '9x16': { width: 450, height: 800 },
    '3x2': { width: 600, height: 400 },
    '2x3': { width: 400, height: 600 },
  };
  const { width, height } = ratios[ratio] || ratios['4x3'];
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`;
}
