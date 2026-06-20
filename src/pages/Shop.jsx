import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams({});

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-ink)]">
            {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="btn-ghost sm:hidden"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="input-field w-auto pr-8"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="flex gap-10">
        <aside className="hidden sm:block w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-3">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => updateFilter('category', '')}
                    className={`text-sm ${!activeCategory ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]'}`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => updateFilter('category', cat.id)}
                      className={`text-sm ${activeCategory === cat.id ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline" />

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-3">Price</h3>
              <ul className="space-y-2">
                {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                  <li key={range}>
                    <button
                      type="button"
                      className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                    >
                      {range}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline" />

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-3">Material</h3>
              <ul className="space-y-2">
                {['18K Gold Plated', 'Silver Plated', 'Crystal'].map((mat) => (
                  <li key={mat}>
                    <button
                      type="button"
                      className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                    >
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {(activeCategory || sort !== 'featured') && (
              <button type="button" onClick={clearFilters} className="text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]">
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-[var(--color-ink-secondary)]">No pieces match your filters.</p>
              <button type="button" onClick={clearFilters} className="btn-ghost mt-4">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--color-surface)] p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-medium text-[var(--color-ink)]">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-[var(--color-ink-secondary)]"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-3">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => { updateFilter('category', ''); setMobileFiltersOpen(false); }}
                      className={`text-sm ${!activeCategory ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-ink-secondary)]'}`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => { updateFilter('category', cat.id); setMobileFiltersOpen(false); }}
                        className={`text-sm ${activeCategory === cat.id ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-ink-secondary)]'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Shop;
