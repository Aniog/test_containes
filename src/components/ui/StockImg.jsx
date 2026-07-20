import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function StockImg({
  id,
  query,
  ratio = '1x1',
  width = 600,
  alt,
  className,
  fill = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [query, id])

  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      alt={alt}
      className={className}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      style={fill ? { width: '100%', height: '100%', objectFit: 'cover' } : undefined}
    />
  )
}

export function StockBg({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [query, id])

  return (
    <div
      ref={ref}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={className}
    >
      {children}
    </div>
  )
}
