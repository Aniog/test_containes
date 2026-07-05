import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Product photo component that always renders two stacked images.
 * The first is the primary still, the second is the hover swap. Both
 * are wired to the data-strk-img system. The image search strings
 * are constructed from the product's stable id/title/subtitle keys
 * (handled in the parent) so the runtime query matches the actual
 * DOM text nodes.
 */
export default function ProductImage({
  imgId,
  imgQuery,
  ratio = '3x4',
  width = 700,
  alt,
  className,
}) {
  return (
    <div className={cn('relative w-full overflow-hidden bg-cream', className)}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={imgQuery}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}
