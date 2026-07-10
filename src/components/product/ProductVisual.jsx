import { useRef } from 'react'
import { useStrkImages } from '@/hooks/useStrkImages'

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
      <div
        aria-label={product.name}
        role="img"
        className="h-full w-full bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
        data-strk-bg-id={imageId}
        data-strk-bg={`[${modeId}] [${descId}] [${titleId}]`}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
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
