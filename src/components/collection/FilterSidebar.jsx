import React, { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { categories } from '../../data/products'

export default function FilterSidebar({ filters, setFilters, isOpen, setIsOpen }) {
  const [priceRange, setPriceRange] = useState([0, 150])

  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === categoryId ? null : categoryId,
    }))
  }

  const handleMaterialChange = (material) => {
    setFilters(prev => ({
      ...prev,
      material: prev.material === material ? null : material,
    }))
  }

  const clearFilters = () => {
    setFilters({ category: null, material: null, priceRange: [0, 150] })
  }

  const hasActiveFilters = filters.category || filters.material

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-background lg:bg-transparent p-6 lg:p-0 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <h2 className="serif-heading text-2xl">Filters</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close filters">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8">
          {/* Category */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.category === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    className="w-4 h-4 border-foreground/30 rounded accent-primary"
                  />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    ({category.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Material */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Material</h3>
            <div className="space-y-3">
              {['18K Gold Plated', 'Silver Plated'].map((material) => (
                <label key={material} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.material === material}
                    onChange={() => handleMaterialChange(material)}
                    className="w-4 h-4 border-foreground/30 rounded accent-primary"
                  />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {material}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 border border-foreground/20 px-3 py-2 text-sm"
                  placeholder="Min"
                />
                <span className="text-muted-foreground">—</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 border border-foreground/20 px-3 py-2 text-sm"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      </aside>
    </>
  )
}
