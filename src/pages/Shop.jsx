import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
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
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
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
      if (activeCategory === 'All') return true;
      return p.category === activeCategory.toLowerCase();
    })
    .filter(p => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price < range.max;
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
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-parchment pt-20 md:pt-24 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-ink">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-manrope text-xs text-mist mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-[10px] uppercase tracking-[0.15em] text-mist mb-4 font-medium">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activeCategory === cat
                            ? 'text-gold font-medium'
                            : 'text-mist hover:text-ink'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-[10px] uppercase tracking-[0.15em] text-mist mb-4 font-medium">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activePriceRange === i
                            ? 'text-gold font-medium'
                            : 'text-mist hover:text-ink'
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
                <h3 className="font-manrope text-[10px] uppercase tracking-[0.15em] text-mist mb-4 font-medium">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-manrope text-xs text-mist hover:text-ink transition-colors duration-200">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-parchment">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.1em] text-mist hover:text-ink transition-colors duration-200"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`font-manrope text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-parchment text-mist hover:border-gold hover:text-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-manrope text-xs text-mist pr-6 pl-0 py-1 border-0 border-b border-parchment focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-cream border border-parchment p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-xs uppercase tracking-[0.12em] text-ink font-medium">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={14} className="text-mist" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-manrope text-[10px] uppercase tracking-[0.12em] text-mist mb-3">Category</h3>
                    <ul className="flex flex-col gap-2">
                      {CATEGORIES.map(cat => (
                        <li key={cat}>
                          <button
                            onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                            className={`font-manrope text-xs ${activeCategory === cat ? 'text-gold font-medium' : 'text-mist'}`}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-manrope text-[10px] uppercase tracking-[0.12em] text-mist mb-3">Price</h3>
                    <ul className="flex flex-col gap-2">
                      {PRICE_RANGES.map((range, i) => (
                        <li key={range.label}>
                          <button
                            onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                            className={`font-manrope text-xs ${activePriceRange === i ? 'text-gold font-medium' : 'text-mist'}`}
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
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-cormorant text-2xl text-mist font-light">No pieces found</p>
                  <p className="font-manrope text-xs text-whisper mt-2">Try adjusting your filters</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                    className="mt-6 font-manrope text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
