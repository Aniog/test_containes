import React from 'react';
import { categories } from '../../data/products';

const FilterSidebar = ({ filters, setFilters, sort, setSort }) => {
  const toggleCategory = (id) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === id ? null : id,
    }));
  };

  return (
    <aside className="w-full md:w-64 md:flex-shrink-0">
      <div className="rounded-2xl border border-border bg-surface p-5">
        <h3 className="font-serif text-lg text-ink">Filters</h3>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">Category</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
            <li>
              <button type="button" onClick={() => setFilters((prev) => ({ ...prev, category: null }))} className={`transition-colors hover:text-ink ${!filters.category ? 'text-ink font-medium' : ''}`}>
                All
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className={`transition-colors hover:text-ink ${filters.category === category.id ? 'text-ink font-medium' : ''}`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">Price</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ink-secondary">
            <label className="flex items-center gap-2">
              <input type="radio" name="price" checked={filters.maxPrice === 50} onChange={() => setFilters((prev) => ({ ...prev, maxPrice: 50 }))} />
              Under $50
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="price" checked={filters.maxPrice === 70} onChange={() => setFilters((prev) => ({ ...prev, maxPrice: 70 }))} />
              $50 – $70
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="price" checked={filters.maxPrice === 100} onChange={() => setFilters((prev) => ({ ...prev, maxPrice: 100 }))} />
              $70 – $100
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="price" checked={filters.maxPrice === 120} onChange={() => setFilters((prev) => ({ ...prev, maxPrice: 120 }))} />
              $100+
            </label>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">Sort</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="mt-3 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-ink outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
