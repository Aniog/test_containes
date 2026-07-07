import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, categories, isOpen, onClose }) {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: 999 },
  ];

  const materials = [
    { label: 'Gold Tone', value: 'gold' },
    { label: 'Silver Tone', value: 'silver' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-72 lg:w-64 bg-velmora-50 lg:bg-transparent transform transition-transform duration-300 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } overflow-y-auto`}
      >
        <div className="p-6 lg:p-0 lg:sticky lg:top-24">
          {/* Mobile close button */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="font-serif text-xl text-charcoal-950">Filters</h3>
            <button onClick={onClose} className="p-2">
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h4 className="text-xs tracking-widest uppercase text-charcoal-800 mb-4">Category</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={!filters.category}
                  onChange={() => setFilters(f => ({ ...f, category: null }))}
                  className="accent-charcoal-900"
                />
                <span className="text-sm text-charcoal-700">All</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === cat.id}
                    onChange={() => setFilters(f => ({ ...f, category: cat.id }))}
                    className="accent-charcoal-900"
                  />
                  <span className="text-sm text-charcoal-700">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h4 className="text-xs tracking-widest uppercase text-charcoal-800 mb-4">Price</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={!filters.priceRange}
                  onChange={() => setFilters(f => ({ ...f, priceRange: null }))}
                  className="accent-charcoal-900"
                />
                <span className="text-sm text-charcoal-700">All Prices</span>
              </label>
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange?.label === range.label}
                    onChange={() => setFilters(f => ({ ...f, priceRange: range }))}
                    className="accent-charcoal-900"
                  />
                  <span className="text-sm text-charcoal-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-8">
            <h4 className="text-xs tracking-widest uppercase text-charcoal-800 mb-4">Material</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="material"
                  checked={!filters.material}
                  onChange={() => setFilters(f => ({ ...f, material: null }))}
                  className="accent-charcoal-900"
                />
                <span className="text-sm text-charcoal-700">All Materials</span>
              </label>
              {materials.map((mat) => (
                <label key={mat.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={filters.material === mat.value}
                    onChange={() => setFilters(f => ({ ...f, material: mat.value }))}
                    className="accent-charcoal-900"
                  />
                  <span className="text-sm text-charcoal-700">{mat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => setFilters({ category: null, priceRange: null, material: null })}
            className="text-xs tracking-widest uppercase text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
    </>
  );
}
