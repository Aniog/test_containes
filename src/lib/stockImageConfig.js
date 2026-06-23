import strkImgConfig from '@/strk-img-config.json'

export const stockImagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const getEntryScore = (entryId) => {
  if (entryId.includes('primary-image') || entryId.includes('main-0')) return 0
  if (entryId.includes('secondary-image') || entryId.includes('main-1')) return 1
  if (entryId.includes('styled') || entryId.includes('main-2')) return 2
  if (entryId.includes('detail')) return 3
  return 4
}

export const getSelectedStockImage = (imageId) => {
  const entry = strkImgConfig[imageId]
  const results = entry?.results

  if (!Array.isArray(results) || results.length === 0) {
    return null
  }

  return (
    results.find((result) => String(result.id) === String(entry?.picked)) ??
    results[0] ??
    null
  )
}

export const getStockImageUrl = (imageId) =>
  getSelectedStockImage(imageId)?.url || stockImagePlaceholder

export const getProductImageSet = (slug) => {
  const entries = Object.entries(strkImgConfig)
    .filter(([entryId]) => entryId.includes(slug))
    .sort(([leftId], [rightId]) => getEntryScore(leftId) - getEntryScore(rightId))
    .map(([entryId]) => getSelectedStockImage(entryId))
    .filter(Boolean)

  const uniqueImages = []
  const seenUrls = new Set()

  entries.forEach((image) => {
    if (!image?.url || seenUrls.has(image.url)) return
    seenUrls.add(image.url)
    uniqueImages.push(image)
  })

  return uniqueImages
}

export const getProductImageUrl = (slug, index = 0) => {
  const images = getProductImageSet(slug)
  return images[index]?.url || images[0]?.url || stockImagePlaceholder
}
