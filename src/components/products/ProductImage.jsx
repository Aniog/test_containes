import strkImgConfig from '../../strk-img-config.json'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

const resolveImageUrl = (imageId) => {
  const baseImageId = imageId.replace(/-(detail|thumb)$/, '')
  const entry = strkImgConfig[imageId] || strkImgConfig[baseImageId]
  const picked = entry?.results?.find((result) => result.id === entry?.picked)
  return picked?.url || entry?.results?.[0]?.url || ''
}

export default function ProductImage({ imageId, titleId, descId, alt, ratio = '4x3', width = '900', className = '' }) {
  const query = descId ? `[${descId}] [${titleId}]` : `[${titleId}]`
  const imageUrl = resolveImageUrl(imageId)

  return (
    <img
      src={imageUrl || placeholder}
      alt={alt}
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
