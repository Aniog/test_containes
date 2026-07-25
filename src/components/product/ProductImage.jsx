import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function ProductImage({ product, scope, variant = 'primary', ratio = '4x3', width = '700', className = '' }) {
  const imageRef = useRef(null)
  const titleId = `${scope}-${product.id}-title`
  const descId = `${scope}-${product.id}-desc`
  const contextId = `${scope}-${product.id}-context`

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imageRef.current)
  }, [contextId, descId, titleId, variant])

  return (
    <span ref={imageRef} className="contents">
      <span id={contextId} className="sr-only" aria-hidden="true">{product.imagePrompt}</span>
      <span id={titleId} className="sr-only" aria-hidden="true">{product.name}</span>
      <span id={descId} className="sr-only" aria-hidden="true">{product.description}</span>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={product.name}
        data-strk-img-id={`${scope}-${product.id}-${variant}`}
        data-strk-img={`[${contextId}] [${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        className={className}
      />
    </span>
  )
}
