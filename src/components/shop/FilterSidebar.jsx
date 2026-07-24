import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = [
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
  ];

  const materials = [
    { id: 'gold', label: 'Gold' },
    { id: 'silver', label: 'Silver' },
  ];

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
    { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
  ];

  const toggleArrayFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const togglePriceFilter = (range) => {
    setFilters((prev) => {
      const current = prev.priceRange || [];
      const next = current.includes(range.id)
        ? current.filter((id) => id !== range.id)
        : [...current, range.id];
      return { ...prev, priceRange: next };
    });
  };

  const clearFilters = () =>
    setFilters({
      category: [],
      material: [],
      priceRange: [],
      sort: 'featured',
    });

  return (
    <aside className="w-full md:w-64 md:flex-shrink-0">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Filters</p>
        <button
          onClick={clearFilters}
          className="font-ui text-xs font-semibold text-ink-muted transition-colors hover:text-ink"
        >
          Clear all
        </button>
      </div>

      <div className="mt-6 space-y-8">
        <div>
          <p className="font-ui text-sm font-semibold text-ink">Category</p>
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.category || []).includes(category.id)}
                  onChange={() => toggleArrayFilter('category', category.id)}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent-soft"
                />
                <span className="font-ui text-sm text-ink-secondary">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-ui text-sm font-semibold text-ink">Price</p>
          <div className="mt-3 space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.priceRange || []).includes(range.id)}
                  onChange={() => togglePriceFilter(range)}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent-soft"
                />
                <span className="font-ui text-sm text-ink-secondary">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-ui text-sm font-semibold text-ink">Finish</p>
          <div className="mt-3 space-y-2">
            {materials.map((material) => (
              <label key={material.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.material || []).includes(material.id)}
                  onChange={() => toggleArrayFilter('material', material.id)}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent-soft"
                />
                <span className="font-ui text-sm text-ink-secondary">{material.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
