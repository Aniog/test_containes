export function formatPrice(value) {
  return `$${value.toFixed(0)}`;
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
