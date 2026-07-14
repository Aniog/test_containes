import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { query: product.imageQuery, id: `pdg-${product.id}-1` },
    { query: product.imageQueryAlt, id: `pdg-${product.id}-2` },
    { query: `${product.name} jewelry detail macro closeup`, id: `pdg-${product.id}-3` },
  ]

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeIndex])

  return (
    <div ref={containerRef} className="flex flex-col-reverse lg:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border-2 transition-colors duration-200 ${
              activeIndex === i ? 'border-gold-500' : 'border-cream-300 hover:border-cream-400'
            }`}
          >
            <img
              data-strk-img-id={img.id}
              data-strk-img={`${img.query} thumbnail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-cream-200/50 overflow-hidden">
        <img
          data-strk-img-id={images[activeIndex].id + '-main'}
          data-strk-img={`${images[activeIndex].query} product hero main`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>
    </div>
  )
}
