import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const ProductGallery = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.galleryShots[0])

  useEffect(() => {
    setActiveImage(product.galleryShots[0])
  }, [product])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2.5rem] bg-velmora-mist shadow-soft">
        <img
          src={imagePlaceholder}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`product-gallery-main-${product.slug}`}
          data-strk-img={`[product-gallery-${product.slug}-${activeImage.id}-desc] [product-title] [product-short-desc]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {product.galleryShots.map((shot) => (
          <button
            key={shot.id}
            type="button"
            className={cn(
              'overflow-hidden rounded-[1.5rem] border bg-velmora-mist transition-colors',
              activeImage.id === shot.id
                ? 'border-velmora-gold'
                : 'border-velmora-sand/70 hover:border-velmora-gold/60',
            )}
            onClick={() => setActiveImage(shot)}
          >
            <span id={`product-gallery-${product.slug}-${shot.id}-desc`} className="sr-only">
              {shot.prompt}
            </span>
            <img
              src={imagePlaceholder}
              alt={shot.label}
              className="aspect-square w-full object-cover"
              data-strk-img-id={`product-gallery-thumb-${product.slug}-${shot.id}`}
              data-strk-img={`[product-gallery-${product.slug}-${shot.id}-desc] [product-title] [product-short-desc]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
