import strkImgConfig from '@/strk-img-config.json'

const resolveImageEntry = (imageId, seen = new Set()) => {
  if (!imageId || seen.has(imageId)) return null

  seen.add(imageId)

  const entry = strkImgConfig[imageId]
  if (!entry) return null
  if (Array.isArray(entry.results) && entry.results.length > 0) return entry

  if (entry.reusedFrom) {
    return resolveImageEntry(entry.reusedFrom, seen)
  }

  return entry
}

export const getStrkImageUrl = (imageId) => {
  const entry = resolveImageEntry(imageId)
  const results = entry?.results ?? []

  if (!results.length) return ''

  const pickedId = entry?.picked || results[0]?.id
  const pickedImage = results.find((result) => result.id === pickedId) || results[0]

  return pickedImage?.url || ''
}
