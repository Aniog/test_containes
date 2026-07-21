import React from 'react'
import { categories } from '../../data/products'

export default function FilterSidebar({ filters, setFilters, isOpen, setIsOpen }) {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: 999 },
  ]

  const materials = ['18K Gold Plated', 'Sterling Silver', 'Rose Gold Plated']

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-72 lg:w-56 bg-white lg:bg-transparent overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 lg:p-0 space-y-8">
          {/* Mobile close button */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <h3 className="font-serif text-lg text-velmora-base">Filters</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-velmora-text"
              aria-label="Close filters"
            >
              ✕
            </button>
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-base mb-4">
              Category
            </h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={!filters.category}
                  onChange={() => setFilters((f) => ({ ...f, category: null }))}
                  className="accent-velmora-gold"
                />
                <span className="text-sm text-velmora-text">All</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === cat.id}
                    onChange={() => setFilters((f) => ({ ...f, category: cat.id }))}
                    className="accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-text">{cat.name}</span>
                  <span className="text-xs text-velmora-text-light">({cat.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-base mb-4">
              Price
            </h4>
            <div className="space-y-2">
              {priceRanges.map((range, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange?.min === range.min}
                    onChange={() => setFilters((f) => ({ ...f, priceRange: range }))}
                    className="accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-text">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-base mb-4">
              Material
            </h4>
            <div className="space-y-2">
              {materials.map((material) => (
                <label key={material} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.materials?.includes(material)}
                    onChange={() => {
                      setFilters((f) => {
                        const current = f.materials || []
                        const updated = current.includes(material)
                          ? current.filter((m) => m !== material)
                          : [...current, material]
                        return { ...f, materials: updated.length ? updated : null }
                      })
                    }}
                    className="accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-text">{material}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => setFilters({ category: null, priceRange: null, materials: null })}
            className="text-xs tracking-wider uppercase text-velmora-text-light underline hover:text-velmora-base transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
    </>
  )
}
