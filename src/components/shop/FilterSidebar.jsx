import React from 'react';
import { categories, materials } from '../../data/products';

const FilterSidebar = ({ 
  selectedCategories, 
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  priceRange,
  setPriceRange,
  onClearFilters
}) => {
  const priceRanges = [
    { label: 'Under $40', min: 0, max: 40 },
    { label: '$40 – $60', min: 40, max: 60 },
    { label: '$60 – $80', min: 60, max: 80 },
    { label: 'Over $80', min: 80, max: 999 },
  ];

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const togglePriceRange = (range) => {
    const isSelected = priceRange.min === range.min && priceRange.max === range.max;
    if (isSelected) {
      setPriceRange({ min: 0, max: 999 });
    } else {
      setPriceRange({ min: range.min, max: range.max });
    }
  };

  const hasActiveFilters = 
    selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    priceRange.min > 0 || 
    priceRange.max < 999;

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <p className="filter-label">Category</p>
        <div className="space-y-1">
          {categories.map((cat) => (
            <label key={cat} className="filter-option">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="filter-label">Material</p>
        <div className="space-y-1">
          {materials.map((mat) => (
            <label key={mat} className="filter-option">
              <input 
                type="checkbox" 
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              <span>{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="filter-label">Price</p>
        <div className="space-y-1">
          {priceRanges.map((range, idx) => {
            const isSelected = priceRange.min === range.min && priceRange.max === range.max;
            return (
              <label key={idx} className="filter-option">
                <input 
                  type="checkbox" 
                  checked={isSelected}
                  onChange={() => togglePriceRange(range)}
                />
                <span>{range.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {hasActiveFilters && (
        <button 
          onClick={onClearFilters}
          className="text-xs uppercase tracking-[0.1em] text-[#B89778] hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default FilterSidebar;