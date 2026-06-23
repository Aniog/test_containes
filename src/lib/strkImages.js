import strkImgConfig from '@/strk-img-config.json'

export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const getImageEntry = (imageId) => strkImgConfig?.[imageId] ?? null

const getImageResults = (imageId) => getImageEntry(imageId)?.results ?? []

const getPreferredResult = (imageId) => {
  const entry = getImageEntry(imageId)
  const results = entry?.results ?? []

  if (!results.length) {
    return null
  }

  return results.find((result) => result.id === entry?.picked) ?? results[0]
}

export const getStrkImageUrl = (imageId, resultIndex = 0) => {
  const results = getImageResults(imageId)

  if (!results.length) {
    return imagePlaceholder
  }

  if (resultIndex === 0) {
    return getPreferredResult(imageId)?.url || results[0]?.url || imagePlaceholder
  }

  return results[resultIndex]?.url || results[0]?.url || imagePlaceholder
}

const getResolvedGallerySources = (gallery = []) => {
  const urls = []

  gallery.forEach((entry) => {
    if (!entry) {
      return
    }

    const imageId = typeof entry === 'string' ? entry : entry.imageId
    const resultIndex = typeof entry === 'object' ? entry.resultIndex ?? 0 : 0
    const url = getStrkImageUrl(imageId, resultIndex)

    if (url && url !== imagePlaceholder && !urls.includes(url)) {
      urls.push(url)
    }
  })

  return urls
}

const getUniqueImageUrls = (imageIds = []) => {
  const urls = []

  imageIds.forEach((imageId) => {
    const preferredUrl = getStrkImageUrl(imageId)

    if (preferredUrl && preferredUrl !== imagePlaceholder && !urls.includes(preferredUrl)) {
      urls.push(preferredUrl)
    }

    getImageResults(imageId).forEach((result) => {
      if (result?.url && !urls.includes(result.url)) {
        urls.push(result.url)
      }
    })
  })

  return urls
}

export const getProductGalleryImages = (product) => {
  if (!product) {
    return []
  }

  const curatedSources = getResolvedGallerySources(product.media?.gallery ?? [])
  const uniqueUrls = curatedSources.length
    ? curatedSources
    : getUniqueImageUrls([product.imageIds.hero, product.imageIds.alt, product.imageIds.detail])

  return uniqueUrls.slice(0, 3).map((src, index) => ({
    key: `${product.id}-${index + 1}`,
    src,
    alt:
      index === 0
        ? `${product.name} front view`
        : index === 1
          ? `${product.name} alternate view`
          : `${product.name} detail view`,
  }))
}
