import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'

import strkImgConfig from '@/strk-img-config.json'

const ImagePanel = ({ bgId, query, title, description, ratio = '4x3' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-card">
      <div
        className="aspect-[4/3] w-full bg-brand-surface"
        data-strk-bg-id={bgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width="1000"
      />
      <div className="p-6 md:p-7">
        <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
        <p className="mt-3 text-base leading-7 text-brand-slate">{description}</p>
      </div>
    </div>
  )
}

export default ImagePanel
