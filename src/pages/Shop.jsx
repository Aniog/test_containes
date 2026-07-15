import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortValue, setSortValue] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sortValue]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = PRICE_RANGES[activePriceIdx];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortValue === 'price-asc') return a.price - b.price;
      if (sortValue === 'price-desc') return b.price - a.price;
      if (sortValue === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-espresso tracking-wide">
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
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
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.12em] text-espresso border border-divider px-4 py-2 hover:border-espresso transition-colors"
                >
                  <SlidersHorizontal size={13} strokeWidth={1.5} />
                  Filter
                </button>
                <span className="font-inter text-xs text-taupe">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortValue}
                  onChange={e => setSortValue(e.target.value)}
                  className="appearance-none bg-transparent font-inter text-[11px] uppercase tracking-[0.12em] text-espresso border border-divider px-4 py-2 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
                >
                  {SORT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.length > 0 ? (
                filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-cormorant text-2xl font-light text-taupe">No pieces found</p>
                  <p className="font-inter text-xs text-taupe mt-2">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-espresso/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-espresso">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-taupe hover:text-espresso">
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
        </>
      )}
    </div>
  );
}

function FilterPanel({ activeCategory, setActiveCategory, activePriceIdx, setActivePriceIdx }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-[0.18em] text-taupe mb-4">Category</h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs transition-colors ${
                  activeCategory === cat
                    ? 'text-espresso font-medium'
                    : 'text-taupe hover:text-espresso'
                }`}
              >
                {activeCategory === cat && <span className="inline-block w-3 h-px bg-gold mr-2 align-middle" />}
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-divider" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-[0.18em] text-taupe mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceIdx(i)}
                className={`font-inter text-xs transition-colors ${
                  activePriceIdx === i
                    ? 'text-espresso font-medium'
                    : 'text-taupe hover:text-espresso'
                }`}
              >
                {activePriceIdx === i && <span className="inline-block w-3 h-px bg-gold mr-2 align-middle" />}
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
