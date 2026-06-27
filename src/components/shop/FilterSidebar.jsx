import React from 'react';

const FilterSidebar = ({
  categories,
  materials,
  priceRanges,
  selectedCategory,
  selectedMaterial,
  selectedPrice,
  onCategoryChange,
  onMaterialChange,
  onPriceChange,
  onClear,
}) => {
  const hasFilters = selectedCategory || selectedMaterial || selectedPrice;

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink">
          Filters
        </h3>
        {hasFilters && (
          <button
            onClick={onClear}
            className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-warm-gray hover:text-gold transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-gray mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`block w-full text-left text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-ink font-medium'
                  : 'text-warm-gray hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-8">
        <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-gray mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => onMaterialChange(mat.id)}
              className={`block w-full text-left text-sm transition-colors ${
                selectedMaterial === mat.id
                  ? 'text-ink font-medium'
                  : 'text-warm-gray hover:text-ink'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-gray mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => onPriceChange(range.id)}
              className={`block w-full text-left text-sm transition-colors ${
                selectedPrice === range.id
                  ? 'text-ink font-medium'
                  : 'text-warm-gray hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
