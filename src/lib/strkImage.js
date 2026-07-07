import strkImgConfig from '@/strk-img-config.json'

const EMPTY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

function getPickedImageUrl(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) {
    return ''
  }

  if (entry?.picked) {
    const pickedResult = results.find((result) => String(result.id) === String(entry.picked))
    if (pickedResult?.url) {
      return pickedResult.url
    }
  }

  return results[0]?.url || ''
}

export function getStrkImageSrc(imageId) {
  if (!imageId) {
    return EMPTY_IMAGE
  }

  return getPickedImageUrl(strkImgConfig?.[imageId]) || EMPTY_IMAGE
}
