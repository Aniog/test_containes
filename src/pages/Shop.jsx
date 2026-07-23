import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard.jsx';
import { products, categories } from '@/data/products.js';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink">
              {activeCategory || 'All Jewelry'}
            </h1>
            <p className="mt-2 text-sm text-brand-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-full border border-brand-line bg-white pl-4 pr-10 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className={`${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6' : 'hidden'} md:block md:static md:w-56 md:flex-shrink-0`}>
            <div className="md:sticky md:top-32">
              <div className="flex items-center justify-between md:hidden mb-6">
                <h3 className="font-serif text-xl text-brand-ink">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-muted">Close</button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Category</h4>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setCategory('')}
                        className={`text-sm ${!activeCategory ? 'text-brand-accent font-semibold' : 'text-brand-muted hover:text-brand-ink'} transition-colors`}
                      >
                        All
                      </button>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => setCategory(cat)}
                          className={`text-sm ${activeCategory === cat ? 'text-brand-accent font-semibold' : 'text-brand-muted hover:text-brand-ink'} transition-colors`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Price</h4>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    <li>Under $50</li>
                    <li>$50 - $80</li>
                    <li>$80 - $120</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink mb-3">Material</h4>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    <li>18K Gold Plated</li>
                    <li>Sterling Silver</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-brand-ink">No pieces found</p>
                <button onClick={() => setCategory('')} className="mt-4 text-sm font-semibold text-brand-accent hover:text-brand-accentHover">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
