import strkImgConfig from '@/strk-img-config.json'

function getSelectedImage(entry) {
  const results = Array.isArray(entry?.results) ? entry.results : []
  if (!results.length) {
    return null
  }

  if (entry?.picked) {
    const picked = results.find((result) => String(result.id) === String(entry.picked))
    if (picked?.url) {
      return picked
    }
  }

  return results.find((result) => result?.url) || null
}

export function getStrkImageUrl(imageId) {
  if (!imageId) {
    return ''
  }

  return getSelectedImage(strkImgConfig[imageId])?.url || ''
}
