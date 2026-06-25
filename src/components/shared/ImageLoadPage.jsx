import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '../../strk-img-config.json'

const ImageLoadPage = ({ children, className = '', effectKey = '' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [effectKey])

  return (
    <main className={className} ref={containerRef}>
      {children}
    </main>
  )
}

export default ImageLoadPage
