import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [categoryParam, sort, priceRange]);

  const activeCategoryLabel = categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'All';

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink tracking-wide">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} {categoryParam ? `in ${activeCategoryLabel}` : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-brand-line text-sm text-brand-ink px-3 py-2 rounded-sm focus:outline-none focus:border-brand-muted"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 border border-brand-line bg-white px-3 py-2 rounded-sm text-sm text-brand-ink"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden md:block md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-brand-ink mb-3">Category</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => setSearchParams({})}
                      className={`${!categoryParam ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'} transition-colors`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSearchParams({ category: cat.id })}
                        className={`${categoryParam === cat.id ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'} transition-colors`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-brand-ink mb-3">Price</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full border border-brand-line rounded-sm px-2 py-1.5 text-sm text-brand-ink focus:outline-none focus:border-brand-muted"
                  />
                  <span className="text-brand-muted">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full border border-brand-line rounded-sm px-2 py-1.5 text-sm text-brand-ink focus:outline-none focus:border-brand-muted"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted text-sm">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                    setPriceRange([0, 150]);
                  }}
                  className="mt-4 text-sm tracking-widest uppercase text-brand-accent hover:text-brand-accentHover"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-lift p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-brand-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-brand-muted hover:text-brand-ink" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-brand-ink mb-3">Category</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => { setSearchParams({}); setMobileFiltersOpen(false); }} className={`${!categoryParam ? 'text-brand-ink font-medium' : 'text-brand-muted'}`}>All</button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button onClick={() => { setSearchParams({ category: cat.id }); setMobileFiltersOpen(false); }} className={`${categoryParam === cat.id ? 'text-brand-ink font-medium' : 'text-brand-muted'}`}>{cat.name}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-brand-ink mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} className="w-full border border-brand-line rounded-sm px-2 py-1.5 text-sm" />
                  <span className="text-brand-muted">—</span>
                  <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-full border border-brand-line rounded-sm px-2 py-1.5 text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
