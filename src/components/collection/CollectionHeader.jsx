import React from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

const CollectionHeader = ({ 
  totalProducts, 
  sortOption, 
  setSortOption,
  showFilters,
  setShowFilters,
  activeFilters
}) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  const activeFilterCount = activeFilters.length;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-border">
      {/* Results Count */}
      <p className="font-sans text-sm text-warmGray">
        {totalProducts} {totalProducts === 1 ? 'piece' : 'pieces'}
      </p>

      <div className="flex items-center gap-4">
        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal hover:text-gold transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-gold text-white text-xs px-1.5 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label className="font-sans text-sm text-warmGray hidden sm:inline">Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="font-sans text-sm bg-transparent border border-border rounded px-3 py-2 text-charcoal focus:outline-none focus:border-gold cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
