export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`;
}
