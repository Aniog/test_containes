import strkImgConfig from '@/strk-img-config.json'

const DEFAULT_STRK_IMAGE_ID = 'prod-vivid-aura-primary'

const getEntryUrl = (entry) => {
  if (!entry) {
    return null
  }

  const pickedId = entry.picked
  const pickedResult = entry.results?.find((result) => result.id === pickedId)

  return pickedResult?.url || entry.results?.[0]?.url || null
}

export const getDefaultStrkImageUrl = () => {
  const defaultEntry = strkImgConfig?.[DEFAULT_STRK_IMAGE_ID] || Object.values(strkImgConfig || {})[0]

  return getEntryUrl(defaultEntry)
}

export const getStrkImageUrl = (imageId) => {
  const directEntry = strkImgConfig?.[imageId]

  if (directEntry) {
    return getEntryUrl(directEntry)
  }

  const detailMainEntry = strkImgConfig?.[`${imageId}-detail-main`]

  if (detailMainEntry) {
    return getEntryUrl(detailMainEntry)
  }

  const detailThumbEntry = strkImgConfig?.[`${imageId}-detail-thumb`]

  return getEntryUrl(detailThumbEntry) || getDefaultStrkImageUrl()
}
