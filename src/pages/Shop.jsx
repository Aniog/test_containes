import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category) {
      result = result.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (priceRange === 'under50') result = result.filter((p) => p.price < 50);
    if (priceRange === '50to80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') result = result.filter((p) => p.price > 80);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, sort, priceRange]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const FilterSection = () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Category</p>
        <div className="mt-3 space-y-2">
          <label className="flex items-center gap-2 text-sm text-brand-ink">
            <input
              type="radio"
              name="category"
              checked={category === ''}
              onChange={() => updateCategory('')}
              className="h-4 w-4 accent-brand-accent"
            />
            All
          </label>
          {categories.map((c) => (
            <label key={c.id} className="flex items-center gap-2 text-sm text-brand-ink">
              <input
                type="radio"
                name="category"
                checked={category === c.id}
                onChange={() => updateCategory(c.id)}
                className="h-4 w-4 accent-brand-accent"
              />
              {c.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Price</p>
        <div className="mt-3 space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-brand-ink">
              <input
                type="radio"
                name="price"
                checked={priceRange === option.value}
                onChange={() => setPriceRange(option.value)}
                className="h-4 w-4 accent-brand-accent"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container-site">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="section-title">Shop</h1>
            <p className="mt-2 text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink"
              onClick={() => setMobileFiltersOpen((v) => !v)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 appearance-none rounded-full border border-brand-line bg-white pl-4 pr-10 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-subtle pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <aside className="hidden md:block md:col-span-1">
            <FilterSection />
          </aside>

          {mobileFiltersOpen && (
            <div className="md:hidden col-span-full rounded-2xl border border-brand-line bg-brand-surface p-6">
              <FilterSection />
            </div>
          )}

          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-brand-ink">No pieces match your filters.</p>
                <button onClick={() => { updateCategory(''); setPriceRange('all'); }} className="btn-outline mt-6">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
