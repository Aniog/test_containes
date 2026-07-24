import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { cn } from '../lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Filter state from URL
  const activeCategory = searchParams.get('category') || '';
  const activeSort = searchParams.get('sort') || 'featured';
  const activePriceRange = searchParams.get('price') || '';

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (activePriceRange) {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
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
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSort, activePriceRange]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [filteredProducts]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activePriceRange;
  const activeSortLabel = sortOptions.find((o) => o.value === activeSort)?.label || 'Featured';

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-100 pt-20">
      {/* Page header */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="text-center mb-2">
          <h1 className="font-serif text-headline md:text-display text-charcoal">
            Shop All
          </h1>
          <p className="font-sans text-body text-taupe mt-2">
            Discover our collection of premium demi-fine jewelry.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-300/50">
          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-cream-400 rounded font-sans text-caption uppercase tracking-ultra-wide text-charcoal hover:border-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                {activeCategory && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 rounded font-sans text-caption text-charcoal capitalize">
                    {activeCategory}
                    <button onClick={() => updateParam('category', '')} className="hover:text-gold">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activePriceRange && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 rounded font-sans text-caption text-charcoal">
                    {priceRanges.find((r) => r.id === activePriceRange)?.label}
                    <button onClick={() => updateParam('price', '')} className="hover:text-gold">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="font-sans text-caption text-taupe hover:text-charcoal underline transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block font-sans text-caption text-taupe">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 font-sans text-caption text-charcoal hover:text-gold transition-colors"
              >
                Sort: <span className="font-medium">{activeSortLabel}</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', sortOpen && 'rotate-180')} />
              </button>

              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-cream-50 border border-cream-300 rounded shadow-card-hover z-40 py-2 animate-scale-in">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateParam('sort', option.value === 'featured' ? '' : option.value);
                          setSortOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2 font-sans text-body transition-colors',
                          activeSort === option.value
                            ? 'text-gold bg-gold-50'
                            : 'text-charcoal hover:bg-cream-100'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateParam('category', '')}
                    className={cn(
                      'block font-sans text-body transition-colors',
                      !activeCategory ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateParam('category', cat.id === activeCategory ? '' : cat.id)}
                      className={cn(
                        'block font-sans text-body transition-colors',
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                      )}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateParam('price', '')}
                    className={cn(
                      'block font-sans text-body transition-colors',
                      !activePriceRange ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                    )}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateParam('price', range.id === activePriceRange ? '' : range.id)}
                      className={cn(
                        'block font-sans text-body transition-colors',
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-4">
                  Material
                </h3>
                <p className="font-sans text-body text-charcoal-muted">
                  All pieces are 18K gold plated or sterling silver.
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden" onClick={() => setFiltersOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-[300px] bg-cream-50 z-50 shadow-drawer lg:hidden overflow-y-auto animate-slide-in-right">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-sans text-body font-medium text-charcoal uppercase tracking-wide">Filters</h2>
                    <button onClick={() => setFiltersOpen(false)} className="p-2" aria-label="Close filters">
                      <X className="w-5 h-5 text-charcoal" />
                    </button>
                  </div>

                  {/* Category */}
                  <div className="mb-8">
                    <h3 className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-4">Category</h3>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => { updateParam('category', ''); setFiltersOpen(false); }}
                        className={cn('block font-sans text-body', !activeCategory ? 'text-gold font-medium' : 'text-charcoal-muted')}
                      >
                        All Jewelry
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { updateParam('category', cat.id); setFiltersOpen(false); }}
                          className={cn('block font-sans text-body', activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal-muted')}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <h3 className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-4">Price</h3>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => { updateParam('price', ''); setFiltersOpen(false); }}
                        className={cn('block font-sans text-body', !activePriceRange ? 'text-gold font-medium' : 'text-charcoal-muted')}
                      >
                        All Prices
                      </button>
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => { updateParam('price', range.id); setFiltersOpen(false); }}
                          className={cn('block font-sans text-body', activePriceRange === range.id ? 'text-gold font-medium' : 'text-charcoal-muted')}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={() => { clearFilters(); setFiltersOpen(false); }}
                      className="w-full py-3 border border-charcoal text-charcoal font-sans text-caption uppercase tracking-ultra-wide rounded hover:bg-charcoal hover:text-cream-100 transition-all"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-section text-charcoal mb-3">No products found</p>
                <p className="font-sans text-body text-taupe mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 border border-charcoal text-charcoal font-sans text-caption uppercase tracking-ultra-wide rounded hover:bg-charcoal hover:text-cream-100 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
