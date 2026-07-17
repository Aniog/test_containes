import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export function StoreImage({ id, query, ratio = '4x3', width = '800', alt, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [id, query, ratio, width])

  return (
    <span ref={containerRef} className="contents">
      <img
        alt={alt}
        className={className}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </span>
  )
}
