import React from 'react';

const ShopFilters = ({ categories, selectedCategory, onCategoryChange, priceRange, onPriceChange, sort, onSortChange }) => {
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-ultra text-ink">Category</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === category ? 'border-ink bg-ink text-white' : 'border-border text-ink-secondary hover:border-ink hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-ultra text-ink">Price</h3>
        <div className="mt-3 flex items-center gap-3">
          <input
            type="number"
            min="0"
            value={priceRange[0]}
            onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
            className="w-full rounded-xl border border-border bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink"
            placeholder="Min"
          />
          <span className="text-ink-muted">—</span>
          <input
            type="number"
            min="0"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
            className="w-full rounded-xl border border-border bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink"
            placeholder="Max"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-ultra text-ink">Sort by</h3>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="mt-3 w-full rounded-xl border border-border bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink"
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

export default ShopFilters;
