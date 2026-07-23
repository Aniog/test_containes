const placeholder =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export const StockImage = ({
  imageId,
  titleId,
  descId,
  alt,
  ratio = '4x3',
  width = '900',
  className = '',
  sizes = '(min-width: 1024px) 33vw, 100vw',
}) => (
  <img
    alt={alt}
    className={className}
    data-strk-img-id={imageId}
    data-strk-img={`[${descId}] [${titleId}]`}
    data-strk-img-ratio={ratio}
    data-strk-img-width={width}
    loading="lazy"
    sizes={sizes}
    src={placeholder}
  />
)

export const StockBackground = ({
  backgroundId,
  titleId,
  descId,
  ratio = '16x9',
  width = '1600',
  className = '',
  children,
}) => (
  <div
    className={className}
    data-strk-bg-id={backgroundId}
    data-strk-bg={`[${descId}] [${titleId}]`}
    data-strk-bg-ratio={ratio}
    data-strk-bg-width={width}
  >
    {children}
  </div>
)
