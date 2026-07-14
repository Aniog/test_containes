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
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

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

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent">Collection</p>
            <h1 className="mt-2 font-serif text-3xl font-medium text-brand-ink sm:text-4xl">
              {category || 'All Jewelry'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-brand-divider bg-brand-surface px-4 py-2 pr-8 text-xs uppercase tracking-widest text-brand-ink outline-none focus:border-brand-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-muted" />
            </div>

            <button
              type="button"
              onClick={() => setFilterOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-divider bg-brand-surface px-4 py-2 text-xs uppercase tracking-widest text-brand-ink hover:border-brand-accent"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        {filterOpen && (
          <div className="mt-6 rounded-2xl border border-brand-divider bg-brand-surface p-5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => updateCategory('')}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-widest ${
                      !category ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-divider text-brand-ink'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => updateCategory(c)}
                      className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-widest ${
                        category === c ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-divider text-brand-ink'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price Range</p>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 rounded-full border border-brand-divider px-3 py-1.5 text-xs text-brand-ink outline-none focus:border-brand-accent"
                  />
                  <span className="text-xs text-brand-muted">to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 rounded-full border border-brand-divider px-3 py-1.5 text-xs text-brand-ink outline-none focus:border-brand-accent"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Material</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand-divider px-3 py-1.5 text-xs uppercase tracking-widest text-brand-ink">
                    18K Gold Plated
                  </span>
                  <span className="rounded-full border border-brand-divider px-3 py-1.5 text-xs uppercase tracking-widest text-brand-ink">
                    Hypoallergenic
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-brand-muted">No pieces match your filters.</p>
            <button
              type="button"
              onClick={() => {
                updateCategory('');
                setPriceRange([0, 150]);
                setSort('featured');
              }}
              className="mt-3 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
