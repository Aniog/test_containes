import React from 'react';

const FilterSidebar = ({ categories, selectedCategory, onCategoryChange, priceRange, onPriceChange, sort, onSortChange }) => {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {['all', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`block w-full text-left text-sm capitalize transition-colors ${
                selectedCategory === cat ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { label: 'All Prices', value: 'all' },
            { label: 'Under $50', value: 'under-50' },
            { label: '$50 - $80', value: '50-80' },
            { label: 'Over $80', value: 'over-80' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => onPriceChange(option.value)}
              className={`block w-full text-left text-sm transition-colors ${
                priceRange === option.value ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-3">Sort By</h3>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-sm border border-brand-border bg-brand-surface px-3 py-2 text-sm text-brand-text focus:outline-none focus:border-brand-gold"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;
