import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="section-title">Shop</h1>
          <p className="section-subtitle">Discover pieces crafted to be treasured.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-base-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-base-700 transition-colors hover:border-base-900 md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-base-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-base-700 outline-none focus:border-base-900"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        <aside className={`${filtersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-base-700">Category</h3>
              <div className="mt-3 space-y-2">
                {['all', ...categories.map((c) => c.id)].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      activeCategory === cat ? 'bg-base-900 text-base-50' : 'text-base-600 hover:bg-base-100'
                    }`}
                  >
                    {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-base-700">Price Range</h3>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  max={150}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 rounded-lg border border-base-200 px-2 py-1.5 text-sm outline-none focus:border-base-900"
                />
                <span className="text-base-400">—</span>
                <input
                  type="number"
                  min={0}
                  max={150}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 rounded-lg border border-base-200 px-2 py-1.5 text-sm outline-none focus:border-base-900"
                />
              </div>
            </div>

            {(activeCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 150) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setPriceRange([0, 150]);
                  setSearchParams({});
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-hover"
              >
                <X className="h-3.5 w-3.5" />
                Clear filters
              </button>
            )}
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-base-500">No products match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setPriceRange([0, 150]);
                  setSearchParams({});
                }}
                className="btn-outline mt-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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

export default ShopPage;
