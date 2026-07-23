import React from 'react'
import { getStockImageUrl } from '../../lib/image-url'

export default function ProductImage({
  product,
  imageId,
  className = '',
  ratio = '4x3',
  width = '700',
}) {
  return (
    <img
      alt={product.name}
      className={className}
      data-strk-img-id={imageId}
      data-strk-img={`[${product.queryIds.desc}] [${product.queryIds.title}] [bestsellers-kicker]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getStockImageUrl(imageId)}
    />
  )
}
