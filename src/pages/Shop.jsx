import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (categoryParam !== 'all') {
      list = list.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase());
    }
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [categoryParam, sort, priceRange]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between mb-6 md:mb-10">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-ink">Shop</h1>
            <p className="mt-2 text-sm text-ink-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              {categoryParam !== 'all' ? ` in ${categoryParam}` : ''}
            </p>
          </div>
          <button
            className="md:hidden inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase text-ink"
            onClick={() => setMobileFiltersOpen((v) => !v)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className={`md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs tracking-widest-xl uppercase text-ink mb-3">Category</h3>
                <ul className="space-y-2 text-sm text-ink-muted">
                  <li>
                    <button onClick={() => setCategory('all')} className={`hover:text-gold transition-colors ${categoryParam === 'all' ? 'text-gold' : ''}`}>All</button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button onClick={() => setCategory(cat.id)} className={`hover:text-gold transition-colors ${categoryParam === cat.id ? 'text-gold' : ''}`}>{cat.name}</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs tracking-widest-xl uppercase text-ink mb-3">Price</h3>
                <div className="flex items-center gap-2 text-sm text-ink-muted">
                  <span>${priceRange[0]}</span>
                  <span>—</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={150}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full mt-2 accent-gold"
                />
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-ink-muted">
                Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
              </div>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-base/10 rounded-sm pl-3 pr-8 py-2 text-xs text-ink focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-muted pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center text-ink-muted text-sm">No pieces match your filters.</div>
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
    </div>
  );
};

export default Shop;
