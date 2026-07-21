import strkImgConfig from '../strk-img-config.json'

const getPickedResult = (entry) => {
  if (!entry?.results?.length) return null
  return entry.results.find((result) => result.id === entry.picked) || entry.results[0]
}

export const getStrkImageSrc = (imageId) => {
  const requested = getPickedResult(strkImgConfig[imageId])
  if (requested?.url) return requested.url

  const fallback = Object.values(strkImgConfig).map(getPickedResult).find((result) => result?.url)
  return fallback?.url || ''
}
