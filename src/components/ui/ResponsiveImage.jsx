export function ResponsiveImage({
  imgId,
  query,
  ratio = '4x3',
  width = 800,
  alt,
  className,
  fill = false,
}) {
  const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
      alt={alt}
      className={className}
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } : undefined}
      loading="lazy"
    />
  )
}

export function ResponsiveBackground({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  )
}
