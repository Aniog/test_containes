import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { getStrkImageSrc } from '../../lib/strk-image'

export default function ProductImage({
  product,
  variant = 'primary',
  ratio = '4x3',
  width = '700',
  className = '',
  querySuffix = '',
  titleId,
  descId,
}) {
  const imageRef = useRef(null)
  const resolvedTitleId = titleId || `product-${product.id}-title`
  const resolvedDescId = descId || `product-${product.id}-desc`
  const variantId = `product-${product.id}-${variant}`
  const imageId = `${variantId}-img-velmora`

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imageRef.current?.parentElement || imageRef.current)
  }, [product.id, variant, ratio, width, querySuffix, resolvedTitleId, resolvedDescId])

  return (
    <img
      ref={imageRef}
      alt={product.name}
      className={className}
      data-strk-img-id={`${variantId}-img-velmora`}
      data-strk-img={`[${resolvedDescId}] [${resolvedTitleId}] ${querySuffix}`.trim()}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getStrkImageSrc(imageId)}
    />
  )
}
