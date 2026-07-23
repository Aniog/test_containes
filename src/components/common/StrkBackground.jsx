import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function StrkBackground({
  id,
  query,
  ratio = '16x9',
  width = '1200',
  className = '',
  children,
}) {
  const backgroundRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      const container = backgroundRef.current?.parentElement ?? backgroundRef.current
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
    <div
      ref={backgroundRef}
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}
