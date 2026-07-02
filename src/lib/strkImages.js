import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const getStrkImageSource = (slotId) => {
  const entry = strkImgConfig?.[slotId]
  const results = entry?.results

  if (!Array.isArray(results) || results.length === 0) {
    return PLACEHOLDER
  }

  if (entry?.picked) {
    const picked = results.find((result) => String(result.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }

  return results[0]?.url || PLACEHOLDER
}

export const strkPlaceholder = PLACEHOLDER
