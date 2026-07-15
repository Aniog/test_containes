export default function ProductImage({ image, ratio = '4x3', width = '900', className = '' }) {
  return (
    <>
      <img
        alt={image.alt}
        className={className}
        data-strk-img-id={image.imgId}
        data-strk-img={`[${image.descId}] [${image.titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <span id={image.titleId} className="sr-only">
        {image.title}
      </span>
      <span id={image.descId} className="sr-only">
        {image.description}
      </span>
    </>
  )
}
