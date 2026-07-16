import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = priceRanges[activePriceRange];
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
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-warmwhite border-b border-gold-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-ink tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-stone-warm mt-3">
            {filtered.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gold-muted">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[10px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold border-gold text-warmwhite'
                    : 'border-gold-muted text-stone-warm hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.12em] text-charcoal border border-gold-muted px-4 py-2"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-gold-muted font-inter text-[10px] uppercase tracking-[0.12em] text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={10} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-gold mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-inter text-xs transition-colors duration-200 ${
                          activePriceRange === i
                            ? 'text-gold font-medium'
                            : 'text-stone-warm hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-gold mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['All Materials', '18K Gold Plated', 'Sterling Silver'].map((m) => (
                    <li key={m}>
                      <button className="font-inter text-xs text-stone-warm hover:text-charcoal transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-warmwhite p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-cormorant text-2xl font-light text-ink">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} strokeWidth={1.5} className="text-charcoal" />
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-gold mb-4">Price</h3>
                  <ul className="space-y-3">
                    {priceRanges.map((range, i) => (
                      <li key={range.label}>
                        <button
                          onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                          className={`font-inter text-sm ${activePriceRange === i ? 'text-gold' : 'text-charcoal'}`}
                        >
                          {range.label}
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
                <p className="font-cormorant text-3xl font-light text-stone-warm">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="mt-4 font-inter text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-warmwhite transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
