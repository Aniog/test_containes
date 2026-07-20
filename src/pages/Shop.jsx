import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

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

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find((c) => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortValue, setSortValue] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter((p) => {
      const catMatch =
        activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceRange = PRICE_RANGES[activePriceIdx];
      const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortValue === 'price-asc') return a.price - b.price;
      if (sortValue === 'price-desc') return b.price - a.price;
      if (sortValue === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sortValue]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-stone-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso tracking-wide">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-stone mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activePriceIdx={activePriceIdx}
              setActivePriceIdx={setActivePriceIdx}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-light">
              {/* Mobile filter toggle */}
              <button
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.1em] text-espresso"
                onClick={() => setFilterOpen(true)}
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Category pills — desktop */}
              <div className="hidden md:flex gap-2 flex-wrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-sans text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-300 ${
                      activeCategory === cat
                        ? 'bg-espresso text-ivory border-espresso'
                        : 'border-stone-light text-stone hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-[0.1em] text-espresso border border-stone-light px-4 py-2 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl font-light text-espresso mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div
                ref={containerRef}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setFilterOpen(false)} />
          <div className="relative ml-auto w-72 bg-ivory h-full overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl font-light text-espresso">Filter</h3>
              <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-espresso">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel
              activeCategory={activeCategory}
              setActiveCategory={(c) => { setActiveCategory(c); setFilterOpen(false); }}
              activePriceIdx={activePriceIdx}
              setActivePriceIdx={(i) => { setActivePriceIdx(i); setFilterOpen(false); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPanel({ activeCategory, setActiveCategory, activePriceIdx, setActivePriceIdx }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-stone mb-4">Category</h4>
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'text-espresso font-medium'
                    : 'text-stone hover:text-espresso'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-stone-light" />

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-stone mb-4">Price</h4>
        <ul className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceIdx(i)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  activePriceIdx === i
                    ? 'text-espresso font-medium'
                    : 'text-stone hover:text-espresso'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-stone-light" />

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-stone mb-4">Material</h4>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Gold Vermeil'].map((m) => (
            <li key={m}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <span className="w-3.5 h-3.5 border border-stone-light group-hover:border-espresso transition-colors flex-shrink-0" />
                <span className="font-sans text-sm text-stone group-hover:text-espresso transition-colors">{m}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
