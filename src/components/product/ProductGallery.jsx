import { useState } from 'react'
import ProductImage from './ProductImage.jsx'

const views = [
  { key: 'main', label: 'Detail' },
  { key: 'hover', label: 'Styled' },
  { key: 'main', label: 'Glow' },
]

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const current = views[active]

  return (
    <div className="grid gap-4 md:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 md:order-1 md:flex-col">
        {views.map((view, index) => (
          <button
            key={`${view.label}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`overflow-hidden border bg-velmora-linen transition ${active === index ? 'border-velmora-gold' : 'border-velmora-ink/10 hover:border-velmora-clay'}`}
            aria-label={`View ${view.label}`}
          >
            <ProductImage product={product} variant={view.key} contextId="product-detail-title" slotId={`thumb-${index}`} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden bg-velmora-linen md:order-2">
        <ProductImage product={product} variant={current.key} contextId="product-detail-title" slotId={`detail-${active}`} className="aspect-[4/5] w-full object-cover md:aspect-[5/6]" />
      </div>
    </div>
  )
}
