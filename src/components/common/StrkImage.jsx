import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const FALLBACK_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export default function StrkImage({
  id,
  query,
  ratio = '4x3',
  width = '800',
  alt,
  className = '',
}) {
  const imageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      const container = imageRef.current?.parentElement ?? imageRef.current
      cleanup = ImageHelper.loadImages(strkImgConfig, container)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [id, query, ratio, width])

  return (
    <img
      ref={imageRef}
      src={FALLBACK_PIXEL}
      alt={alt}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      className={className}
      loading="lazy"
    />
  )
}
