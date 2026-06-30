import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function StrkImg({
  id,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className = '',
}) {
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return
    return ImageHelper.loadImages(strkImgConfig, imgRef.current)
  }, [query, ratio, width])

  return (
    <img
      ref={imgRef}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={className}
    />
  )
}

export function StrkBg({
  id,
  query,
  ratio = '16x9',
  width = 1200,
  className = '',
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [query, ratio, width])

  return (
    <div
      ref={ref}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  )
}
