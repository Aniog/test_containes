// Helpers for resolving Strk stock image URLs without waiting for the
// runtime. Useful for components that render outside the main viewport
// (cart drawer, mobile menus, future modals) and can't rely on a
// MutationObserver to swap the src after mount.
import strkImgConfig from "@/strk-img-config.json"

function pickUrl(entry) {
  if (!entry?.results?.length) return null
  if (entry.picked) {
    const match = entry.results.find(
      (r) => String(r.id) === String(entry.picked)
    )
    if (match?.url) return match.url
  }
  return entry.results[0]?.url || null
}

export function lookupImageUrl(id) {
  if (!id) return null
  return pickUrl(strkImgConfig[id]) || null
}

export function lookupProductImageUrl(product, slot = 0) {
  if (!product) return null
  const candidates = [
    `main-${product.id}-${slot}`,
    `main-${product.id}-0`,
    `thumb-${product.id}-${slot}`,
    `card-${product.id}-${slot}`,
    `card-${product.id}-0`,
  ]
  for (const candidate of candidates) {
    const url = lookupImageUrl(candidate)
    if (url) return url
  }
  return null
}
