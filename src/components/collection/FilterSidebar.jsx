import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/products';

const FilterSidebar = ({ 
  filters, 
  setFilters, 
  showFilters, 
  setShowFilters,
  priceRange 
}) => {
  const categoryOptions = categories;

  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      price: { ...prev.price, [type]: value }
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      price: { min: 0, max: 200 }
    });
  };

  const hasActiveFilters = filters.categories.length > 0;

  return (
    <>
      {/* Mobile Overlay */}
      {showFilters && (
        <div 
          className="fixed inset-0 bg-charcoal/40 z-40 lg:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-80 lg:w-64 bg-cream transform transition-transform lg:transform-none duration-300 lg:block overflow-y-auto ${
          showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 lg:p-0 lg:pr-6 h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="font-serif text-lg">Filters</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="p-2 hover:bg-parchment rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gold hover:text-gold-dark font-sans mb-6 lg:mb-4"
            >
              Clear all filters
            </button>
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-sans text-sm font-medium text-charcoal mb-4 tracking-wide">
              Category
            </h3>
            <div className="space-y-3">
              {categoryOptions.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className="w-4 h-4 border-border rounded text-gold focus:ring-gold"
                  />
                  <span className="font-sans text-sm text-warmGray group-hover:text-charcoal transition-colors">
                    {category.name}
                  </span>
                  <span className="font-sans text-xs text-warmGray/60 ml-auto">
                    ({category.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-sans text-sm font-medium text-charcoal mb-4 tracking-wide">
              Price Range
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block font-sans text-xs text-warmGray mb-1">Min</label>
                <input
                  type="number"
                  value={filters.price.min}
                  onChange={(e) => handlePriceChange('min', parseInt(e.target.value) || 0)}
                  className="w-full border border-border rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-gold"
                  placeholder="$0"
                />
              </div>
              <span className="text-warmGray pt-5">—</span>
              <div className="flex-1">
                <label className="block font-sans text-xs text-warmGray mb-1">Max</label>
                <input
                  type="number"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange('max', parseInt(e.target.value) || 200)}
                  className="w-full border border-border rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-gold"
                  placeholder="$200"
                />
              </div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <button
            onClick={() => setShowFilters(false)}
            className="w-full lg:hidden bg-gold text-white font-sans text-sm py-3 rounded"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
