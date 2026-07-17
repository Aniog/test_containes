const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Stock-tagged product image. Queries reference hidden descriptive text spans
 * (pds-* ids) rendered next to the image so the stock system receives rich,
 * specific context for each product and view.
 */
export default function ProductImage({
  product,
  view = 'main',
  ratio = '4x5',
  width = '800',
  className = '',
  idSuffix = '',
}) {
  const base = `pds-${product.id}-${view}${idSuffix}`
  return (
    <>
      <span
        id={`${base}-t`}
        className="sr-only"
      >{`${product.name} — ${product.short}`}</span>
      <span id={`${base}-c`} className="sr-only">
        {`${product.category} · ${product.material} · demi-fine jewelry product photography, warm soft light, neutral background, luxury editorial`}
      </span>
      <img
        data-strk-img-id={`${base}-img`}
        data-strk-img={`[${base}-t] [${base}-c]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={SVG_PLACEHOLDER}
        alt={`${product.name} — ${product.category}`}
        className={className}
        loading="lazy"
      />
    </>
  )
}
