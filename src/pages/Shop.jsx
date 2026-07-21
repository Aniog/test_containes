import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { ProductCard } from '../components/home/Bestsellers';

const CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || 'all';
  const priceParam = searchParams.get('price') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter(p => categoryParam === 'all' || p.category === categoryParam)
    .filter(p => {
      if (priceParam === 'all') return true;
      const [min, max] = priceParam.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortParam === 'price-asc') return a.price - b.price;
      if (sortParam === 'price-desc') return b.price - a.price;
      if (sortParam === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceParam, sortParam]);

  const activeFilterCount = [
    categoryParam !== 'all' ? 1 : 0,
    priceParam !== 'all' ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'hidden md:block'}>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="font-manrope text-[10px] uppercase tracking-widest text-velmora-obsidian mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <li key={cat.value}>
              <button
                onClick={() => setFilter('category', cat.value)}
                className={`font-manrope text-sm transition-colors text-left w-full ${
                  categoryParam === cat.value
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-mist hover:text-velmora-obsidian'
                }`}
              >
                {cat.label}
                {categoryParam === cat.value && (
                  <span className="ml-2 text-velmora-gold">·</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="font-manrope text-[10px] uppercase tracking-widest text-velmora-obsidian mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {PRICE_RANGES.map(range => (
            <li key={range.value}>
              <button
                onClick={() => setFilter('price', range.value)}
                className={`font-manrope text-sm transition-colors text-left w-full ${
                  priceParam === range.value
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-mist hover:text-velmora-obsidian'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear filters */}
      {activeFilterCount > 0 && (
        <button
          onClick={() => setSearchParams({})}
          className="flex items-center gap-1.5 font-manrope text-xs uppercase tracking-widest text-velmora-mist hover:text-velmora-gold transition-colors"
        >
          <X size={12} strokeWidth={2} />
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-linen pt-16 md:pt-20 page-enter" ref={containerRef}>
      {/* Page header */}
      <div className="bg-velmora-parchment border-b border-velmora-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            {categoryParam === 'all'
              ? 'All Jewelry'
              : CATEGORIES.find(c => c.value === categoryParam)?.label || 'Shop'}
          </h1>
          <p className="font-manrope text-sm text-velmora-mist mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-obsidian border border-velmora-parchment px-4 py-2.5 hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-velmora-gold text-velmora-obsidian text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort dropdown mobile */}
          <div className="relative">
            <select
              value={sortParam}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent font-manrope text-xs uppercase tracking-widest text-velmora-mist border border-velmora-parchment px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-mist pointer-events-none" />
          </div>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden bg-velmora-cream border border-velmora-parchment p-6 mb-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-5">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={16} strokeWidth={1.5} className="text-velmora-mist" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        )}

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="w-44 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <div className="flex items-center gap-3">
                <span className="font-manrope text-xs text-velmora-mist">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortParam}
                    onChange={e => setFilter('sort', e.target.value)}
                    className="appearance-none bg-transparent font-manrope text-xs uppercase tracking-widest text-velmora-obsidian border-b border-velmora-parchment pb-0.5 pr-5 focus:outline-none focus:border-velmora-gold cursor-pointer"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={11} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-mist pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-cormorant text-2xl text-velmora-mist">No pieces found</p>
                <p className="font-manrope text-sm text-velmora-whisper mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-6 font-manrope text-xs uppercase tracking-widest text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
