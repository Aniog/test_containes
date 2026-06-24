// Tiny inline SVG placeholder for data-strk-img tags.
// Visible while the stock image system resolves the real image.
export const PLACEHOLDER_SRC =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%204%205'%3E%3Crect%20width%3D'4'%20height%3D'5'%20fill%3D'%23F2EDE5'%2F%3E%3C%2Fsvg%3E";

export function formatPrice(amount) {
  return `$${Number(amount).toFixed(0)}`;
}

export function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}
