import { useState } from 'react'
import ProductImage from '@/components/shared/ProductImage'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product }) {
  // Build a small set of "shots" by varying the SVG art's surroundings.
  // Swap in real photos here later — the layout is identical.
  const shots = [
    { id: 'main', art: product.art, label: 'Front' },
    { id: 'side', art: product.art, label: 'Detail' },
    { id: 'back', art: product.art, label: 'On model' },
    { id: 'scale', art: product.art, label: 'Scale' },
  ]
  const [active, setActive] = useState('main')

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      <div className="flex lg:flex-col gap-3 lg:w-20 flex-shrink-0">
        {shots.map((s) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              className={cn(
                'relative aspect-square w-full overflow-hidden bg-ink-900 border transition-colors',
                isActive ? 'border-ink-900' : 'border-transparent hover:border-ink-900/30',
              )}
              aria-label={`View ${s.label}`}
            >
              <ProductImage art={s.art} />
            </button>
          )
        })}
      </div>
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-ink-900">
        <ProductImage art={product.art} />
        {product.badge && (
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] text-ivory-50 bg-ink-900/85 backdrop-blur-sm px-3 py-1.5">
            {product.badge}
          </span>
        )}
      </div>
    </div>
  )
}
