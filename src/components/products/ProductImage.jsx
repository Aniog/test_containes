import { getConfiguredImageUrl } from '../../lib/strk-images.js'

export default function ProductImage({
  product,
  mode = 'primary',
  instance = 'image',
  className = '',
  imgClassName = '',
  ratio = '3x4',
  width = '800',
}) {
  const safeInstance = instance.replace(/[^a-zA-Z0-9-]/g, '-')
  const imageId = `velmora-${product.id}-${safeInstance}-${mode}-a79c2e`
  const titleId = `product-${product.id}-${safeInstance}-${mode}-title`
  const descId = `product-${product.id}-${safeInstance}-${mode}-desc`
  const query = `[${descId}] [${titleId}]`
  const imageUrl = getConfiguredImageUrl(imageId)

  return (
    <div className={className}>
      <img
        data-strk-img-id={imageId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={imageUrl || undefined}
        alt={product.name}
        className={imgClassName}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {mode === 'secondary' ? product.secondImageQuery : product.imageQuery}
      </span>
    </div>
  )
}
