import React from 'react';

const FilterSidebar = ({ filters, setFilters, categories, priceRanges }) => {
  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === categoryId ? null : categoryId,
    }));
  };

  const handlePriceChange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range,
    }));
  };

  const clearFilters = () => {
    setFilters({ category: null, priceRange: null, sort: 'featured' });
  };

  const hasActiveFilters = filters.category || filters.priceRange;

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-900 font-medium">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-gold-600 hover:text-gold-700 tracking-wide"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-4">Category</h4>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.id}>
              <button
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-sm transition-colors duration-200 ${
                  filters.category === cat.id
                    ? 'text-charcoal-900 font-medium'
                    : 'text-warm-gray hover:text-charcoal-900'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price range */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-4">Price</h4>
        <ul className="space-y-3">
          {priceRanges.map(range => (
            <li key={range.value}>
              <button
                onClick={() => handlePriceChange(range.value)}
                className={`text-sm transition-colors duration-200 ${
                  filters.priceRange === range.value
                    ? 'text-charcoal-900 font-medium'
                    : 'text-warm-gray hover:text-charcoal-900'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal-700 mb-4">Material</h4>
        <ul className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver'].map(material => (
            <li key={material}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.material === material
                    ? 'border-charcoal-900 bg-charcoal-900'
                    : 'border-cream-300 group-hover:border-charcoal-400'
                }`}>
                  {filters.material === material && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm text-warm-gray group-hover:text-charcoal-900 transition-colors">
                  {material}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
