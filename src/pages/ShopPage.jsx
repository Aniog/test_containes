import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import products from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import strkImgConfig from '../strk-img-config.json';

const categories = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

const priceRanges = [
  { value: '', label: 'Any Price' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-999', label: '$80+' },
];

const materials = [
  { value: '', label: 'All Materials' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';
  const material = searchParams.get('material') || '';
  const sort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (material) {
      result = result.filter((p) => p.material === material);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (sort) {
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
  }, [category, material, priceRange, sort]);

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
  }, [filtered]);

  const activeFilters = [
    category && { key: 'category', label: categories.find(c => c.value === category)?.label },
    priceRange && { key: 'price', label: priceRanges.find(p => p.value === priceRange)?.label },
    material && { key: 'material', label: materials.find(m => m.value === material)?.label },
  ].filter(Boolean);

  const clearAll = () => {
    setSearchParams({});
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-text font-light">
          Shop All Jewelry
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-5 mb-4" />
        <p className="text-sm text-velmora-text-muted max-w-lg mx-auto">
          Discover our curated collection of demi-fine gold jewelry. Each piece crafted with care, designed to be treasured.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <span className="text-sm text-velmora-text-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setParam('sort', e.target.value)}
              className="appearance-none bg-transparent text-sm text-velmora-text-muted border border-velmora-border px-4 py-2 pr-8 focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-velmora-bg">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
          </div>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {activeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setParam(f.key, '')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold/10 border border-velmora-gold/30 text-velmora-gold text-xs tracking-wider"
              >
                {f.label}
                <X size={12} />
              </button>
            ))}
            <button
              onClick={clearAll}
              className="text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors underline underline-offset-2 ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="space-y-8">
              <FilterGroup
                title="Category"
                options={categories}
                value={category}
                onChange={(v) => setParam('category', v)}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                value={priceRange}
                onChange={(v) => setParam('price', v)}
              />
              <FilterGroup
                title="Material"
                options={materials}
                value={material}
                onChange={(v) => setParam('material', v)}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-text mb-3">No pieces found</p>
                <p className="text-sm text-velmora-text-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearAll}
                  className="text-xs tracking-[0.1em] uppercase text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-bg transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-overlay"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[80vh] bg-velmora-bg border-t border-velmora-border overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-border sticky top-0 bg-velmora-bg">
            <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-velmora-text">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-text-muted hover:text-velmora-gold">
              <X size={20} />
            </button>
          </div>
          <div className="px-6 py-6 space-y-8">
            <FilterGroup
              title="Category"
              options={categories}
              value={category}
              onChange={(v) => setParam('category', v)}
            />
            <FilterGroup
              title="Price"
              options={priceRanges}
              value={priceRange}
              onChange={(v) => setParam('price', v)}
            />
            <FilterGroup
              title="Material"
              options={materials}
              value={material}
              onChange={(v) => setParam('material', v)}
            />
          </div>
          <div className="px-6 py-4 border-t border-velmora-border sticky bottom-0 bg-velmora-bg">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3.5 bg-velmora-gold text-velmora-bg text-[11px] font-medium tracking-[0.15em] uppercase"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-text mb-3">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`block w-full text-left text-sm py-1 transition-colors duration-200 ${
              value === opt.value
                ? 'text-velmora-gold'
                : 'text-velmora-text-muted hover:text-velmora-text'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
