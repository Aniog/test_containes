export const SVG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

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
      src={SVG_PLACEHOLDER}
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
