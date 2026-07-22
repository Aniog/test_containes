import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs tracking-widest uppercase text-brand-muted mb-2">Collection</p>
          <h1 className="section-title">Shop All</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden inline-flex items-center gap-2 text-sm text-brand-ink border border-brand-border rounded-full px-4 py-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-brand-surface border border-brand-border rounded-full pl-4 pr-10 py-2 text-sm text-brand-ink focus:outline-none focus:border-brand-ink"
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className={`md:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="md:sticky md:top-24 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-brand-ink mb-3 tracking-wide">Category</h3>
              <div className="space-y-2">
                {['all', ...categories.map(c => c.id)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter('category', cat)}
                    className={`block w-full text-left text-sm capitalize transition-colors ${
                      activeCategory === cat ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-brand-ink mb-3 tracking-wide">Price</h3>
              <div className="space-y-2 text-sm text-brand-muted">
                <p>Under $50</p>
                <p>$50 – $80</p>
                <p>$80 – $120</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-brand-ink mb-3 tracking-wide">Material</h3>
              <div className="space-y-2 text-sm text-brand-muted">
                <p>18K Gold Plated</p>
                <p>Silver Tone</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-brand-muted">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
