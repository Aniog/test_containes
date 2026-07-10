export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter((x) => typeof x === "string" && x.trim().length > 0)
    .join(" ")
    .trim();
}

export function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "$0";
  return `$${value.toFixed(0)}`;
}

export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
