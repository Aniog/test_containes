import React from 'react';
import { X } from 'lucide-react';

const FilterGroup = ({ title, options, selected, onToggle }) => (
  <div className="mb-6">
    <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-espresso mb-3">
      {title}
    </h4>
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div
            className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
              selected.includes(option.value)
                ? 'bg-velmora-espresso border-velmora-espresso'
                : 'border-velmora-border group-hover:border-velmora-espresso'
            }`}
          >
            {selected.includes(option.value) && (
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <input
            type="checkbox"
            className="sr-only"
            checked={selected.includes(option.value)}
            onChange={() => onToggle(option.value)}
          />
          <span className="font-sans text-sm text-velmora-warmgray group-hover:text-velmora-espresso transition-colors">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  </div>
);

const FilterSidebar = ({ filters, onFilterChange, mobileOpen, onClose }) => {
  const categoryOptions = [
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Gift Sets' },
  ];

  const priceOptions = [
    { value: 'under40', label: 'Under $40' },
    { value: '40to60', label: '$40 - $60' },
    { value: '60to100', label: '$60 - $100' },
    { value: 'over100', label: 'Over $100' },
  ];

  const materialOptions = [
    { value: 'gold-plated', label: '18K Gold Plated' },
  ];

  const toggleFilter = (key, value) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between md:hidden mb-6">
        <h3 className="font-serif text-lg font-medium tracking-widest uppercase">
          Filters
        </h3>
        <button onClick={onClose} aria-label="Close filters">
          <X className="w-5 h-5" />
        </button>
      </div>

      <h3 className="hidden md:block font-serif text-lg font-medium tracking-widest uppercase mb-6">
        Filters
      </h3>

      <FilterGroup
        title="Category"
        options={categoryOptions}
        selected={filters.category}
        onToggle={(v) => toggleFilter('category', v)}
      />
      <FilterGroup
        title="Price"
        options={priceOptions}
        selected={filters.price}
        onToggle={(v) => toggleFilter('price', v)}
      />
      <FilterGroup
        title="Material"
        options={materialOptions}
        selected={filters.material}
        onToggle={(v) => toggleFilter('material', v)}
      />

      {(filters.category.length > 0 || filters.price.length > 0 || filters.material.length > 0) && (
        <button
          onClick={() => onFilterChange({ category: [], price: [], material: [] })}
          className="w-full py-2.5 border border-velmora-border text-velmora-warmgray font-sans text-xs tracking-widest uppercase hover:border-velmora-espresso hover:text-velmora-espresso transition-colors"
        >
          Clear All
        </button>
      )}
    </>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:block w-60 flex-shrink-0 pr-8">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="absolute left-0 top-0 h-full w-72 bg-velmora-cream p-6 overflow-y-auto">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
