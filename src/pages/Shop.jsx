import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const togglePrice = (rangeId) => {
    setFilters((prev) => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(rangeId)
        ? prev.priceRanges.filter((r) => r !== rangeId)
        : [...prev.priceRanges, rangeId],
    }));
  };

  const toggleMaterial = (mat) => {
    setFilters((prev) => ({
      ...prev,
      materials: prev.materials.includes(mat)
        ? prev.materials.filter((m) => m !== mat)
        : [...prev.materials, mat],
    }));
  };

  const clearAll = () => {
    setFilters({ categories: [], priceRanges: [], materials: [] });
  };

  const hasFilters = filters.categories.length > 0 || filters.priceRanges.length > 0 || filters.materials.length > 0;

  const content = (
    <div className="space-y-8">
      {/* Header (mobile) */}
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="font-serif text-xl text-charcoal">Filters</h3>
        <button onClick={() => setMobileOpen(false)} className="p-1">
          <X size={20} />
        </button>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-gold-600 hover:text-gold-700 tracking-wider uppercase"
        >
          Clear All Filters
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border-warmGray-300 rounded text-gold-500 focus:ring-gold-500"
              />
              <span className="text-sm text-warmGray-600 group-hover:text-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.priceRanges.includes(range.id)}
                onChange={() => togglePrice(range.id)}
                className="w-4 h-4 border-warmGray-300 rounded text-gold-500 focus:ring-gold-500"
              />
              <span className="text-sm text-warmGray-600 group-hover:text-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.materials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="w-4 h-4 border-warmGray-300 rounded text-gold-500 focus:ring-gold-500"
              />
              <span className="text-sm text-warmGray-600 group-hover:text-charcoal transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        {content}
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-ivory shadow-2xl overflow-y-auto p-6 animate-slide-in-right">
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({ categories: [], priceRanges: [], materials: [] });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters, sortBy]);

  // Apply URL category on mount
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) {
      setFilters((prev) => ({
        ...prev,
        categories: [urlCategory],
      }));
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      const ranges = filters.priceRanges.map((id) => priceRanges.find((r) => r.id === id));
      result = result.filter((p) =>
        ranges.some((r) => p.price >= r.min && p.price < r.max)
      );
    }

    // Material filter
    if (filters.materials.length > 0) {
      result = result.filter((p) =>
        filters.materials.some((m) => p.material.toLowerCase().includes(m))
      );
    }

    // Sort
    switch (sortBy) {
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
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [filters, sortBy]);

  const activeFilterCount = filters.categories.length + filters.priceRanges.length + filters.materials.length;

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="pt-24 md:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-warmGray-400 mb-6">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-charcoal">Shop</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-label mb-2">Our Collection</p>
            <h1 className="heading-serif text-3xl md:text-5xl text-charcoal">
              Shop All Jewelry
            </h1>
          </div>
          <p className="text-sm text-warmGray-400">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="divider mt-8" />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />

          {/* Grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-ultra-wide uppercase text-warmGray-600 hover:text-gold-500 transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-gold-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider text-warmGray-600 pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warmGray-400" />
              </div>
            </div>

            {/* Products grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal mb-4">
                  No pieces found
                </p>
                <p className="text-sm text-warmGray-400 mb-8">
                  Try adjusting your filters to discover more.
                </p>
                <button
                  onClick={() => setFilters({ categories: [], priceRanges: [], materials: [] })}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
