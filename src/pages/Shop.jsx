import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }

    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter((p) => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter((p) => p.price > 80);
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryParam, sort, priceRange]);

  const setCategory = (value) => {
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
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-3">Category</h3>
        <div className="space-y-2">
          {['all', ...categories.map((c) => c.id)].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm transition-colors ${
                categoryParam === cat ? 'text-ink font-medium' : 'text-ink-secondary hover:text-ink'
              }`}
            >
              {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block w-full text-left text-sm transition-colors ${
                priceRange === option.value ? 'text-ink font-medium' : 'text-ink-secondary hover:text-ink'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8">
        <p className="eyebrow mb-2">Collection</p>
        <h1 className="section-heading">
          {categoryParam === 'all' ? 'All Jewelry' : categories.find((c) => c.id === categoryParam)?.name || 'Shop'}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <aside className="hidden md:block w-56 flex-shrink-0">
          <FilterSection />
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <div className="ml-auto flex items-center gap-2">
              <label htmlFor="sort" className="text-xs text-ink-secondary">Sort by</label>
              <div className="relative">
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-surface border border-border rounded-sm pl-3 pr-8 py-2 text-xs focus:outline-none focus:border-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          {mobileFiltersOpen && (
            <div className="md:hidden mb-6 p-4 bg-surface border border-border rounded-sm">
              <FilterSection />
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-ink-secondary">No products match your filters.</p>
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
  );
};

export default Shop;
