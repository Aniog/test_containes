import React, { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'all') list = list.filter((p) => p.category === category);
    if (priceRange === 'under50') list = list.filter((p) => p.price < 50);
    if (priceRange === '50to80') list = list.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') list = list.filter((p) => p.price > 80);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort, priceRange]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Category</h3>
        <div className="mt-3 space-y-2">
          {['all', ...categories.map((c) => c.id)].map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === c}
                onChange={() => updateCategory(c)}
                className="h-4 w-4 text-brand-accent focus:ring-brand-accent"
              />
              {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Price</h3>
        <div className="mt-3 space-y-2">
          {[
            { value: 'all', label: 'All prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange === option.value}
                onChange={() => setPriceRange(option.value)}
                className="h-4 w-4 text-brand-accent focus:ring-brand-accent"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl text-brand-ink">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-xs font-semibold tracking-widest uppercase text-brand-ink"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-brand-line bg-brand-surface pl-4 pr-10 py-2 text-xs font-medium tracking-widest uppercase text-brand-ink focus:outline-none focus:border-brand-accent"
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

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="hidden md:block md:col-span-1">
          <FilterSection />
        </aside>

        {mobileFiltersOpen && (
          <div className="md:hidden col-span-1">
            <div className="rounded-xl border border-brand-line bg-brand-surface p-4">
              <FilterSection />
            </div>
          </div>
        )}

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="group rounded-xl border border-brand-line bg-brand-surface overflow-hidden">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-medium tracking-widest uppercase text-brand-subtle">{product.category}</p>
                    <h3 className="mt-1 font-serif text-base text-brand-ink">{product.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button
                    type="button"
                    onClick={() => addItem(product, 'Gold')}
                    className="w-full rounded-full border border-brand-line py-2 text-xs font-semibold tracking-widest uppercase text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
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

export default ShopPage;
