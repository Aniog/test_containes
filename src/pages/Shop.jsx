import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

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
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const { min, max } = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= min && p.price <= max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-mist py-14 lg:py-20 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-3">Velmora</p>
        <h1 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">All Jewelry</h1>
        <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-mist">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-widest font-medium px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-champagne border-champagne text-obsidian'
                    : 'border-mist text-stone hover:border-champagne hover:text-champagne'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Price filter */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone hover:text-charcoal transition-colors font-medium"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>
              {filterOpen && (
                <div className="absolute top-8 right-0 bg-ivory border border-mist shadow-lg z-20 w-48 py-2">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone px-4 py-2 font-semibold">Price</p>
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-sans text-xs transition-colors ${
                        activePriceRange === i ? 'text-champagne-dark font-semibold' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort */}
            <div className="relative flex items-center gap-2">
              <span className="font-sans text-xs uppercase tracking-widest text-stone font-medium hidden md:block">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs text-charcoal pr-6 focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        {(activeCategory !== 'All' || activePriceRange !== 0) && (
          <div className="flex flex-wrap gap-2 mb-8">
            {activeCategory !== 'All' && (
              <span className="flex items-center gap-1.5 bg-parchment border border-mist font-sans text-xs text-stone px-3 py-1.5">
                {activeCategory}
                <button onClick={() => setActiveCategory('All')} className="hover:text-charcoal">
                  <X size={10} />
                </button>
              </span>
            )}
            {activePriceRange !== 0 && (
              <span className="flex items-center gap-1.5 bg-parchment border border-mist font-sans text-xs text-stone px-3 py-1.5">
                {PRICE_RANGES[activePriceRange].label}
                <button onClick={() => setActivePriceRange(0)} className="hover:text-charcoal">
                  <X size={10} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {filtered.length > 0 ? (
            filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="font-serif text-2xl text-charcoal mb-3">No pieces found</p>
              <p className="font-sans text-sm text-stone">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
