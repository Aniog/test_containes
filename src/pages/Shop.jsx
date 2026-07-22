import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products, categories } from '@/data/products';
import Button from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  const setCategory = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-2">Collection</p>
            <h1 className="font-serif text-3xl md:text-4xl text-ink">
              {activeCategory || 'All Jewelry'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-widest uppercase bg-transparent border border-border rounded-sm px-3 py-2 text-ink focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button
              className="md:hidden flex items-center gap-2 border border-border rounded-sm px-3 py-2 text-xs tracking-widest uppercase text-ink"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="hidden md:block space-y-8">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-ink mb-3">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('')}
                    className={cn(
                      'text-sm transition-colors',
                      !activeCategory ? 'text-accent' : 'text-ink-secondary hover:text-ink'
                    )}
                  >
                    All
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setCategory(category)}
                      className={cn(
                        'text-sm transition-colors',
                        activeCategory === category ? 'text-accent' : 'text-ink-secondary hover:text-ink'
                      )}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-ink mb-3">Price</h3>
              <ul className="space-y-2 text-sm text-ink-secondary">
                <li>Under $50</li>
                <li>$50 – $80</li>
                <li>$80 – $120</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-ink mb-3">Material</h3>
              <ul className="space-y-2 text-sm text-ink-secondary">
                <li>18K Gold Plated</li>
                <li>Silver Tone</li>
              </ul>
            </div>
          </aside>

          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-ink-secondary">No products found.</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-80 bg-surface shadow-glow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl tracking-widest text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-ink" aria-label="Close filters">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-ink mb-3">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => { setCategory(''); setMobileFiltersOpen(false); }}
                      className={cn('text-sm', !activeCategory ? 'text-accent' : 'text-ink-secondary')}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => { setCategory(category); setMobileFiltersOpen(false); }}
                        className={cn('text-sm', activeCategory === category ? 'text-accent' : 'text-ink-secondary')}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
