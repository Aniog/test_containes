export const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function getStrkImageUrl(config, imageId) {
  const entry = config?.[imageId]
  const results = entry?.results ?? []
  if (!results.length) return placeholderImage
  const picked = entry?.picked ? results.find((item) => String(item.id) === String(entry.picked)) : null
  return (picked ?? results[0])?.url ?? placeholderImage
}
