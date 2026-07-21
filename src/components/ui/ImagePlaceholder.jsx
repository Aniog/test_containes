import strkImgConfig from '@/strk-img-config.json'

function getConfiguredImageUrl(imgId) {
  return strkImgConfig?.[imgId]?.results?.[0]?.url || ''
}

export default function ImagePlaceholder({
  alt,
  className,
  imgId,
  query,
  ratio = '4x3',
  width = '800',
}) {
  const configuredUrl = getConfiguredImageUrl(imgId)

  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={configuredUrl || undefined}
    />
  )
}
