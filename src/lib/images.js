export const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function productTitleId(product) {
  return `product-title-${product.id}`
}

export function productDescId(product) {
  return `product-desc-${product.id}`
}

export function productImgId(product, suffix = 'main') {
  return `product-img-${product.id}-${suffix}`
}
