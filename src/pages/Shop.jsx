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
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
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
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = PRICE_RANGES[activePriceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-velmora-text-dark tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-velmora-text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                    : 'border-velmora-sand/40 text-velmora-text-muted hover:border-velmora-obsidian hover:text-velmora-text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-text-muted border border-velmora-sand/40 px-4 py-2"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex-shrink-0">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-sand/40 font-inter text-xs uppercase tracking-widest text-velmora-text-muted px-4 py-2 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left font-inter text-sm transition-colors duration-200 py-1 ${
                        activeCategory === cat
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-muted hover:text-velmora-text-dark'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline" />

              {/* Price filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-4">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`block w-full text-left font-inter text-sm transition-colors duration-200 py-1 ${
                        activePriceRange === i
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-muted hover:text-velmora-text-dark'
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
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-obsidian/50" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 rounded-t-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-velmora-text-muted" />
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                        className={`font-inter text-xs uppercase tracking-widest px-3 py-1.5 border transition-all ${
                          activeCategory === cat
                            ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                            : 'border-velmora-sand/40 text-velmora-text-muted'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                        className={`font-inter text-xs uppercase tracking-widest px-3 py-1.5 border transition-all ${
                          activePriceRange === i
                            ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                            : 'border-velmora-sand/40 text-velmora-text-muted'
                        }`}
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
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl italic text-velmora-text-muted mb-3">No pieces found</p>
                <p className="font-inter text-sm text-velmora-text-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
