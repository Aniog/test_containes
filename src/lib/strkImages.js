import strkImgConfig from '@/strk-img-config.json'

export function getStrkImageUrl(imageId) {
  const entry = strkImgConfig[imageId]
  const pickedImage = entry?.results?.find((image) => image.id === entry.picked) || entry?.results?.[0]

  return pickedImage?.url
}
