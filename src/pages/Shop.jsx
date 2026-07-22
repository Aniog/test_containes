import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';

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
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory.toLowerCase();
      const priceRange = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    const val = cat.toLowerCase();
    setActiveCategory(val);
    if (val !== 'all') {
      setSearchParams({ category: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-blush border-b border-linen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal font-light tracking-wide">
            The Collection
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-4 max-w-md mx-auto">
            Demi-fine gold jewelry crafted for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter & Sort bar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-linen">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-inter text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat.toLowerCase()
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-transparent text-warm-gray border-linen hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-linen px-4 py-2"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>

          <div className="flex items-center gap-4">
            <span className="font-inter text-xs text-warm-gray hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-linen px-4 py-2 hover:border-charcoal transition-colors"
              >
                Sort: {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-ivory border border-linen shadow-lg z-20 min-w-[180px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 font-inter text-xs uppercase tracking-widest transition-colors ${
                        sortBy === opt.value ? 'text-gold bg-blush' : 'text-warm-gray hover:text-charcoal hover:bg-blush'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-5 bg-blush border border-linen">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter text-xs uppercase tracking-widest text-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-warm-gray" />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-inter text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat.toLowerCase()
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-transparent text-warm-gray border-linen'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`text-left font-inter text-xs transition-colors ${
                      activePriceRange === i ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-4">Price Range</p>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`block font-inter text-xs transition-colors ${
                        activePriceRange === i ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-linen">
                <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-4">Material</p>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Silver Tone'].map(m => (
                    <label key={m} className="flex items-center gap-2.5 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors flex-shrink-0" />
                      <span className="font-inter text-xs text-warm-gray group-hover:text-charcoal transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-charcoal font-light">No pieces found</p>
                <p className="font-inter text-sm text-warm-gray mt-3">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
                  className="mt-6 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
