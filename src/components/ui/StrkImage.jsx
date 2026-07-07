import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const StrkImage = forwardRef(function StrkImage(
  { img, alt, className, imgClassName },
  ref
) {
  if (!img) return null

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <img
        alt={alt}
        data-strk-img-id={img.imgId}
        data-strk-img={img.query}
        data-strk-img-ratio={img.ratio}
        data-strk-img-width={img.width}
        src={PLACEHOLDER_SVG}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </div>
  )
})

export function StrkBackground({ bg, children, className }) {
  if (!bg) return null

  return (
    <div
      data-strk-bg-id={bg.bgId}
      data-strk-bg={bg.query}
      data-strk-bg-ratio={bg.ratio}
      data-strk-bg-width={bg.width}
      className={cn('bg-parchment', className)}
    >
      {children}
    </div>
  )
}
