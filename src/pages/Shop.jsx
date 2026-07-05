import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import products, { categories } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const setPrice = (price) => {
    const params = new URLSearchParams(searchParams);
    if (price === 'all') params.delete('price');
    else params.set('price', price);
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice === 'under-50') {
      result = result.filter((p) => p.price < 50);
    } else if (activePrice === '50-100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (activePrice === 'over-100') {
      result = result.filter((p) => p.price > 100);
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activePrice, sortBy]);

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-dark mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block font-sans text-sm transition-colors w-full text-left ${
                activeCategory === cat.id
                  ? 'text-velmora-gold'
                  : 'text-velmora-muted hover:text-velmora-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-dark mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((pr) => (
            <button
              key={pr.value}
              onClick={() => setPrice(pr.value)}
              className={`block font-sans text-sm transition-colors w-full text-left ${
                activePrice === pr.value
                  ? 'text-velmora-gold'
                  : 'text-velmora-muted hover:text-velmora-dark'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <main className="pt-24 md:pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">
            Shop All
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name
              : 'The Collection'}
          </h1>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filter - desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-border">
              <p className="font-sans text-sm text-velmora-muted">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="md:hidden flex items-center gap-2 font-sans text-xs text-velmora-dark"
                >
                  <SlidersHorizontal size={14} />
                  Filter
                </button>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-sans text-xs text-velmora-dark pr-6 py-1 cursor-pointer focus:outline-none"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {mobileFilterOpen && (
              <div className="md:hidden mb-8 p-6 border border-velmora-border animate-fade-in">
                <FilterContent />
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-velmora-muted">
                  No pieces match your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}