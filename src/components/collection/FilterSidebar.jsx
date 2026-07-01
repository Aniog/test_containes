import React from 'react';
import { X } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
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
  const updateFilter = (group, value) => {
    setFilters(prev => ({ ...prev, [group]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all', material: 'all' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.price !== 'all' || filters.material !== 'all';

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-[0.15em] uppercase">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-[var(--color-velmora-500)] hover:text-[var(--color-charcoal)] transition-colors">
            Clear All
          </button>
        )}
      </div>

      <div className="mb-8">
        <h4 className="text-xs tracking-[0.15em] uppercase mb-3 text-[var(--color-velmora-600)]">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="accent-[var(--color-gold-500)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold-600)] transition-colors">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xs tracking-[0.15em] uppercase mb-3 text-[var(--color-velmora-600)]">Price</h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.price === range.id}
                onChange={() => updateFilter('price', range.id)}
                className="accent-[var(--color-gold-500)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold-600)] transition-colors">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xs tracking-[0.15em] uppercase mb-3 text-[var(--color-velmora-600)]">Material</h4>
        <div className="space-y-2">
          {materials.map(mat => (
            <label key={mat.id} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat.id}
                onChange={() => updateFilter('material', mat.id)}
                className="accent-[var(--color-gold-500)]"
              />
              <span className="text-sm group-hover:text-[var(--color-gold-600)] transition-colors">{mat.name}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-80 max-w-full bg-[var(--color-cream)] z-50 p-6 overflow-y-auto animate-slide-in-right lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-serif text-2xl">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </>
      )}
    </>
  );
}
