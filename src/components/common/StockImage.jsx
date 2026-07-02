const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const StockImage = ({
  as: Element = 'img',
  id,
  query,
  ratio = '4x3',
  width = '900',
  alt = '',
  className = '',
  children,
}) => {
  if (Element === 'img') {
    return (
      <img
        alt={alt}
        className={className}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholder}
      />
    )
  }

  return (
    <Element
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </Element>
  )
}

export default StockImage
