import React from 'react';
import { X } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: 'Gold Plated' },
  { value: 'silver', label: 'Silver Plated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: '100+', label: '$100+' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.value}
                onChange={() => setFilters((f) => ({ ...f, category: cat.value }))}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.price === range.value}
                onChange={() => setFilters((f) => ({ ...f, price: range.value }))}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat.value}
                onChange={() => setFilters((f) => ({ ...f, material: mat.value }))}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm text-[var(--velmora-text-muted)] group-hover:text-[var(--velmora-text)] transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => setFilters({ category: 'all', price: 'all', material: 'all' })}
        className="text-xs tracking-wider uppercase text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        <FilterContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-[var(--velmora-surface)] z-50 p-6 overflow-y-auto md:hidden slide-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="serif-heading text-xl tracking-wide">Filters</h2>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </>
  );
}
