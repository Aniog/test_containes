import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
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
  }, [activeCategory, sort, priceRange]);

  const handleCategoryChange = (category) => {
    const next = category || null;
    setActiveCategory(category);
    if (next) {
      setSearchParams({ category: next });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Collection</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">
              {activeCategory || 'All Products'}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-secondary hover:border-ink hover:text-ink transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-border bg-white px-4 py-2 pr-9 text-xs font-semibold uppercase tracking-[0.18em] text-ink outline-none focus:border-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            </div>
          </div>
        </div>

        {filtersOpen && (
          <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-soft">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Category</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      !activeCategory ? 'bg-ink text-white' : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                        activeCategory === category ? 'bg-ink text-white' : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Price</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                        priceRange === option.value ? 'bg-ink text-white' : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-ink-secondary">No products match your filters.</p>
            <button
              onClick={() => {
                handleCategoryChange('');
                setPriceRange('all');
                setSort('featured');
              }}
              className="btn-outline mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
