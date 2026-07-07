import { X } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold-plated', label: '18K Gold Plated' },
  { value: 'crystal', label: 'Crystal Accent' },
];

const FilterSidebar = ({ filters, onFilterChange, onClose }) => {
  const updateFilter = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const FilterGroup = ({ title, options, filterKey }) => (
    <div className="mb-6">
      <h4 className="text-[10px] tracking-widest uppercase text-charcoal-500 mb-3">{title}</h4>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => updateFilter(filterKey, opt.value)}
            className={`text-left text-sm transition-colors ${
              filters[filterKey] === opt.value
                ? 'text-gold-600 font-medium'
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-full md:w-56 flex-shrink-0">
      <div className="flex items-center justify-between mb-6 md:hidden">
        <h3 className="font-serif text-lg">Filters</h3>
        <button onClick={onClose} className="text-charcoal-500">
          <X size={18} />
        </button>
      </div>

      <FilterGroup title="Category" options={categories} filterKey="category" />
      <FilterGroup title="Price" options={priceRanges} filterKey="price" />
      <FilterGroup title="Material" options={materials} filterKey="material" />

      <button
        onClick={() => onFilterChange({ category: 'all', price: 'all', material: 'all' })}
        className="text-[10px] tracking-widest uppercase text-charcoal-400 hover:text-charcoal-700 underline underline-offset-4"
      >
        Clear All
      </button>
    </aside>
  );
};

export default FilterSidebar;