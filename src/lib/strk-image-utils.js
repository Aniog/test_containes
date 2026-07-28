import strkImgConfig from '@/strk-img-config.json'

export const getStrkImageUrl = (imageId) => {
  const entry = strkImgConfig[imageId]
  const results = entry?.results || []
  const picked = entry?.picked

  if (picked?.url) return picked.url
  if (typeof picked === 'string') {
    return results.find((result) => result.id === picked)?.url || results[0]?.url || ''
  }

  return results[0]?.url || ''
}

export const getStrkBackgroundStyle = (imageId) => ({
  backgroundImage: `url(${getStrkImageUrl(imageId)})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
