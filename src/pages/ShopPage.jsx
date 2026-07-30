import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || 'all';
  const sortValue = searchParams.get('sort') || 'featured';
  const priceFilter = searchParams.get('price') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortValue, priceFilter]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (priceFilter !== 'all') {
      const range = priceRanges.find((r) => r.label === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortValue) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, sortValue, priceFilter]);

  const activeFiltersCount = [categoryFilter !== 'all', priceFilter !== 'all'].filter(Boolean).length;

  const clearFilters = () => {
    setSearchParams({});
  };

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? '' : 'hidden md:block'} space-y-8`}>
      {/* Category filter */}
      <div>
        <h3 className="text-body-sm font-medium text-velmora-black uppercase tracking-[0.08em] mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateParam('category', cat)}
              className={`block w-full text-left py-1.5 text-body-sm transition-colors ${
                categoryFilter === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-warm-gray hover:text-velmora-black'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-body-sm font-medium text-velmora-black uppercase tracking-[0.08em] mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateParam('price', 'all')}
            className={`block w-full text-left py-1.5 text-body-sm transition-colors ${
              priceFilter === 'all'
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-warm-gray hover:text-velmora-black'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateParam('price', range.label)}
              className={`block w-full text-left py-1.5 text-body-sm transition-colors ${
                priceFilter === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-warm-gray hover:text-velmora-black'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-body-sm font-medium text-velmora-black uppercase tracking-[0.08em] mb-4">
          Material
        </h3>
        <p className="text-body-sm text-velmora-warm-gray">18K Gold Plated</p>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-body-sm text-velmora-gold underline underline-offset-4 hover:text-velmora-gold-dark transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="text-center mb-2">
          <h1 className="font-serif text-heading-1 md:text-display text-velmora-black">
            {categoryFilter !== 'all'
              ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)
              : 'Shop All'}
          </h1>
          <p className="text-body text-velmora-warm-gray mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex gap-12">
          {/* Sidebar — desktop */}
          <aside className="w-52 flex-shrink-0 hidden md:block">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand/30">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFilters(true)}
                className="md:hidden flex items-center gap-2 text-body-sm text-velmora-charcoal"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] flex items-center justify-center rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={sortValue}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="appearance-none bg-transparent text-body-sm text-velmora-charcoal pr-7 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-heading-3 text-velmora-charcoal mb-2">No pieces found</p>
                <p className="text-body-sm text-velmora-warm-gray mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 border border-velmora-gold text-velmora-gold text-body-sm font-medium tracking-[0.06em] uppercase rounded-pill hover:bg-velmora-gold hover:text-white transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-velmora-black/50" onClick={() => setMobileFilters(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-ivory shadow-drawer animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-velmora-sand/30">
              <h2 className="font-serif text-heading-3 text-velmora-black">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="p-2 text-velmora-warm-gray"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-5">
              <FilterSidebar mobile />
            </div>
            <div className="p-5 border-t border-velmora-sand/30">
              <button
                onClick={() => setMobileFilters(false)}
                className="w-full py-3 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.08em] uppercase rounded-pill"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
