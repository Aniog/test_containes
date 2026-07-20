import strkImgConfig from '../strk-img-config.json'

export function getStrkImageUrl(imageId) {
  const entry = strkImgConfig[imageId]
  const pickedId = entry?.picked
  const pickedImage = entry?.results?.find((result) => result.id === pickedId)
  return pickedImage?.url || entry?.results?.[0]?.url || ''
}
