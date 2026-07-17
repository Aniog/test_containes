import { SVG_PLACEHOLDER } from './StrkImage'

/**
 * Renders one tagged stock image for a product.
 * variant: 'a' (editorial flat-lay / model shot) or 'b' (macro detail, shown on hover).
 * Text references must stay mounted nearby — ProductCard renders sr-only mirrors
 * with ids `${product.id}-img-name` / `${product.id}-img-desc`.
 */
export default function ProductImage({ product, variant = 'a', className = '', ratio = '4x5', width = 800 }) {
  const isA = variant === 'a'
  const descriptor = isA
    ? product.category === 'Necklaces'
      ? 'worn on neck model editorial'
      : product.category === 'Sets'
        ? 'luxury gift box flat lay'
        : 'worn on ear model editorial'
    : 'macro detail close-up dark background'

  return (
    <img
      data-strk-img-id={`product-${product.id}-${variant}`}
      data-strk-img={`[${product.id}-img-desc] [${product.id}-img-name] ${descriptor} 18k gold jewelry warm light`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={SVG_PLACEHOLDER}
      alt={`${product.name} — ${product.short}`}
      loading="lazy"
      className={className}
    />
  )
}
