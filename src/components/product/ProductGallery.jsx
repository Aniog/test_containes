import { useState } from 'react'
import { cn } from '@/lib/utils'
import JewelryVisual from '@/components/product/JewelryVisual.jsx'

const images = [
  { label: 'product portrait', variant: 'product' },
  { label: 'styled detail', variant: 'styled' },
  { label: 'gift packaging', variant: 'packaging' },
]

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const activeImage = images[active]

  return (
    <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={image.label}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              'aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-champagne transition lg:w-full',
              active === index ? 'border-velmora-gold' : 'border-velmora-mist hover:border-velmora-burnished',
            )}
            aria-label={`Show ${image.label}`}
          >
            <JewelryVisual product={product} variant={image.variant} label={image.label} compact />
          </button>
        ))}
      </div>
      <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne lg:order-2">
        <JewelryVisual product={product} variant={activeImage.variant} label={activeImage.label} />
      </div>
    </div>
  )
}
