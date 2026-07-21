import { imagePlaceholder } from '../../data/products'

export default function ProductImage({
  product,
  variant = 'primary',
  ratio = '4x3',
  width = '700',
  className = '',
  querySuffix = '',
}) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const variantId = `product-${product.id}-${variant}`

  return (
    <img
      alt={product.name}
      className={className}
      data-strk-img-id={`${variantId}-img-velmora`}
      data-strk-img={`[${descId}] [${titleId}] ${querySuffix}`.trim()}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={imagePlaceholder}
    />
  )
}
