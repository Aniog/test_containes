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
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    categories.find((c) => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter((p) => {
      const catMatch =
        activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceMatch =
        p.price >= activePriceRange.min && p.price <= activePriceRange.max;
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
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="border-b border-parchment py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-mink mt-4">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-transparent text-mink border-parchment hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-parchment px-4 py-2"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="font-inter text-[10px] uppercase tracking-widest text-mink hidden md:block">
              Sort:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-inter text-xs text-charcoal bg-transparent border border-parchment px-4 py-2 pr-8 focus:outline-none focus:border-charcoal cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-mink pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-mink mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`block font-inter text-xs transition-colors ${
                        activePriceRange.label === range.label
                          ? 'text-charcoal font-medium'
                          : 'text-mink hover:text-charcoal'
                      }`}
                    >
                      {activePriceRange.label === range.label && (
                        <span className="inline-block w-2 h-px bg-gold mr-2 align-middle" />
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-mink mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block font-inter text-xs transition-colors ${
                        activeCategory === cat
                          ? 'text-charcoal font-medium'
                          : 'text-mink hover:text-charcoal'
                      }`}
                    >
                      {activeCategory === cat && (
                        <span className="inline-block w-2 h-px bg-gold mr-2 align-middle" />
                      )}
                      {cat}
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
                <p className="font-cormorant text-2xl text-mink">No pieces found</p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setActivePriceRange(priceRanges[0]);
                  }}
                  className="mt-4 font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="font-inter text-xs uppercase tracking-widest text-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-mink" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-mink mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                      className={`font-inter text-[10px] uppercase tracking-widest px-3 py-2 border transition-colors ${
                        activeCategory === cat
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'text-mink border-parchment'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-widest text-mink mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                      className={`font-inter text-[10px] uppercase tracking-widest px-3 py-2 border transition-colors ${
                        activePriceRange.label === range.label
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'text-mink border-parchment'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
