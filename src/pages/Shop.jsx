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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
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

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-cream-dark border-b border-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-stone mt-3">
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
                onClick={() => handleCategoryChange(cat)}
                className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-espresso text-cream border-espresso'
                    : 'bg-transparent text-stone border-stone-light hover:border-espresso hover:text-espresso'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-espresso border border-stone-light px-4 py-2"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="font-inter text-xs uppercase tracking-widest text-stone hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-stone-light font-inter text-xs text-espresso uppercase tracking-widest px-4 py-2 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-5 border border-stone-light bg-cream-dark">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter text-xs uppercase tracking-widest text-espresso">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} className="text-stone" />
              </button>
            </div>

            <div className="mb-5">
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-inter text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-espresso text-cream border-espresso'
                        : 'text-stone border-stone-light'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`text-left font-inter text-xs text-stone hover:text-espresso transition-colors ${
                      activePriceRange === i ? 'text-espresso font-medium' : ''
                    }`}
                  >
                    {activePriceRange === i ? '✓ ' : ''}{range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Category</p>
                <ul className="flex flex-col gap-2.5">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-inter text-sm transition-colors ${
                          activeCategory === cat
                            ? 'text-espresso font-medium'
                            : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {activeCategory === cat && <span className="text-gold mr-1.5">—</span>}
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline mb-8" />

              <div>
                <p className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Price</p>
                <ul className="flex flex-col gap-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-inter text-sm transition-colors ${
                          activePriceRange === i
                            ? 'text-espresso font-medium'
                            : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {activePriceRange === i && <span className="text-gold mr-1.5">—</span>}
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="font-cormorant text-2xl text-stone">No pieces found</p>
                <p className="font-inter text-xs text-stone/60 uppercase tracking-widest">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="mt-2 font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
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
    </div>
  );
}
