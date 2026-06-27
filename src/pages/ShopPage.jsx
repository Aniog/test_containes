import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products, categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || null,
    priceRange: null,
    material: null,
    sort: 'featured',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [filters]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.priceRange) {
      const range = priceRanges.find((r) => r.label === filters.priceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (filters.material) {
      result = result.filter((p) => {
        if (filters.material === '18K Gold Plated') return p.variants.includes('gold');
        if (filters.material === 'Sterling Silver') return p.variants.includes('silver');
        return true;
      });
    }

    // Sort
    switch (filters.sort) {
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order (bestsellers first)
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [filters]);

  const activeFilterCount = [filters.category, filters.priceRange, filters.material].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-cream" ref={containerRef}>
      {/* Header */}
      <div className="bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">
            {filters.category
              ? categories.find((c) => c.id === filters.category)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-muted text-sm md:text-base">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              priceRanges={priceRanges}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <label className="text-xs text-muted tracking-wider uppercase hidden sm:block">Sort by</label>
                <div className="relative">
                  <select
                    value={filters.sort}
                    onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                    className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-xs tracking-wider text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark border border-border text-xs text-charcoal">
                    {categories.find((c) => c.id === filters.category)?.name}
                    <button
                      onClick={() => setFilters((prev) => ({ ...prev, category: null }))}
                      className="text-muted hover:text-charcoal"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark border border-border text-xs text-charcoal">
                    {filters.priceRange}
                    <button
                      onClick={() => setFilters((prev) => ({ ...prev, priceRange: null }))}
                      className="text-muted hover:text-charcoal"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.material && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark border border-border text-xs text-charcoal">
                    {filters.material}
                    <button
                      onClick={() => setFilters((prev) => ({ ...prev, material: null }))}
                      className="text-muted hover:text-charcoal"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-muted mb-6">Try adjusting your filters to discover more jewelry</p>
                <button
                  onClick={() => setFilters({ category: null, priceRange: null, material: null, sort: 'featured' })}
                  className="text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-cream z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                priceRanges={priceRanges}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
