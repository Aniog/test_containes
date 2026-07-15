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
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rated'];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(
    categories.find((c) => c.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('Featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceMatch = p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Best Rated') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered, activeCategory, activePriceRange, sortBy]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-stone/15 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="text-[10px] uppercase tracking-widest text-gold font-sans mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso">All Jewelry</h1>
          <p className="text-sm text-stone font-sans mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-widest font-sans px-4 py-2 border transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'bg-espresso text-ivory border-espresso'
                    : 'bg-transparent text-stone border-stone/30 hover:border-espresso hover:text-espresso'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-espresso font-sans border border-stone/30 px-4 py-2"
          >
            <SlidersHorizontal size={13} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="text-[10px] uppercase tracking-widest text-stone font-sans hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-stone/30 text-espresso text-xs font-sans px-4 py-2 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-widest text-stone font-sans mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left text-xs font-sans transition-colors duration-300 ${
                        activeCategory === cat ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone/15 pt-6">
                <h3 className="text-[10px] uppercase tracking-widest text-stone font-sans mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left text-xs font-sans transition-colors duration-300 ${
                        activePriceRange.label === range.label ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'
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
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-mink font-light">No pieces found</p>
                <p className="text-xs text-stone font-sans mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-espresso/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest text-espresso font-sans">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-stone">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-[10px] uppercase tracking-widest text-stone font-sans mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] uppercase tracking-widest font-sans px-3 py-2 border transition-colors ${
                      activeCategory === cat ? 'bg-espresso text-ivory border-espresso' : 'text-stone border-stone/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-[10px] uppercase tracking-widest text-stone font-sans mb-3">Price</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`text-[10px] uppercase tracking-widest font-sans px-3 py-2 border transition-colors ${
                      activePriceRange.label === range.label ? 'bg-espresso text-ivory border-espresso' : 'text-stone border-stone/30'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-gold text-espresso py-3 text-xs uppercase tracking-widest font-sans"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
