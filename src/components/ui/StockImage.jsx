import { useEffect, useRef, useId } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function StockImage({
  id,
  query,
  ratio,
  width,
  alt,
  className,
  containerRef,
}) {
  const fallbackId = useId().replace(/:/g, '')
  const imgId = id || `img-${fallbackId}`
  const ref = useRef(null)

  useEffect(() => {
    if (!containerRef?.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [containerRef, query])

  return (
    <img
      ref={ref}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={className}
    />
  )
}

export function StockBackground({
  id,
  query,
  ratio,
  width,
  className,
  containerRef,
  children,
}) {
  const fallbackId = useId().replace(/:/g, '')
  const bgId = id || `bg-${fallbackId}`
  const ref = useRef(null)

  useEffect(() => {
    if (!containerRef?.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [containerRef, query])

  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  )
}
