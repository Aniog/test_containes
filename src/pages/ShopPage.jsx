import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    const range = PRICE_RANGES[activePriceRange];
    result = result.filter(p => p.price >= range.min && p.price <= range.max);
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-warm-gray-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-espresso">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-warm-gray-light">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-espresso hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-espresso bg-espresso text-ivory'
                    : 'border-warm-gray-light text-warm-gray hover:border-espresso hover:text-espresso'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-warm-gray-light font-inter text-xs tracking-widest uppercase text-espresso px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activePriceRange={activePriceRange}
              setActivePriceRange={setActivePriceRange}
            />
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-espresso/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-inter text-xs tracking-widest uppercase text-espresso">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} strokeWidth={1.5} className="text-warm-gray" />
                  </button>
                </div>
                <FilterSidebar
                  activeCategory={activeCategory}
                  setActiveCategory={(c) => { setActiveCategory(c); setFilterOpen(false); }}
                  activePriceRange={activePriceRange}
                  setActivePriceRange={setActivePriceRange}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-warm-gray">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="mt-4 font-inter text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSidebar({ activeCategory, setActiveCategory, activePriceRange, setActivePriceRange }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-xs tracking-widest uppercase text-espresso mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-left font-inter text-xs tracking-wider transition-colors ${
                activeCategory === cat ? 'text-gold' : 'text-warm-gray hover:text-espresso'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-warm-gray-light" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-xs tracking-widest uppercase text-espresso mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setActivePriceRange(i)}
              className={`text-left font-inter text-xs tracking-wider transition-colors ${
                activePriceRange === i ? 'text-gold' : 'text-warm-gray hover:text-espresso'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
