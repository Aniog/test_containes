import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { categories } from '@/data/products';

function FilterSection({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium">{title}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
}

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: 999 },
  ];

  const materials = ['gold', 'silver'];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-72 lg:w-64 bg-[var(--velmora-bg)] lg:bg-transparent
        transform transition-transform duration-300 lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto lg:overflow-visible
      `}>
        <div className="p-6 lg:p-0">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="font-serif-display text-xl">Filters</h3>
            <button onClick={onClose} className="p-2" aria-label="Close filters">
              <X size={20} />
            </button>
          </div>

          {/* Category filter */}
          <FilterSection title="Category">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category === 'all'}
                  onChange={() => setFilters(prev => ({ ...prev, category: 'all' }))}
                  className="accent-[var(--velmora-dark)]"
                />
                <span className="text-sm">All</span>
              </label>
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category === cat.id}
                    onChange={() => setFilters(prev => ({ ...prev, category: cat.id }))}
                    className="accent-[var(--velmora-dark)]"
                  />
                  <span className="text-sm">{cat.name}</span>
                  <span className="text-xs text-[var(--velmora-text-light)]">({cat.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price filter */}
          <FilterSection title="Price">
            <div className="space-y-2">
              {priceRanges.map((range, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange?.min === range.min}
                    onChange={() => setFilters(prev => ({ ...prev, priceRange: range }))}
                    className="accent-[var(--velmora-dark)]"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Material filter */}
          <FilterSection title="Material">
            <div className="space-y-2">
              {materials.map(mat => (
                <label key={mat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.material === mat}
                    onChange={() => setFilters(prev => ({ ...prev, material: prev.material === mat ? null : mat }))}
                    className="accent-[var(--velmora-dark)]"
                  />
                  <span className="text-sm capitalize">{mat} tone</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Clear filters */}
          <button
            onClick={() => setFilters({ category: 'all', priceRange: null, material: null })}
            className="mt-6 text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] hover:text-[var(--velmora-accent)] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
    </>
  );
}
