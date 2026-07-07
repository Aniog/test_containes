import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices' },
  { id: 'under50', name: 'Under $50' },
  { id: '50to75', name: '$50 - $75' },
  { id: 'over75', name: 'Over $75' },
];

const materials = [
  { id: 'all', name: 'All Materials' },
  { id: 'gold', name: 'Gold' },
  { id: 'silver', name: 'Silver' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => setFilters(f => ({ ...f, category: cat.id }))}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.price === range.id}
                onChange={() => setFilters(f => ({ ...f, price: range.id }))}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat.id}
                onChange={() => setFilters(f => ({ ...f, material: mat.id }))}
                className="accent-[var(--velmora-gold)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {mat.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setMobileFiltersOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[var(--velmora-border)] text-sm"
      >
        <Filter size={16} />
        Filters
      </button>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[var(--velmora-cream)] p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="serif-heading text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show Results
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <FilterContent />
      </aside>
    </>
  );
}
