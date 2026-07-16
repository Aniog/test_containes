import { useRef, useState } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  useImageLoader(containerRef, [product.slug, activeIndex])

  const slides = product.galleryScenes.map((scene, index) => ({
    scene,
    titleId: `gallery-${product.slug}-${index}-title`,
    descId: `gallery-${product.slug}-${index}-desc`,
    imageId: `gallery-${product.slug}-${index}-img`,
  }))

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {slides.map((slide, index) => (
          <button
            key={slide.imageId}
            type="button"
            className={`h-24 w-20 shrink-0 overflow-hidden rounded-[1.3rem] border bg-velmora-mist/70 ${
              activeIndex === index ? 'border-velmora-gold' : 'border-velmora-ink/10'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
              data-strk-img-id={`${slide.imageId}-thumb`}
              data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-mist/70 lg:order-2">
        <img
          alt={product.name}
          className="h-full min-h-[420px] w-full object-cover"
          data-strk-img-id={`${slides[activeIndex].imageId}-main`}
          data-strk-img={`[${slides[activeIndex].descId}] [${slides[activeIndex].titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>

      {slides.map((slide, index) => (
        <div key={`${slide.imageId}-copy`} className="hidden" aria-hidden="true">
          <span id={slide.titleId}>{product.name}</span>
          <span id={slide.descId}>{slide.scene} angle {index + 1}</span>
        </div>
      ))}
    </div>
  )
}

export default ProductGallery
