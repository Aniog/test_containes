export function StockImage({ id, query, ratio = '4x3', width = '800', alt, className = '' }) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
    />
  )
}

export function StockBackground({ id, query, ratio = '16x9', width = '1600', className = '', children }) {
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
  )
}
