import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

function ImageLoadContainer({ as: Tag = 'div', children, className = '' }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [location.pathname])

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}

export default ImageLoadContainer
