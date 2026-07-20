import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

const sortOptions = [
  { label: 'Bestselling', value: 'bestselling' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = parseInt(searchParams.get('price') || '0');
  const activeSort = searchParams.get('sort') || 'bestselling';
  const activeMaterial = searchParams.get('material') || 'all';

  const setParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === '0' || value === 'bestselling') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    const range = priceRanges[activePriceRange];
    if (range) {
      filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
    }

    // Material filter
    if (activeMaterial !== 'all') {
      filtered = filtered.filter(p =>
        p.variants.some(v => v.toLowerCase() === activeMaterial.toLowerCase())
      );
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      case 'bestselling':
      default:
        // keep original order
        break;
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeSort, activeMaterial]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [filteredProducts]);

  const activeFilters = [];
  if (activeCategory !== 'all') activeFilters.push({ label: activeCategory, clear: () => setParam('category', 'all') });
  if (activePriceRange !== 0) activeFilters.push({ label: priceRanges[activePriceRange].label, clear: () => setParam('price', '0') });
  if (activeMaterial !== 'all') activeFilters.push({ label: activeMaterial, clear: () => setParam('material', 'all') });

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
          {activeCategory !== 'all' ? activeCategory : 'Collection'}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] text-text-primary mb-4">
          {activeCategory !== 'all'
            ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-border-subtle pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {/* Category pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setParam('category', 'all')}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-200 border ${
                  activeCategory === 'all'
                    ? 'bg-gold text-bg-deep border-gold'
                    : 'border-border-subtle text-text-secondary hover:border-gold hover:text-gold'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setParam('category', cat.id)}
                  className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? 'bg-gold text-bg-deep border-gold'
                      : 'border-border-subtle text-text-secondary hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-border-subtle" />

            {/* Price dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors font-medium">
                Price
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-bg-deep border border-border-subtle py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                {priceRanges.map((range, idx) => (
                  <button
                    key={idx}
                    onClick={() => setParam('price', String(idx))}
                    className={`block w-full text-left px-4 py-2 text-xs transition-colors ${
                      activePriceRange === idx
                        ? 'text-gold bg-bg-warm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-warm'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors font-medium">
                Material
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-bg-deep border border-border-subtle py-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                {['all', 'Gold', 'Silver'].map(mat => (
                  <button
                    key={mat}
                    onClick={() => setParam('material', mat)}
                    className={`block w-full text-left px-4 py-2 text-xs transition-colors ${
                      activeMaterial === mat
                        ? 'text-gold bg-bg-warm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-warm'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors font-medium">
              Sort: {sortOptions.find(s => s.value === activeSort)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full right-0 mt-2 bg-bg-deep border border-border-subtle py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setParam('sort', option.value)}
                  className={`block w-full text-left px-4 py-2 text-xs transition-colors ${
                    activeSort === option.value
                      ? 'text-gold bg-bg-warm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-warm'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-[11px] uppercase tracking-[0.1em] text-text-secondary">Active:</span>
            {activeFilters.map((f, i) => (
              <button
                key={i}
                onClick={f.clear}
                className="flex items-center gap-1.5 px-3 py-1 bg-bg-warm border border-border-subtle text-[11px] uppercase tracking-wider text-text-primary hover:border-gold transition-colors"
              >
                {f.label}
                <X className="w-3 h-3 text-text-secondary" />
              </button>
            ))}
          </div>
        )}

        {/* Product count */}
        <p className="text-xs text-text-secondary mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-text-secondary mb-2">No products found</p>
            <p className="text-sm text-text-secondary mb-6">Try adjusting your filters</p>
            <button
              onClick={() => setSearchParams({})}
              className="border border-gold text-gold px-8 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-bg-deep transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-bg-deep/70 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-bg-deep border-r border-border-subtle overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-lg tracking-[0.15em] text-text-primary">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-text-secondary hover:text-text-primary">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setParam('category', 'all'); }}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                      activeCategory === 'all' ? 'bg-gold text-bg-deep border-gold' : 'border-border-subtle text-text-secondary'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setParam('category', cat.id); }}
                      className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                        activeCategory === cat.id ? 'bg-gold text-bg-deep border-gold' : 'border-border-subtle text-text-secondary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setParam('price', String(idx)); }}
                      className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                        activePriceRange === idx ? 'bg-gold text-bg-deep border-gold' : 'border-border-subtle text-text-secondary'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium mb-3">Material</p>
                <div className="flex flex-wrap gap-2">
                  {['all', 'Gold', 'Silver'].map(mat => (
                    <button
                      key={mat}
                      onClick={() => { setParam('material', mat); }}
                      className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                        activeMaterial === mat ? 'bg-gold text-bg-deep border-gold' : 'border-border-subtle text-text-secondary'
                      }`}
                    >
                      {mat === 'all' ? 'All' : mat}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setSearchParams({}); setMobileFiltersOpen(false); }}
                className="w-full border border-gold text-gold py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-bg-deep transition-all"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
