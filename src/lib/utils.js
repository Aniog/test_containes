export function cn(...args) {
  return args
    .flat(Infinity)
    .filter(Boolean)
    .join(" ");
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`;
}
