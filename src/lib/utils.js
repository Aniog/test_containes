export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`;
}
