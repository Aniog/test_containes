import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">Collection</p>
            <h1 className="font-serif text-3xl md:text-4xl">
              {activeCategory === 'all' ? 'All Pieces' : categories.find((c) => c.id === activeCategory)?.name || 'Shop'}
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setFilter('sort', e.target.value)}
                className="appearance-none bg-transparent border border-base-border pr-8 pl-4 py-2 text-xs font-medium tracking-wide focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setFilter('category', 'all')}
                    className={`text-sm transition-colors ${
                      activeCategory === 'all' ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setFilter('category', cat.id)}
                      className={`text-sm transition-colors ${
                        activeCategory === cat.id ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="hairline border-base-border/60 my-6" />

              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-4">Price</h3>
              <ul className="space-y-2">
                {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                  <li key={range}>
                    <button className="text-sm text-ink-muted hover:text-ink transition-colors">{range}</button>
                  </li>
                ))}
              </ul>

              <div className="hairline border-base-border/60 my-6" />

              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-4">Material</h3>
              <ul className="space-y-2">
                {['18K Gold Plated', 'Silver Tone', 'Crystal'].map((mat) => (
                  <li key={mat}>
                    <button className="text-sm text-ink-muted hover:text-ink transition-colors">{mat}</button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between md:hidden mb-4">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-base-border pr-8 pl-4 py-2 text-xs font-medium tracking-wide focus:outline-none focus:border-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
              </div>
            </div>

            {mobileFiltersOpen && (
              <div className="md:hidden mb-6 p-4 bg-surface border border-base-border/60">
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-3">Category</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setFilter('category', 'all')}
                    className={`px-3 py-1.5 text-xs border transition-colors ${
                      activeCategory === 'all' ? 'bg-ink text-surface border-ink' : 'border-base-border'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter('category', cat.id)}
                      className={`px-3 py-1.5 text-xs border transition-colors ${
                        activeCategory === cat.id ? 'bg-ink text-surface border-ink' : 'border-base-border'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm text-ink-muted">No pieces found in this category.</p>
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
