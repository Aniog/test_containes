import React from 'react'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// A content image backed by the strk-img stock system.
// `query` should reference element ids, e.g. "[title-id] [desc-id]".
export default function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className,
  imgClassName,
  ...rest
}) {
  return (
    <div className={cn('relative overflow-hidden', className)} {...rest}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={PLACEHOLDER}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </div>
  )
}
