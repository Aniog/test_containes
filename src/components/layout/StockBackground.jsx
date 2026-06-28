export default function StockBackground({
  slotId,
  imageId,
  title,
  description,
  ratio = '16x9',
  width = '1600',
  className = '',
}) {
  const titleId = `${slotId}-title`
  const descId = `${slotId}-desc`

  return (
    <>
      <span id={titleId} className="sr-only">
        {title}
      </span>
      <span id={descId} className="sr-only">
        {description}
      </span>
      <div
        className={className}
        data-strk-bg-id={`${slotId}-${imageId}`}
        data-strk-bg={`[${descId}] [${titleId}]`}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
      />
    </>
  )
}
