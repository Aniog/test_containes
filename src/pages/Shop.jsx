import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
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
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = PRICE_RANGES[activePriceIdx];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
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

  const setCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-manrope text-sm text-mist mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-4">Category</p>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`font-manrope text-xs transition-colors ${
                          activeCategory === cat
                            ? 'text-obsidian font-medium'
                            : 'text-mist hover:text-obsidian'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-linen mb-8" />

              {/* Price */}
              <div className="mb-8">
                <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-4">Price</p>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceIdx(i)}
                        className={`font-manrope text-xs transition-colors ${
                          activePriceIdx === i
                            ? 'text-obsidian font-medium'
                            : 'text-mist hover:text-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-linen mb-8" />

              {/* Material */}
              <div>
                <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-4">Material</p>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone'].map(m => (
                    <li key={m}>
                      <button className="font-manrope text-xs text-mist hover:text-obsidian transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-linen">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-stone hover:text-obsidian transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="md:hidden flex gap-2 overflow-x-auto scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`flex-shrink-0 font-manrope text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-linen text-stone hover:border-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-manrope text-xs text-mist hidden md:block">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="font-manrope text-xs text-obsidian bg-transparent border border-linen px-3 py-1.5 focus:outline-none focus:border-stone cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter drawer */}
            {filterOpen && (
              <div className="md:hidden mb-6 p-5 bg-cream border border-linen">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-xs uppercase tracking-widest text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={14} className="text-stone" />
                  </button>
                </div>
                <div className="mb-4">
                  <p className="font-manrope text-[10px] uppercase tracking-widest text-mist mb-2">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                        className={`font-manrope text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                          activePriceIdx === i
                            ? 'border-obsidian bg-obsidian text-ivory'
                            : 'border-linen text-stone'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-stone mb-2">No pieces found</p>
                <p className="font-manrope text-xs text-mist">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
