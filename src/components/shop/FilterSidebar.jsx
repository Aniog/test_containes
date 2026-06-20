import React from 'react';

const FilterSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        {/* Sort */}
        <div>
          <label className="block text-sm text-cream mb-3 tracking-wider uppercase font-medium">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-3 bg-base-light border border-gold/30 text-cream focus:outline-none focus:border-gold appearance-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm text-cream mb-3 tracking-wider uppercase font-medium">
            Category
          </h3>
          <div className="space-y-2">
            {['all', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? 'text-gold bg-gold/10 border-l-2 border-gold'
                    : 'text-ink-muted hover:text-cream hover:bg-base-lighter'
                }`}
              >
                {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price range */}
        <div>
          <h3 className="text-sm text-cream mb-3 tracking-wider uppercase font-medium">
            Price Range
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Under $50', value: 'under-50' },
              { label: '$50 - $75', value: '50-75' },
              { label: '$75 - $100', value: '75-100' },
              { label: 'Over $100', value: 'over-100' },
            ].map((range) => (
              <button
                key={range.value}
                onClick={() => onPriceChange(range.value)}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                  priceRange === range.value
                    ? 'text-gold bg-gold/10 border-l-2 border-gold'
                    : 'text-ink-muted hover:text-cream hover:bg-base-lighter'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <h3 className="text-sm text-cream mb-3 tracking-wider uppercase font-medium">
            Material
          </h3>
          <div className="space-y-2">
            {['18K Gold Plated', 'Sterling Silver'].map((material) => (
              <label
                key={material}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer group"
              >
                <div className="w-4 h-4 border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors">
                  <div className="w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-ink-muted group-hover:text-cream transition-colors">
                  {material}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
