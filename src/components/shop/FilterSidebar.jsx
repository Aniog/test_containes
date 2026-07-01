import React from 'react';
import { categories, materials, priceRanges } from '../../data/products';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleMaterialChange = (material) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    onFilterChange({ ...filters, materials: newMaterials });
  };

  const handlePriceChange = (range) => {
    const isSelected = filters.priceRange?.label === range.label;
    onFilterChange({ ...filters, priceRange: isSelected ? null : range });
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      materials: [],
      priceRange: null,
    });
  };

  const hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.materials.length > 0 || 
    filters.priceRange;

  return (
    <div className="space-y-8 text-sm">
      {/* Active Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-vel-gold-dark hover:underline"
        >
          Clear All Filters
        </button>
      )}

      {/* Category */}
      <div>
        <div className="filter-label">Category</div>
        {categories.map((cat) => (
          <label key={cat} className="filter-option">
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* Material */}
      <div>
        <div className="filter-label">Material</div>
        {materials.map((mat) => (
          <label key={mat} className="filter-option">
            <input
              type="checkbox"
              checked={filters.materials.includes(mat)}
              onChange={() => handleMaterialChange(mat)}
            />
            <span>{mat}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <div className="filter-label">Price</div>
        {priceRanges.map((range, index) => (
          <label key={index} className="filter-option">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange?.label === range.label}
              onChange={() => handlePriceChange(range)}
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
