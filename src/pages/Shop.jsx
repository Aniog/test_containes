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
    .filter((p) => {
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
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-charcoal">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[10px] tracking-widest uppercase px-4 py-2 border transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-transparent text-charcoal border-stone hover:border-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-charcoal border border-stone px-4 py-2 hover:border-charcoal transition-colors"
            >
              <SlidersHorizontal size={12} />
              Filter
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                className="appearance-none font-inter text-xs tracking-widest uppercase text-charcoal bg-transparent border border-stone px-4 py-2 pr-8 focus:outline-none focus:border-charcoal cursor-pointer hover:border-charcoal transition-colors"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-4">
                Price
              </p>
              <ul className="space-y-2">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceIdx(i)}
                      className={`font-inter text-xs text-left w-full transition-colors duration-200 ${
                        activePriceIdx === i
                          ? 'text-charcoal font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-stone">
                <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-4">
                  Material
                </p>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map((m) => (
                    <li key={m}>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="accent-gold w-3 h-3"
                          defaultChecked={m === '18K Gold Plated'}
                        />
                        <span className="font-inter text-xs text-warm-gray group-hover:text-charcoal transition-colors">
                          {m}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory px-6 py-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <p className="font-inter text-xs tracking-widest uppercase text-charcoal">Filters</p>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={18} className="text-charcoal" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-3">Price</p>
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                      className={`block font-inter text-sm mb-2 ${activePriceIdx === i ? 'text-charcoal font-medium' : 'text-warm-gray'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-charcoal mb-3">No pieces found</p>
                <p className="font-inter text-sm text-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
}
