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
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const range = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= range.min && p.price <= range.max;
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
    <main className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark py-12 md:py-16 text-center border-b border-ivory-dark">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary font-light">All Jewelry</h1>
        <p className="font-sans text-sm text-text-muted mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-ivory-dark">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'bg-transparent text-text-secondary border-ivory-dark hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-text-secondary"
            onClick={() => setFilterOpen(v => !v)}
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-ivory-dark font-sans text-xs tracking-widest uppercase text-text-secondary px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-text-muted mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block font-sans text-xs text-left w-full py-1 transition-colors duration-300 ${
                        activeCategory === cat ? 'text-gold' : 'text-text-secondary hover:text-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-ivory-dark" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-text-muted mb-4">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`block font-sans text-xs text-left w-full py-1 transition-colors duration-300 ${
                        activePriceRange === i ? 'text-gold' : 'text-text-secondary hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
                <span className="font-sans text-xs tracking-widest uppercase">Filters</span>
                <button onClick={() => setFilterOpen(false)}><X size={18} /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-text-muted mb-4">Category</h3>
                  <div className="space-y-3">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                        className={`block font-sans text-sm text-left w-full py-1 ${activeCategory === cat ? 'text-gold' : 'text-text-secondary'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-text-muted mb-4">Price</h3>
                  <div className="space-y-3">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                        className={`block font-sans text-sm text-left w-full py-1 ${activePriceRange === i ? 'text-gold' : 'text-text-secondary'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-text-muted font-light">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
