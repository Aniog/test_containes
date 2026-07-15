import { X } from 'lucide-react';

export default function FilterSidebar({
  categories,
  priceRanges,
  materials,
  selectedCategory,
  selectedPriceRange,
  selectedMaterial,
  onCategoryChange,
  onPriceRangeChange,
  onMaterialChange,
  onClearFilters,
}) {
  return (
    <div className="bg-white rounded-lg border border-neutral-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif font-semibold text-neutral-900 text-lg">
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-brand-600 hover:text-brand-700 font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label
              key={category.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => onCategoryChange(category.id)}
                className="w-4 h-4 text-brand-500 focus:ring-brand-500"
              />
              <span className="text-neutral-700 text-sm">
                {category.name}
                <span className="text-neutral-400 ml-1">({category.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
          Price Range
        </h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label
              key={range.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range.id}
                onChange={() => onPriceRangeChange(range.id)}
                className="w-4 h-4 text-brand-500 focus:ring-brand-500"
              />
              <span className="text-neutral-700 text-sm">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map(material => (
            <label
              key={material.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === material.id}
                onChange={() => onMaterialChange(material.id)}
                className="w-4 h-4 text-brand-500 focus:ring-brand-500"
              />
              <span className="text-neutral-700 text-sm">
                {material.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategory !== 'all' || selectedPriceRange || selectedMaterial) && (
        <div className="pt-4 border-t border-neutral-100">
          <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
            Active Filters
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-brand-100 text-brand-800 text-xs font-medium px-3 py-1 rounded-full">
                <span>{categories.find(c => c.id === selectedCategory)?.name}</span>
                <button onClick={() => onCategoryChange('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPriceRange && (
              <span className="inline-flex items-center space-x-1 bg-brand-100 text-brand-800 text-xs font-medium px-3 py-1 rounded-full">
                <span>{priceRanges.find(r => r.id === selectedPriceRange)?.name}</span>
                <button onClick={() => onPriceRangeChange(null)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedMaterial && (
              <span className="inline-flex items-center space-x-1 bg-brand-100 text-brand-800 text-xs font-medium px-3 py-1 rounded-full">
                <span>{materials.find(m => m.id === selectedMaterial)?.name}</span>
                <button onClick={() => onMaterialChange(null)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}