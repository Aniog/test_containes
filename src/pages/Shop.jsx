import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

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
      ? CATEGORIES.find(c => c.toLowerCase() === searchParams.get('category')) || 'All'
      : 'All'
  );
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.price >= priceRange.min && p.price <= priceRange.max)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, priceRange, sort]);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="border-b border-border bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-warm-gray border-border hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-border px-4 py-2"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-warm-gray hover:text-charcoal transition-colors"
            >
              {SORT_OPTIONS.find(o => o.value === sort)?.label}
              <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-border shadow-md z-20 min-w-[180px]">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSort(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-inter text-xs uppercase tracking-widest transition-colors ${
                      sort === opt.value ? 'text-gold bg-ivory' : 'text-warm-gray hover:text-charcoal hover:bg-ivory'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-ivory border border-border p-5 mb-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter text-xs uppercase tracking-widest text-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} strokeWidth={1.5} className="text-warm-gray" />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-inter text-[10px] uppercase tracking-widest text-light-gray mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-inter text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'text-warm-gray border-border'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-inter text-[10px] uppercase tracking-widest text-light-gray mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range)}
                    className={`text-left font-inter text-xs transition-colors ${
                      priceRange.label === range.label ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
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
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-inter text-[10px] uppercase tracking-widest text-light-gray mb-4">Category</p>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-inter text-sm transition-colors ${
                        activeCategory === cat ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-inter text-[10px] uppercase tracking-widest text-light-gray mb-4">Price</p>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(range)}
                      className={`text-left font-inter text-sm transition-colors ${
                        priceRange.label === range.label ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-charcoal mb-3">No pieces found</p>
                <p className="font-inter text-sm text-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
