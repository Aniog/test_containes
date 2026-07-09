import { useRef } from 'react'
import { useStrkImages } from '@/hooks/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductVisual({
  product,
  imageId,
  ratio = '4x3',
  width = '800',
  className = '',
  mode = 'product',
}) {
  const containerRef = useRef(null)
  const titleId = `${imageId}-title`
  const descId = `${imageId}-desc`
  const modeId = `${imageId}-mode`

  useStrkImages(containerRef, [product.id, imageId, mode])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        alt={product.name}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        data-strk-img-id={imageId}
        data-strk-img={`[${modeId}] [${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
      />
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.description}
      </span>
      <span id={modeId} className="sr-only">
        {mode === 'worn'
          ? 'warm editorial jewelry worn on a woman close up'
          : mode === 'detail'
            ? 'luxury macro detail of gold demi fine jewelry on neutral silk'
            : 'high end demi fine gold jewelry product photography on warm neutral background'}
      </span>
    </div>
  )
}
