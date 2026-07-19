import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory);
    }
    if (priceRange === 'under50') result = result.filter(p => p.price < 50);
    if (priceRange === '50to80') result = result.filter(p => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') result = result.filter(p => p.price > 80);
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort, priceRange]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand-ink">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setFiltersOpen(!filtersOpen)} className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <div className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none rounded-full border border-brand-border bg-brand-surface px-4 py-2 pr-8 text-xs font-semibold uppercase tracking-widest text-brand-ink focus:outline-none focus:border-brand-accent">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className={`md:col-span-1 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
              <div className="mt-3 space-y-2">
                {['all', ...categories.map(c => c.id)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left text-sm capitalize ${activeCategory === cat ? 'text-brand-accent font-semibold' : 'text-brand-muted hover:text-brand-ink'}`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price</h3>
              <div className="mt-3 space-y-2">
                {[
                  { value: 'all', label: 'All prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setPriceRange(option.value)}
                    className={`block w-full text-left text-sm ${priceRange === option.value ? 'text-brand-accent font-semibold' : 'text-brand-muted hover:text-brand-ink'}`}
                  >
                    {option.label}
                  </button>
                ))}
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
            <div className="mt-10 text-center text-sm text-brand-muted">No pieces match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
