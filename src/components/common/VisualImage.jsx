export default function VisualImage({ alt, imgId, query, ratio = '4x3', width = '800', className = '' }) {
  return (
    <img
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
    />
  )
}
