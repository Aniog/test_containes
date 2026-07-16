import React from 'react';
import { categories, materials } from '../../data/products';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 – $80', min: 50, max: 80 },
    { label: 'Over $80', min: 80, max: 999 },
  ];

  const handleCategoryChange = (cat) => {
    const newCategories = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleMaterialChange = (mat) => {
    const newMaterials = filters.materials.includes(mat)
      ? filters.materials.filter((m) => m !== mat)
      : [...filters.materials, mat];
    onFilterChange({ ...filters, materials: newMaterials });
  };

  const handlePriceChange = (range) => {
    const isActive = filters.priceRange && 
      filters.priceRange.min === range.min && 
      filters.priceRange.max === range.max;
    
    onFilterChange({ 
      ...filters, 
      priceRange: isActive ? null : range 
    });
  };

  return (
    <div className="space-y-8 text-sm">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="tracking-[0.1em] text-xs">FILTERS</h3>
          {(filters.categories.length > 0 || filters.materials.length > 0 || filters.priceRange) && (
            <button 
              onClick={onClearFilters}
              className="text-xs text-[#B89778] hover:underline"
            >
              CLEAR ALL
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="tracking-[0.08em] mb-3 text-[#8C7660]">CATEGORY</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="filter-checkbox w-4 h-4"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="tracking-[0.08em] mb-3 text-[#8C7660]">PRICE</h4>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => {
            const isActive = filters.priceRange && 
              filters.priceRange.min === range.min && 
              filters.priceRange.max === range.max;
            return (
              <label key={idx} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => handlePriceChange(range)}
                  className="filter-checkbox w-4 h-4"
                />
                <span>{range.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="tracking-[0.08em] mb-3 text-[#8C7660]">MATERIAL</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.materials.includes(mat)}
                onChange={() => handleMaterialChange(mat)}
                className="filter-checkbox w-4 h-4"
              />
              <span>{mat} Tone</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
