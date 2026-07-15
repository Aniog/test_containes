import { X } from 'lucide-react';

const categoryOptions = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceOptions = [
  { id: 'under-50', label: 'Under $50' },
  { id: '50-75', label: '$50 — $75' },
  { id: '75-plus', label: '$75+' },
];

const materialOptions = [
  { id: 'gold-plated', label: 'Gold Plated' },
  { id: 'silver-tone', label: 'Silver Tone' },
];

export default function FilterSidebar({
  filters,
  onChange,
  isMobileOpen,
  onCloseMobile,
}) {
  const toggleFilter = (key, value) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...filters, [key]: updated });
  };

  const clearFilters = () => {
    onChange({ category: [], price: [], material: [] });
  };

  const activeCount = filters.category.length + filters.price.length + filters.material.length;

  const FilterGroup = ({ title, options, filterKey }) => (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-[0.16em] font-medium text-base mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => {
          const isChecked = filters[filterKey].includes(option.id);
          return (
            <label
              key={option.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <span
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  isChecked
                    ? 'bg-base border-base'
                    : 'border-linen group-hover:border-gold'
                }`}
              >
                {isChecked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => toggleFilter(filterKey, option.id)}
              />
              <span className="text-sm text-muted group-hover:text-base transition-colors">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-base/40 z-40 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 md:top-24 left-0 h-full md:h-fit w-[280px] md:w-full bg-ivory md:bg-transparent z-50 transform transition-transform duration-300 md:transform-none ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-6 md:p-0 border-r md:border-r-0 border-linen">
          <div className="flex items-center justify-between mb-8 md:hidden">
            <h3 className="font-serif text-xl text-base">Filters</h3>
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X size={22} />
            </button>
          </div>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs uppercase tracking-[0.12em] text-muted hover:text-gold underline underline-offset-4 mb-8"
            >
              Clear all ({activeCount})
            </button>
          )}

          <FilterGroup title="Category" options={categoryOptions} filterKey="category" />
          <FilterGroup title="Price" options={priceOptions} filterKey="price" />
          <FilterGroup title="Material" options={materialOptions} filterKey="material" />
        </div>
      </aside>
    </>
  );
}
