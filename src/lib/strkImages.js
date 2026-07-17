import strkImgConfig from '@/strk-img-config.json'

const unavailableImageIds = new Set([
  'photo-1609971919698-283e897e56a4',
  'photo-1603925710106-630764606062',
  'photo-1610223515196-65f21bc2347e',
  'photo-1561872776-234ca64a8873',
])

const getAvailableResult = (image) => {
  const results = image?.results || []
  const selected = results.find((result) => result.id === image?.picked && !unavailableImageIds.has(result.id))

  return selected || results.find((result) => result.url && !unavailableImageIds.has(result.id))
}

export const sanitizedStrkImgConfig = Object.fromEntries(
  Object.entries(strkImgConfig).map(([id, image]) => {
    const availableResult = getAvailableResult(image)

    return [
      id,
      {
        ...image,
        picked: availableResult?.id || image?.picked,
      },
    ]
  }),
)

const imageUrlById = Object.fromEntries(
  Object.entries(sanitizedStrkImgConfig).map(([id, image]) => [id, getAvailableResult(image)?.url || '']),
)

export function getStrkImageUrl(id) {
  if (imageUrlById[id]) return imageUrlById[id]

  const detailMatch = id.match(/^detail-(.*)-(\d+)-velmora$/)
  if (detailMatch) {
    return imageUrlById[`thumb-${detailMatch[1]}-${detailMatch[2]}-velmora`] || imageUrlById[`detail-${detailMatch[1]}-0-velmora`] || ''
  }

  return ''
}
