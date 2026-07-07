import { getStrkImageSrc } from '@/lib/strkImage'

function ProductImage({ product, image, idPrefix, ratio = '4x5', width = '900', className = '', sizes = '' }) {
  const titleId = `${idPrefix}-${product.slug}-${image.id}-title`
  const descId = `${idPrefix}-${product.slug}-${image.id}-desc`

  return (
    <div className={className}>
      <img
        src={getStrkImageSrc(`${idPrefix}-${product.slug}-${image.id}-image`)}
        alt={image.alt}
        data-strk-img-id={`${idPrefix}-${product.slug}-${image.id}-image`}
        data-strk-img={`[${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        className={sizes}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {image.note}
      </span>
    </div>
  )
}

export default ProductImage
