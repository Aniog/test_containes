import React from 'react'
import { getStrkImageUrl } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * A content <img> backed by the strk stock-image system.
 */
export function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className = '',
  titleId,
  descId,
  ...rest
}) {
  const q = query || (descId && titleId ? `[${descId}] [${titleId}]` : titleId ? `[${titleId}]` : '')
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={q}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getStrkImageUrl(imgId)}
      {...rest}
    />
  )
}

/**
 * A background element backed by the strk stock-image system.
 */
export function StrkBackground({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className = '',
  children,
  titleId,
  descId,
  ...rest
}) {
  const q = query || (descId && titleId ? `[${descId}] [${titleId}]` : titleId ? `[${titleId}]` : '')
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={q}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      {...rest}
    >
      {children}
    </div>
  )
}

export { PLACEHOLDER }
