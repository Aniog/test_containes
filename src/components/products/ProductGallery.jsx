import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { getProductGalleryFallback } from '@/lib/productImages'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0)
  const galleryRef = useRef(null)
  const fields = product?.data ?? product ?? {}
  const name = fields.name || 'Product'
  const slug = fields.slug || ''
  const { main, alts } = getProductGalleryFallback(slug)
  const thumbnails = [main, ...alts]
  const images = [
    { id: 'main', ratio: '3x4', width: 800 },
    { id: 'alt1', ratio: '1x1', width: 600 },
    { id: 'alt2', ratio: '3x4', width: 600 },
    { id: 'alt3', ratio: '4x3', width: 600 },
  ].map((img, idx) => ({ ...img, src: thumbnails[idx] || main }))

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current)
  }, [])

  return (
    <div ref={galleryRef} className="grid grid-cols-1 gap-4 md:grid-cols-[100px_1fr]">
      <div className="order-2 flex gap-3 md:order-1 md:flex-col md:gap-3">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelected(idx)}
            className={`aspect-square w-20 overflow-hidden rounded-md border transition-all md:w-full ${
              selected === idx
                ? 'border-velmora-espresso'
                : 'border-velmora-taupe/20 hover:border-velmora-taupe/50'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              src={img.src}
              alt={`${name} view ${idx + 1}`}
              data-strk-img-id={`product-${product.id}-${img.id}`}
              data-strk-img={`[product-${product.id}-name]`}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={img.width}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="order-1 md:order-2 aspect-[3/4] overflow-hidden rounded-md bg-velmora-cream-dark">
        <img
          src={images[selected].src}
          alt={name}
          data-strk-img-id={`product-${product.id}-hero`}
          data-strk-img={`[product-${product.id}-name] [product-${product.id}-category]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
