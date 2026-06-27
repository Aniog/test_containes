import React from 'react';
import { X } from 'lucide-react';
import { CATEGORIES, MATERIALS } from '@/data/products';
import { cn, formatPrice } from '@/lib/utils';

const PRICE_BUCKETS = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 — $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

export default function FilterSidebar({
  filters,
  onChange,
  resultCount,
  isOpen,
  onClose,
}) {
  const toggleCategory = (id) => {
    const next = filters.categories.includes(id)
      ? filters.categories.filter((c) => c !== id)
      : [...filters.categories, id];
    onChange({ ...filters, categories: next });
  };

  const toggleMaterial = (id) => {
    const next = filters.materials.includes(id)
      ? filters.materials.filter((m) => m !== id)
      : [...filters.materials, id];
    onChange({ ...filters, materials: next });
  };

  const setPrice = (id) => {
    onChange({ ...filters, price: filters.price === id ? null : id });
  };

  const clearAll = () => {
    onChange({ categories: [], materials: [], price: null });
  };

  const hasFilters =
    filters.categories.length > 0 ||
    filters.materials.length > 0 ||
    filters.price;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-ink/40 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'lg:block',
          isOpen
            ? 'fixed inset-y-0 left-0 right-1/3 lg:static z-50 bg-cream p-6 lg:p-0 overflow-y-auto'
            : 'hidden'
        )}
        aria-label="Filters"
      >
        {/* Header (mobile) */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <p className="label">Filters</p>
          <button
            type="button"
            aria-label="Close filters"
            onClick={onClose}
            className="p-2 -mr-2 text-ink"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {/* Category */}
          <div>
            <p className="label mb-4">Category</p>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="sr-only peer"
                    />
                    <span
                      className={cn(
                        'w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors',
                        filters.categories.includes(cat.id)
                          ? 'bg-ink border-ink'
                          : 'bg-transparent border-hairline group-hover:border-ink'
                      )}
                    >
                      {filters.categories.includes(cat.id) && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5L4 8L9 1" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-charcoal group-hover:text-ink">{cat.plural}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div>
            <p className="label mb-4">Price</p>
            <ul className="space-y-3">
              {PRICE_BUCKETS.map((bucket) => (
                <li key={bucket.id}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={filters.price === bucket.id}
                      onChange={() => setPrice(bucket.id)}
                      className="sr-only peer"
                    />
                    <span
                      className={cn(
                        'w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors',
                        filters.price === bucket.id
                          ? 'border-ink'
                          : 'border-hairline group-hover:border-ink'
                      )}
                    >
                      {filters.price === bucket.id && (
                        <span className="w-2 h-2 rounded-full bg-ink" />
                      )}
                    </span>
                    <span className="text-sm text-charcoal group-hover:text-ink">{bucket.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Material */}
          <div>
            <p className="label mb-4">Material</p>
            <ul className="space-y-3">
              {MATERIALS.map((mat) => (
                <li key={mat.id}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.materials.includes(mat.id)}
                      onChange={() => toggleMaterial(mat.id)}
                      className="sr-only peer"
                    />
                    <span
                      className={cn(
                        'w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors',
                        filters.materials.includes(mat.id)
                          ? 'bg-ink border-ink'
                          : 'bg-transparent border-hairline group-hover:border-ink'
                      )}
                    >
                      {filters.materials.includes(mat.id) && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5L4 8L9 1" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-charcoal group-hover:text-ink">{mat.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Clear */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="label link-reveal"
            >
              Clear all filters
            </button>
          )}

          <p className="text-xs text-muted pt-4 border-t border-hairline">
            Showing {resultCount} {resultCount === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </aside>
    </>
  );
}