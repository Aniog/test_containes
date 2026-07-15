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
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const Shop = () => {
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
    .filter((p) => {
      const catMatch =
        activeCategory === 'All' ||
        p.category === activeCategory.toLowerCase();
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered, activeCategory, activePriceRange, sortBy]);

  return (
    <main className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-charcoal tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-warmgray mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-linen">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-transparent text-warmgray border-linen hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-[0.12em] uppercase text-charcoal border border-linen px-4 py-2"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="font-inter text-xs text-warmgray tracking-wide hidden md:inline">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-linen font-inter text-xs text-charcoal tracking-wide px-4 py-2 pr-8 focus:outline-none focus:border-charcoal cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-warmgray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-4">
                  Category
                </p>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-inter text-xs tracking-wide transition-colors duration-200 ${
                          activeCategory === cat
                            ? 'text-charcoal font-medium'
                            : 'text-warmgray hover:text-charcoal'
                        }`}
                      >
                        {cat}
                        {activeCategory === cat && (
                          <span className="ml-2 text-gold">—</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6">
                <p className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-4">
                  Price
                </p>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-inter text-xs tracking-wide transition-colors duration-200 ${
                          activePriceRange === i
                            ? 'text-charcoal font-medium'
                            : 'text-warmgray hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                        {activePriceRange === i && (
                          <span className="ml-2 text-gold">—</span>
                        )}
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
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-charcoal mb-2">No pieces found</p>
                <p className="font-inter text-sm text-warmgray">Try adjusting your filters</p>
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
          <div
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <p className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-charcoal">
                Filter & Sort
              </p>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-warmgray" />
              </button>
            </div>

            <div className="mb-6">
              <p className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-warmgray mb-3">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-inter text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'text-warmgray border-linen'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-warmgray mb-3">
                Price
              </p>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(i)}
                    className={`font-inter text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                      activePriceRange === i
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'text-warmgray border-linen'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-charcoal text-white font-inter text-xs tracking-[0.15em] uppercase py-4 mt-2"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Shop;
