import React from 'react';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 – $80', min: 50, max: 80 },
    { label: 'Over $80', min: 80, max: 999 },
  ];

  const handleCategoryToggle = (category) => {
    const current = filters.categories || [];
    const updated = current.includes(category)
      ? current.filter(c => c !== category)
      : [...current, category];
    onFilterChange('categories', updated);
  };

  const handleMaterialToggle = (material) => {
    const current = filters.materials || [];
    const updated = current.includes(material)
      ? current.filter(m => m !== material)
      : [...current, material];
    onFilterChange('materials', updated);
  };

  const handlePriceToggle = (range) => {
    const current = filters.priceRanges || [];
    const key = `${range.min}-${range.max}`;
    const updated = current.includes(key)
      ? current.filter(k => k !== key)
      : [...current, key];
    onFilterChange('priceRanges', updated);
  };

  const isPriceSelected = (range) => {
    return (filters.priceRanges || []).includes(`${range.min}-${range.max}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.15em]">Filters</h3>
        {(filters.categories?.length > 0 || filters.materials?.length > 0 || filters.priceRanges?.length > 0) && (
          <button
            onClick={onClearFilters}
            className="text-xs text-[#B8865C] hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <p className="text-xs uppercase tracking-[0.1em] mb-4 text-[#6B5F57]">Category</p>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                checked={(filters.categories || []).includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="text-xs uppercase tracking-[0.1em] mb-4 text-[#6B5F57]">Price</p>
        <div className="space-y-3">
          {priceRanges.map((range, index) => (
            <label key={index} className="filter-checkbox">
              <input
                type="checkbox"
                checked={isPriceSelected(range)}
                onChange={() => handlePriceToggle(range)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="text-xs uppercase tracking-[0.1em] mb-4 text-[#6B5F57]">Material</p>
        <div className="space-y-3">
          {materials.map((material) => (
            <label key={material} className="filter-checkbox">
              <input
                type="checkbox"
                checked={(filters.materials || []).includes(material)}
                onChange={() => handleMaterialToggle(material)}
              />
              <span>{material} Tone</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
