import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Background image container — the strk-img-config supplies the URL, and
 * the background is applied to this element. Use sparingly; backgrounds
 * cannot read alt text for accessibility.
 */
export function StrkBackground({
  id,
  query = '',
  ratio = '16x9',
  width = 1600,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    if (!ref.current) return undefined
    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [id, query])

  return (
    <div
      ref={ref}
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      {...rest}
    >
      {children}
    </div>
  )
}
