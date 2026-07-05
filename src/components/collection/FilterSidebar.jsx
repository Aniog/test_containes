import React from 'react';
import { X } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters, categories, priceRanges, materials, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />
      )}
      
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-72 md:w-64 bg-[var(--color-warm-white)] md:bg-transparent transform transition-transform duration-300 md:transform-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } overflow-y-auto`}>
        <div className="p-6 md:p-0">
          {/* Mobile close button */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="serif-heading text-2xl">Filters</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category filter */}
          <div className="mb-8">
            <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.length === 0}
                  onChange={() => setFilters({ ...filters, category: [] })}
                  className="w-4 h-4 accent-[var(--color-gold)]"
                />
                <span className="text-sm">All</span>
              </label>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(cat)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({ ...filters, category: [...filters.category, cat] });
                      } else {
                        setFilters({ ...filters, category: filters.category.filter(c => c !== cat) });
                      }
                    }}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span className="text-sm capitalize">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price filter */}
          <div className="mb-8">
            <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === range.value}
                    onChange={() => setFilters({ ...filters, price: range.value })}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material filter */}
          <div className="mb-8">
            <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
            <div className="space-y-3">
              {materials.map((mat) => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.material.includes(mat)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({ ...filters, material: [...filters.material, mat] });
                      } else {
                        setFilters({ ...filters, material: filters.material.filter(m => m !== mat) });
                      }
                    }}
                    className="w-4 h-4 accent-[var(--color-gold)]"
                  />
                  <span className="text-sm">{mat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear filters */}
          <button
            onClick={() => setFilters({ category: [], price: null, material: [] })}
            className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors underline"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
