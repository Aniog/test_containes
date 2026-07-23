import strkImgConfig from '../strk-img-config.json'

export function getStockImageUrl(imageId) {
  const config = strkImgConfig[imageId]
  if (!config?.results?.length) return ''
  const picked = config.results.find((result) => String(result.id) === String(config.picked))
  return picked?.url || config.results[0]?.url || ''
}
