import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FilterSidebar = ({ filters, onChange, onClear, isOpen, onClose }) => {
  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 – $80', min: 50, max: 80 },
    { label: '$80 – $120', min: 80, max: 120 },
  ];

  const handleCategoryChange = (category) => {
    const current = filters.category || [];
    const next = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    onChange({ ...filters, category: next });
  };

  const handlePriceChange = (range) => {
    const current = filters.priceRange || [];
    const exists = current.find(
      (r) => r.min === range.min && r.max === range.max,
    );
    const next = exists
      ? current.filter((r) => !(r.min === range.min && r.max === range.max))
      : [...current, range];
    onChange({ ...filters, priceRange: next });
  };

  const handleMaterialChange = (material) => {
    const current = filters.material || [];
    const next = current.includes(material)
      ? current.filter((m) => m !== material)
      : [...current, material];
    onChange({ ...filters, material: next });
  };

  const hasFilters =
    (filters.category && filters.category.length > 0) ||
    (filters.priceRange && filters.priceRange.length > 0) ||
    (filters.material && filters.material.length > 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] transform bg-cream shadow-lift transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:border-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-base-200 px-5 py-4 lg:hidden">
          <h2 className="font-serif text-lg font-semibold text-ink">Filters</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ink/70 hover:text-ink transition-colors"
            aria-label="Close filters"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-6 space-y-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/50 mb-3">
              Category
            </h3>
            <div className="space-y-2.5">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={(filters.category || []).includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 rounded border-base-300 text-gold-600 focus:ring-gold-500"
                  />
                  <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/50 mb-3">
              Price
            </h3>
            <div className="space-y-2.5">
              {priceRanges.map((range) => (
                <label
                  key={`${range.min}-${range.max}`}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={(filters.priceRange || []).some(
                      (r) => r.min === range.min && r.max === range.max,
                    )}
                    onChange={() => handlePriceChange(range)}
                    className="h-4 w-4 rounded border-base-300 text-gold-600 focus:ring-gold-500"
                  />
                  <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={onClear}
              className="text-xs font-semibold uppercase tracking-widest text-gold-600 hover:text-gold-700 transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
