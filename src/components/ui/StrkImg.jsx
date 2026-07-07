const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function StrkImg({
  id,
  query,
  ratio,
  width,
  alt,
  className,
  lazy = true,
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      loading={lazy ? 'lazy' : 'eager'}
      src={TRANSPARENT_PIXEL}
    />
  );
}

export function StrkBg({
  id,
  query,
  ratio,
  width,
  className,
  children,
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  );
}
