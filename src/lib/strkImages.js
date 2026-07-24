import strkImgConfig from '@/strk-img-config.json'

export const getStrkImageUrl = (imageId) =>
  strkImgConfig?.[imageId]?.results?.[0]?.url || ''

export const getStrkBackgroundStyle = (imageId) => {
  const imageUrl = getStrkImageUrl(imageId)
  return imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined
}
