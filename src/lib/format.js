export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function formatPrice(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
