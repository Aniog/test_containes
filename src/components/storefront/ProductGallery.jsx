import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductGallery = ({ product, activeImage, onSelectImage }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [product.slug, activeImage])

  const galleryImages = [
    {
      key: 'hero',
      alt: product.name,
      query: `[pdp-${product.slug}-desc] [pdp-${product.slug}-name] [pdp-${product.slug}-type]`,
    },
    {
      key: 'detail',
      alt: `${product.name} detail view`,
      query: `[pdp-${product.slug}-details] [pdp-${product.slug}-name] [pdp-${product.slug}-type]`,
    },
    {
      key: 'lifestyle',
      alt: `${product.name} styled on model`,
      query: `[pdp-${product.slug}-tone] [pdp-${product.slug}-desc] [pdp-${product.slug}-name]`,
    },
  ]

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[104px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryImages.map((image) => (
          <button
            key={image.key}
            type="button"
            onClick={() => onSelectImage(image.key)}
            className={`overflow-hidden rounded-[1.4rem] border bg-white/90 transition ${
              activeImage === image.key
                ? 'border-[#c19a6b] shadow-[0_18px_45px_rgba(36,26,19,0.08)]'
                : 'border-[#d7c3ab] hover:border-[#c19a6b]'
            }`}
          >
            <img
              alt={image.alt}
              className="h-24 w-20 object-cover lg:h-28 lg:w-full"
              data-strk-img-id={`pdp-thumb-${product.slug}-${image.key}-t1`}
              data-strk-img={image.query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="300"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/80 shadow-[0_18px_45px_rgba(36,26,19,0.08)] lg:order-2">
        {galleryImages.map((image) => (
          <img
            key={image.key}
            alt={image.alt}
            className={`${activeImage === image.key ? 'block' : 'hidden'} aspect-[4/5] w-full object-cover`}
            data-strk-img-id={`pdp-main-${product.slug}-${image.key}-m1`}
            data-strk-img={image.query}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            loading="eager"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
