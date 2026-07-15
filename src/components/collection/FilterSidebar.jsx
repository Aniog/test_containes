import { useState } from 'react'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { categories } from '@/data/products'

export default function FilterSidebar({ filters, setFilters, products }) {
  const [openSections, setOpenSections] = useState({ category: true, price: true, material: true })
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: '$100+', min: 100, max: 999 },
  ]

  const materials = [
    { id: 'gold', label: 'Gold Tone' },
    { id: 'silver', label: 'Silver Tone' },
  ]

  const filterContent = (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-xs tracking-widest uppercase text-[#1A1A1A] mb-3"
        >
          Category
          <ChevronDown
            className={`w-4 h-4 text-[#6B6560] transition-transform ${
              openSections.category ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.category && (
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.length === 0}
                onChange={() => setFilters((prev) => ({ ...prev, category: [] }))}
                className="accent-[#B8860B]"
              />
              <span className="text-sm text-[#6B6560]">All</span>
            </label>
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat.id)}
                  onChange={() => {
                    setFilters((prev) => ({
                      ...prev,
                      category: prev.category.includes(cat.id)
                        ? prev.category.filter((c) => c !== cat.id)
                        : [...prev.category, cat.id],
                    }))
                  }}
                  className="accent-[#B8860B]"
                />
                <span className="text-sm text-[#6B6560]">
                  {cat.label} ({cat.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-xs tracking-widest uppercase text-[#1A1A1A] mb-3"
        >
          Price
          <ChevronDown
            className={`w-4 h-4 text-[#6B6560] transition-transform ${
              openSections.price ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={filters.price?.min === range.min}
                  onChange={() => setFilters((prev) => ({ ...prev, price: range }))}
                  className="accent-[#B8860B]"
                />
                <span className="text-sm text-[#6B6560]">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="flex items-center justify-between w-full text-xs tracking-widest uppercase text-[#1A1A1A] mb-3"
        >
          Material
          <ChevronDown
            className={`w-4 h-4 text-[#6B6560] transition-transform ${
              openSections.material ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.material && (
          <div className="space-y-2">
            {materials.map((mat) => (
              <label key={mat.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.material.includes(mat.id)}
                  onChange={() => {
                    setFilters((prev) => ({
                      ...prev,
                      material: prev.material.includes(mat.id)
                        ? prev.material.filter((m) => m !== mat.id)
                        : [...prev.material, mat.id],
                    }))
                  }}
                  className="accent-[#B8860B]"
                />
                <span className="text-sm text-[#6B6560]">{mat.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#E8E4DF] text-sm text-[#1A1A1A] hover:border-[#B8860B] transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[#FAF8F5] shadow-xl overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DF]">
              <h3 className="text-sm tracking-widest uppercase text-[#1A1A1A]">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="p-1">
                <X className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </div>
            <div className="px-6 py-6">
              {filterContent}
            </div>
            <div className="px-6 py-4 border-t border-[#E8E4DF]">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 bg-[#B8860B] text-white text-xs tracking-widest uppercase hover:bg-[#996F0A] transition-colors"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        {filterContent}
      </div>
    </aside>
  )
}
