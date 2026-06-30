import React, { useState } from 'react'
import { Filter, X } from 'lucide-react'

export default function FilterSidebar({ filters, setFilters, products, categories }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity },
  ]

  const materials = ['18k gold plated', 'Sterling silver', 'Gold vermeil']

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const current = prev[type] || []
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter((v) => v !== value) }
      }
      return { ...prev, [type]: [...current, value] }
    })
  }

  const clearFilters = () => {
    setFilters({ category: [], price: [], material: [] })
  }

  const hasActiveFilters =
    (filters.category?.length || 0) +
    (filters.price?.length || 0) +
    (filters.material?.length || 0) > 0

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="velmora-body-xs text-[var(--velmora-text)] tracking-wider mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={(filters.category || []).includes(cat.id)}
                onChange={() => handleFilterChange('category', cat.id)}
                className="w-4 h-4 border border-[var(--velmora-border)] rounded-sm accent-[var(--velmora-text)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="velmora-body-xs text-[var(--velmora-text)] tracking-wider mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={(filters.price || []).includes(range.label)}
                onChange={() => handleFilterChange('price', range.label)}
                className="w-4 h-4 border border-[var(--velmora-border)] rounded-sm accent-[var(--velmora-text)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="velmora-body-xs text-[var(--velmora-text)] tracking-wider mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={(filters.material || []).includes(mat)}
                onChange={() => handleFilterChange('material', mat)}
                className="w-4 h-4 border border-[var(--velmora-border)] rounded-sm accent-[var(--velmora-text)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="velmora-body-xs text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 velmora-btn velmora-btn-primary shadow-lg"
      >
        <Filter className="w-4 h-4" />
        Filters
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[var(--velmora-bg)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="velmora-heading-md">Filters</h2>
              <button onClick={() => setIsMobileOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <FilterContent />
      </aside>
    </>
  )
}
