import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, sort]);

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Collection</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Shop All</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-ink-secondary hover:border-ink hover:text-ink transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-border bg-white px-4 py-2 pr-8 text-xs font-semibold text-ink outline-none focus:border-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-muted" />
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="mt-6 rounded-2xl border border-border bg-white p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['All', ...categories].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                      activeCategory === category
                        ? 'bg-ink text-white'
                        : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-ink-secondary">No pieces match this filter.</p>
            <button onClick={() => setActiveCategory('All')} className="btn-outline mt-4">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
