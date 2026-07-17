import React from 'react'
import { X } from 'lucide-react'

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
]

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 – $100', value: '50-100' },
  { label: 'Over $100', value: '100-999' },
]

const materials = [
  { label: 'All Materials', value: '' },
  { label: '18K Gold Plated', value: 'gold' },
  { label: 'Silver Tone', value: 'silver' },
]

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }))

  const content = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-brand-base mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => update('category', c.value)}
              className={`block w-full text-left text-sm transition-colors ${
                filters.category === c.value
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-muted hover:text-brand-base'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-brand-base mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((p) => (
            <button
              key={p.value}
              onClick={() => update('price', p.value)}
              className={`block w-full text-left text-sm transition-colors ${
                filters.price === p.value
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-muted hover:text-brand-base'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-brand-base mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m.value}
              onClick={() => update('material', m.value)}
              className={`block w-full text-left text-sm transition-colors ${
                filters.material === m.value
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-muted hover:text-brand-base'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0">
        {content}
      </aside>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-brand-base/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-surface z-50 p-6 animate-slide-in-right lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-brand-base">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </>
      )}
    </>
  )
}
