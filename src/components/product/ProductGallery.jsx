import { useRef, useState } from 'react'
import { getPickedImageUrl } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const slides = product.galleryCaptions.map((caption, index) => {
    const mainImageId = `product-gallery-main-${product.id}-${index}`
    const thumbImageId = `product-gallery-thumb-${product.id}-${index}`

    return {
      id: `${product.id}-gallery-${index}`,
      caption,
      captionId: `product-${product.id}-caption-${index}`,
      mainImageId,
      thumbImageId,
      mainImageSrc: getPickedImageUrl(mainImageId),
      thumbImageSrc: getPickedImageUrl(thumbImageId) || getPickedImageUrl(mainImageId),
    }
  })

  useImageLoader(containerRef, [product.id, activeIndex])

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-xl shadow-stone-900/5">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={slides[activeIndex].mainImageId}
          data-strk-img={`[${slides[activeIndex].captionId}] [product-${product.id}-description] [product-${product.id}-name]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src={slides[activeIndex].mainImageSrc}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`overflow-hidden rounded-[1.5rem] border bg-stone-100 transition ${
              activeIndex === index
                ? 'border-stone-950 shadow-lg shadow-stone-900/10'
                : 'border-stone-200 hover:border-amber-400'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span id={slide.captionId} className="sr-only">
              {slide.caption}
            </span>
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="aspect-square w-full object-cover"
              data-strk-img-id={slide.thumbImageId}
              data-strk-img={`[${slide.captionId}] [product-${product.id}-name]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              loading="lazy"
              src={slide.thumbImageSrc}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
