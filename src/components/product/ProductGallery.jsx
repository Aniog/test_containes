import { useState } from 'react'
import ImageSlot from '@/components/common/ImageSlot.jsx'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const gallery = [
    { id: 'main', label: 'Studio detail' },
    { id: 'worn', label: 'Worn close-up' },
    { id: 'gift', label: 'Gift packaging' },
  ]
  const active = gallery[activeIndex]

  return (
    <div className="grid gap-4 lg:grid-cols-[6rem_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {gallery.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square min-w-20 overflow-hidden border transition ${activeIndex === index ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'}`}
            aria-label={`Show ${item.label}`}
          >
            <ImageSlot
              id={`product-${product.id}-thumb-${item.id}`}
              query={`[${descId}] [${titleId}]`}
              ratio="1x1"
              width="240"
              alt={`${product.name} ${item.label}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden bg-velmora-blush shadow-editorial lg:order-2">
        <ImageSlot
          id={`product-${product.id}-gallery-${active.id}`}
          query={`[${descId}] [${titleId}]`}
          ratio={active.id === 'gift' ? '3x2' : '4x3'}
          width="1200"
          alt={`${product.name} ${active.label}`}
          className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
        />
      </div>
    </div>
  )
}
