import React from 'react';
import { categories, materials } from '../../data/products';

const FilterSidebar = ({
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  priceRange,
  setPriceRange,
  onClearFilters,
}) => {
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="filter-section">
        <p className="filter-title">Category</p>
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

      {/* Material */}
      <div className="filter-section">
        <p className="filter-title">Material</p>
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

      {/* Price Range */}
      <div className="filter-section">
        <p className="filter-title">Price</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[#6B6359]">$</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="input py-1.5 text-sm w-20"
              min="0"
              max="200"
            />
            <span className="text-[#6B6359]">to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="input py-1.5 text-sm w-20"
              min="0"
              max="200"
            />
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full accent-[#B89778]"
          />
        </div>
      </div>

      <button
        onClick={onClearFilters}
        className="text-xs underline text-[#6B6359] hover:text-[#3A3632]"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
