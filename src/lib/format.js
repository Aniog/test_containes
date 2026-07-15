// Format a number as USD with no decimals for round price points.
export function formatPrice(value) {
  if (typeof value !== "number") return value;
  if (Number.isInteger(value)) {
    return `$${value}`;
  }
  return `$${value.toFixed(2)}`;
}
