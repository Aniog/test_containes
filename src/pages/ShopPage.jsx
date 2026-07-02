import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over75', label: '$75+', min: 75, max: Infinity },
];

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Price filter
    const range = priceRanges.find(r => r.id === activePrice);
    if (range && range.id !== 'all') {
      result = result.filter(p => p.price >= range.min && p.price <= range.max);
    }

    // Material filter
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [filteredProducts]);

  const activeFilters = [];
  if (activeCategory !== 'all') {
    const cat = categories.find(c => c.id === activeCategory);
    activeFilters.push({ key: 'category', label: cat?.name || activeCategory });
  }
  if (activePrice !== 'all') {
    const range = priceRanges.find(r => r.id === activePrice);
    activeFilters.push({ key: 'price', label: range?.label || activePrice });
  }
  if (activeMaterial !== 'all') {
    const mat = materials.find(m => m.id === activeMaterial);
    activeFilters.push({ key: 'material', label: mat?.label || activeMaterial });
  }

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Header banner */}
      <div className="bg-charcoal-900 py-12 md:py-16 text-center section-padding">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold-light mb-3">
          Explore
        </p>
        <h1 className="font-serif text-3xl md:text-display text-white tracking-[0.04em] mb-3">
          Shop All Jewelry
        </h1>
        <p className="font-sans text-sm text-charcoal-400 max-w-md mx-auto">
          Discover our collection of premium demi-fine jewelry, designed to be treasured.
        </p>
      </div>

      <div className="section-padding py-8 md:py-12">
        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-charcoal-700 border border-charcoal-200 px-4 py-2.5 hover:border-charcoal-400 transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>

            {/* Active filters (mobile) */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {activeFilters.map(f => (
                  <button
                    key={f.key}
                    onClick={() => setParam(f.key, 'all')}
                    className="flex items-center gap-1.5 font-sans text-[11px] tracking-wider uppercase bg-charcoal-100 text-charcoal-700 px-3 py-1.5 hover:bg-charcoal-200 transition-colors"
                  >
                    {f.label}
                    <X size={12} />
                  </button>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="font-sans text-[11px] tracking-wider uppercase text-charcoal-400 underline hover:text-charcoal-700 transition-colors ml-1"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-charcoal-500 tracking-wide uppercase hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => setParam('sort', e.target.value)}
                className="appearance-none font-sans text-xs tracking-wider uppercase text-charcoal-700 border border-charcoal-200 pl-4 pr-10 py-2.5 bg-white cursor-pointer focus:outline-none focus:border-charcoal-400 transition-colors"
              >
                {sortOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className={`lg:block w-64 flex-shrink-0 ${filterOpen ? 'fixed inset-0 z-50 bg-warm-white p-6 pt-20 overflow-auto lg:static lg:p-0 lg:pt-0 lg:bg-transparent lg:z-auto' : 'hidden'}`}>
            {filterOpen && (
              <button
                onClick={() => setFilterOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2 text-charcoal-500"
                aria-label="Close filters"
              >
                <X size={24} />
              </button>
            )}

            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-[0.14em] uppercase font-semibold text-charcoal-900 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setParam('category', 'all')}
                    className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                      activeCategory === 'all' ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setParam('category', cat.id); setFilterOpen(false); }}
                      className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                        activeCategory === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider-gold" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-[0.14em] uppercase font-semibold text-charcoal-900 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => { setParam('price', range.id); setFilterOpen(false); }}
                      className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                        activePrice === range.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider-gold" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-[0.14em] uppercase font-semibold text-charcoal-900 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat.id}
                      onClick={() => { setParam('material', mat.id); setFilterOpen(false); }}
                      className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                        activeMaterial === mat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="font-sans text-xs text-charcoal-400 mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-700 mb-2">No products found</p>
                <p className="font-sans text-sm text-charcoal-400 mb-6">Try adjusting your filters</p>
                <button onClick={clearAllFilters} className="btn-outline text-xs">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
