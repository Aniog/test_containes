import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

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

  const setCategory = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-ink">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} products</p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-divider px-4 py-2 text-xs uppercase tracking-widest text-brand-ink"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>

          <div className="ml-auto flex items-center gap-3">
            <label className="text-xs text-brand-muted hidden sm:inline">Sort by</label>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-brand-divider bg-brand-surface px-4 py-2 pr-8 text-xs text-brand-ink focus:border-brand-ink focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="md:sticky md:top-24 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-ink mb-3">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => setCategory('all')} className={`text-sm ${activeCategory === 'all' ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'}`}>
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button onClick={() => setCategory(cat.id)} className={`text-sm ${activeCategory === cat.id ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'}`}>
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-ink mb-3">Price</h3>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>Under $50</li>
                  <li>$50 – $80</li>
                  <li>$80 – $120</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-ink mb-3">Material</h3>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>18K Gold Plated</li>
                  <li>Silver Tone</li>
                </ul>
              </div>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-sm text-brand-muted">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
