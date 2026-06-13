import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '../../strk-img-config.json'

function ImagePageShell({ children }) {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return <div ref={containerRef}>{children}</div>
}

export default ImagePageShell
