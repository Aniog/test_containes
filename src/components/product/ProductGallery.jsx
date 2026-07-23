import { useState } from 'react'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { cn } from '@/lib/utils'

export const ProductGallery = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.gallery[0])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] bg-brand-sand shadow-soft">
        <div className="aspect-[4/5]">
          <ImageSlot
            slotId={activeImage.slotId}
            query={`[product-page-${product.id}-description] [product-page-${product.id}-title]`}
            ratio="4x3"
            width="1000"
            alt={product.name}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {product.gallery.map((image) => (
          <button
            key={image.slotId}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn(
              'overflow-hidden rounded-2xl border bg-brand-sand transition',
              activeImage.slotId === image.slotId
                ? 'border-brand-ink shadow-soft'
                : 'border-brand-line hover:border-brand-gold',
            )}
          >
            <div className="aspect-square">
              <ImageSlot
                slotId={image.slotId}
                query={`[product-page-${product.id}-description] [product-page-${product.id}-title]`}
                ratio="1x1"
                width="220"
                alt={product.name}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
