import React from 'react';
import { X } from 'lucide-react';
import { categories } from '@/data/products';

const priceRanges = [
  { id: 'under40', label: 'Under $40' },
  { id: '40to60', label: '$40 – $60' },
  { id: '60to100', label: '$60 – $100' },
  { id: 'over100', label: 'Over $100' },
];

const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
];

const Filters = ({ filters, setFilters, isOpen, onClose }) => {
  const toggleCategory = (slug) => {
    setFilters((prev) => {
      const next = prev.category.includes(slug)
        ? prev.category.filter((c) => c !== slug)
        : [...prev.category, slug];
      return { ...prev, category: next };
    });
  };

  const togglePrice = (id) => {
    setFilters((prev) => {
      const next = prev.price.includes(id)
        ? prev.price.filter((p) => p !== id)
        : [...prev.price, id];
      return { ...prev, price: next };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], price: [], material: [] });
  };

  const filterContent = (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Category</h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat.slug)}
                  onChange={() => toggleCategory(cat.slug)}
                  className="peer w-4 h-4 border border-velmora-border appearance-none checked:bg-velmora-charcoal checked:border-velmora-charcoal transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm text-velmora-warm group-hover:text-velmora-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Price</h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={filters.price.includes(range.id)}
                  onChange={() => togglePrice(range.id)}
                  className="peer w-4 h-4 border border-velmora-border appearance-none checked:bg-velmora-charcoal checked:border-velmora-charcoal transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm text-velmora-warm group-hover:text-velmora-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Material</h4>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={filters.material.includes(mat.id)}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      material: prev.material.includes(mat.id)
                        ? prev.material.filter((m) => m !== mat.id)
                        : [...prev.material, mat.id],
                    }))
                  }
                  className="peer w-4 h-4 border border-velmora-border appearance-none checked:bg-velmora-charcoal checked:border-velmora-charcoal transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm text-velmora-warm group-hover:text-velmora-charcoal transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-xs uppercase tracking-[0.15em] border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28">
          <h3 className="font-serif text-2xl mb-8">Filter</h3>
          {filterContent}
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-velmora-charcoal/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-velmora-surface shadow-2xl transform transition-transform duration-500 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
      >
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h3 className="font-serif text-2xl">Filter</h3>
          <button onClick={onClose} aria-label="Close filters" className="p-2 hover:bg-velmora-cream transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">{filterContent}</div>
      </aside>
    </>
  );
};

export default Filters;
