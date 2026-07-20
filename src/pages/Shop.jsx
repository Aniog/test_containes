import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies'];
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
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx];
      return p.price >= range.min && p.price <= range.max;
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
  }, [activeCategory, activePriceIdx, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-parchment border-b border-warm-gray-light/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-widest uppercase text-gold font-sans mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal">All Jewelry</h1>
          <p className="mt-3 text-sm text-warm-gray font-sans">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-shrink-0 px-5 py-2 text-xs tracking-widest uppercase font-sans transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-parchment'
                    : 'border border-warm-gray-light/50 text-charcoal hover:border-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal border border-warm-gray-light/50 px-4 py-2 font-sans"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-warm-gray-light/50 text-charcoal text-xs tracking-wide uppercase font-sans px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans mb-5">Price</h3>
              <ul className="flex flex-col gap-3">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceIdx(i)}
                      className={`text-sm font-sans transition-colors duration-200 ${
                        activePriceIdx === i ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-warm-gray-light/30 my-6" />

              <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans mb-5">Category</h3>
              <ul className="flex flex-col gap-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm font-sans capitalize transition-colors duration-200 ${
                        activeCategory === cat ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-cream">
              <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light/20">
                <span className="text-xs tracking-widest uppercase text-charcoal font-sans">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>
              <div className="px-6 py-8 flex flex-col gap-8">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans mb-4">Price</h3>
                  <ul className="flex flex-col gap-3">
                    {PRICE_RANGES.map((range, i) => (
                      <li key={range.label}>
                        <button
                          onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                          className={`text-sm font-sans ${activePriceIdx === i ? 'text-gold' : 'text-warm-gray'}`}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal font-sans mb-4">Category</h3>
                  <ul className="flex flex-col gap-3">
                    {CATEGORIES.map(cat => (
                      <li key={cat}>
                        <button
                          onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                          className={`text-sm font-sans capitalize ${activeCategory === cat ? 'text-gold' : 'text-warm-gray'}`}
                        >
                          {cat === 'all' ? 'All Jewelry' : cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal">No pieces found</p>
                <p className="text-sm text-warm-gray font-sans mt-2">Try adjusting your filters.</p>
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
