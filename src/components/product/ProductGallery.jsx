import React, { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const frames = [
    { id: 'primary', label: 'gold jewelry close-up on warm neutral silk', ratio: '4x3' },
    { id: 'worn', label: 'gold jewelry worn by model close up', ratio: '4x3' },
    { id: 'gift', label: 'gold jewelry gift box detail', ratio: '4x3' },
  ]
  const [active, setActive] = useState(frames[0])
  const activeLabelId = `gallery-${product.id}-${active.id}-label`
  const galleryRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.id, active.id])

  return (
    <div ref={galleryRef} className="grid gap-4 lg:grid-cols-[90px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {frames.map((frame) => {
          const labelId = `gallery-${product.id}-${frame.id}-label`
          return (
            <button
              key={frame.id}
              type="button"
              onClick={() => setActive(frame)}
              className={`min-w-20 overflow-hidden border bg-velmora-parchment transition ${active.id === frame.id ? 'border-velmora-champagne' : 'border-velmora-mist hover:border-velmora-antique'}`}
              aria-label={`Show ${frame.label}`}
            >
              <div
                className="aspect-square w-full bg-cover bg-center"
                role="img"
                aria-label={`${product.name} ${frame.label}`}
                data-strk-bg-id={`thumb-${product.id}-${frame.id}`}
                data-strk-bg={`[${labelId}] [${product.titleId}]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="220"
              />
              <span id={labelId} className="sr-only">{product.name} {frame.label}</span>
            </button>
          )
        })}
      </div>
      <div
        className="order-1 aspect-[4/5] overflow-hidden border border-velmora-mist bg-velmora-parchment bg-cover bg-center shadow-editorial md:aspect-[5/6] lg:order-2"
        role="img"
        aria-label={`${product.name} ${active.label}`}
        data-strk-bg-id={`main-${product.id}-${active.id}`}
        data-strk-bg={`[${activeLabelId}] [${product.descId}] [${product.titleId}]`}
        data-strk-bg-ratio={active.ratio}
        data-strk-bg-width="1100"
      />
    </div>
  )
}
