import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { ProductCard } from '@/components/home/Bestsellers';

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

const ShopPage = () => {
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

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  const filtered = products
    .filter(p => {
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-parchment py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velvet font-light">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-sm font-sans text-mink mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: cat.toLowerCase() });
                  }
                }}
                className={`text-xs uppercase tracking-widest font-sans px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-velvet text-ivory border-velvet'
                    : 'bg-transparent text-charcoal border-parchment hover:border-velvet'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + Filter */}
          <div className="flex items-center gap-3">
            {/* Price filter */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-charcoal border border-parchment px-4 py-2 hover:border-velvet transition-colors"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                Filter
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-1 bg-ivory border border-parchment shadow-lg z-20 w-44 py-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-sans transition-colors ${
                        activePriceRange === i
                          ? 'text-velvet font-medium bg-cream'
                          : 'text-mink hover:text-velvet hover:bg-cream'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none text-xs uppercase tracking-widest font-sans text-charcoal border border-parchment px-4 py-2 pr-8 bg-ivory hover:border-velvet transition-colors focus:outline-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-mink pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active price filter badge */}
        {activePriceRange !== 0 && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-sans text-mink">Filters:</span>
            <button
              onClick={() => setActivePriceRange(0)}
              className="flex items-center gap-1.5 text-xs font-sans text-velvet bg-cream border border-parchment px-3 py-1 hover:border-velvet transition-colors"
            >
              {priceRanges[activePriceRange].label}
              <X size={11} strokeWidth={2} />
            </button>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-velvet font-light mb-3">No pieces found</p>
              <p className="text-sm font-sans text-mink">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
