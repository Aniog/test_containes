import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

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
      result = result.filter((p) => p.category === category);
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

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Category</h3>
        <div className="space-y-2">
          {['all', ...categories.map((c) => c.id)].map((value) => (
            <button
              key={value}
              onClick={() => handleCategoryChange(value)}
              className={`block w-full text-left text-sm capitalize transition-colors ${
                category === value ? 'text-brand-ink font-semibold' : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              {value === 'all' ? 'All' : value}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Price</h3>
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
                priceRange === option.value ? 'text-brand-ink font-semibold' : 'text-brand-muted hover:text-brand-ink'
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
    <div className="min-h-screen bg-brand-bg">
      <div className="container-narrow py-10 md:py-14">
        <div className="mb-8">
          <h1 className="section-title">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} products</p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-xs font-semibold tracking-widest uppercase text-brand-ink"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="hidden md:block w-64">
            <FilterSection />
          </div>

          <div className="ml-auto relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-brand-line bg-brand-surface px-4 py-2 pr-10 text-xs font-semibold tracking-widest uppercase text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted pointer-events-none" />
          </div>
        </div>

        {mobileFiltersOpen && (
          <div className="md:hidden rounded-2xl border border-brand-line bg-brand-surface p-5 mb-6">
            <FilterSection />
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-brand-muted">No products match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
