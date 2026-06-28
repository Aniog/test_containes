import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function StockImage({
  slotId,
  imageId,
  title,
  description,
  ratio = '4x3',
  width = '900',
  resultIndex = 0,
  alt,
  className = '',
}) {
  const titleId = `${slotId}-title`
  const descId = `${slotId}-desc`
  const configKey = `${slotId}-${imageId}`
  const configImageUrl = strkImgConfig?.[configKey]?.results?.[resultIndex]?.url || ''

  return (
    <>
      <span id={titleId} className="sr-only">
        {title}
      </span>
      <span id={descId} className="sr-only">
        {description}
      </span>
      <img
        alt={alt}
        className={className}
        data-strk-img-id={configKey}
        data-strk-img={`[${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={configImageUrl || PLACEHOLDER}
      />
    </>
  )
}
