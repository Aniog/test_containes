import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
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

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-brand-line pb-5 mb-5 last:border-b-0 last:pb-0 last:mb-0">
      <p className="text-xs uppercase tracking-widest text-brand-ink font-semibold mb-3">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );

  const filters = (
    <div className="space-y-1">
      <FilterGroup title="Category">
        {['all', ...categories.map((c) => c.id)].map((value) => (
          <label key={value} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
            <input
              type="radio"
              name="category"
              value={value}
              checked={category === value}
              onChange={() => handleCategoryChange(value)}
              className="h-4 w-4 accent-brand-accent"
            />
            {value === 'all' ? 'All' : categories.find((c) => c.id === value)?.label}
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
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
              value={option.value}
              checked={priceRange === option.value}
              onChange={() => setPriceRange(option.value)}
              className="h-4 w-4 accent-brand-accent"
            />
            {option.label}
          </label>
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8">
        <p className="section-subtitle mb-2">All pieces</p>
        <h1 className="section-title">Shop</h1>
      </div>

      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24">{filters}</div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <label className="text-xs text-brand-muted" htmlFor="sort">Sort by</label>
              <div className="relative">
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-full border border-brand-line bg-white pl-4 pr-10 py-2 text-xs text-brand-ink focus:outline-none focus:border-brand-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted pointer-events-none" />
              </div>
            </div>
          </div>

          {mobileFiltersOpen && (
            <div className="lg:hidden rounded-2xl border border-brand-line bg-white p-5 mb-6">
              {filters}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-brand-muted">No pieces match your filters.</div>
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
  );
};

export default Shop;