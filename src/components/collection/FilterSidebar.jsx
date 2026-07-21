import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FilterSidebar = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  materials,
  selectedMaterial,
  onMaterialChange,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-espresso/50 backdrop-blur-sm lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto w-80 bg-ivory lg:bg-transparent',
          'transform transition-transform duration-300 lg:transform-none',
          'lg:block p-6 lg:p-0 overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h2 className="font-serif text-xl">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 text-cocoa hover:text-espresso transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Title */}
        <h3 className="hidden lg:block font-serif text-xl text-espresso mb-6">
          Shop
        </h3>

        {/* Category Filter */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-espresso uppercase tracking-wide mb-4">
            Category
          </h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === ''}
                onChange={() => onCategoryChange('')}
                className="sr-only"
              />
              <span
                className={cn(
                  'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
                  selectedCategory === ''
                    ? 'border-champagne bg-champagne'
                    : 'border-silk group-hover:border-cocoa'
                )}
              >
                {selectedCategory === '' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-ivory" />
                )}
              </span>
              <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                All Jewelry
              </span>
            </label>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category.id}
                  onChange={() => onCategoryChange(category.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
                    selectedCategory === category.id
                      ? 'border-champagne bg-champagne'
                      : 'border-silk group-hover:border-cocoa'
                  )}
                >
                  {selectedCategory === category.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-ivory" />
                  )}
                </span>
                <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                  {category.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-espresso uppercase tracking-wide mb-4">
            Price
          </h4>
          <div className="space-y-2">
            {[
              { label: 'All Prices', min: 0, max: Infinity },
              { label: 'Under $50', min: 0, max: 50 },
              { label: '$50 - $75', min: 50, max: 75 },
              { label: '$75 - $100', min: 75, max: 100 },
              { label: '$100+', min: 100, max: Infinity },
            ].map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="price"
                  checked={
                    priceRange.min === range.min && priceRange.max === range.max
                  }
                  onChange={() => onPriceRangeChange({ min: range.min, max: range.max })}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
                    priceRange.min === range.min && priceRange.max === range.max
                      ? 'border-champagne bg-champagne'
                      : 'border-silk group-hover:border-cocoa'
                  )}
                >
                  {priceRange.min === range.min && priceRange.max === range.max && (
                    <span className="w-1.5 h-1.5 rounded-full bg-ivory" />
                  )}
                </span>
                <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-espresso uppercase tracking-wide mb-4">
            Material
          </h4>
          <div className="space-y-2">
            {materials.map((material) => (
              <label
                key={material.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="material"
                  checked={selectedMaterial === material.id}
                  onChange={() => onMaterialChange(material.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
                    selectedMaterial === material.id
                      ? 'border-champagne bg-champagne'
                      : 'border-silk group-hover:border-cocoa'
                  )}
                >
                  {selectedMaterial === material.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-ivory" />
                  )}
                </span>
                <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                  {material.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
