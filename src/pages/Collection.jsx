import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

const materials = ['Gold', 'Silver'];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || '';
  const sortValue = searchParams.get('sort') || 'featured';
  const priceFilter = searchParams.get('price') || '';
  const materialFilter = searchParams.get('material') || '';

  const setFilter = (key, value) => {
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

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (priceFilter) {
      const range = priceRanges.find((r) => r.label === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    if (materialFilter) {
      result = result.filter((p) => p.variants.includes(materialFilter));
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
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, sortValue, priceFilter, materialFilter]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [categoryFilter, sortValue, priceFilter, materialFilter]);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-ultra-wide uppercase text-cream mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors ${!categoryFilter ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm transition-colors ${categoryFilter === cat.id ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-ultra-wide uppercase text-cream mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('price', '')}
            className={`block text-sm transition-colors ${!priceFilter ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`block text-sm transition-colors ${priceFilter === range.label ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-ultra-wide uppercase text-cream mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', '')}
            className={`block text-sm transition-colors ${!materialFilter ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`block text-sm transition-colors ${materialFilter === mat ? 'text-gold' : 'text-cream-muted hover:text-cream'}`}
            >
              18K {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-cream-dim hover:text-cream transition-colors underline underline-offset-2"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding py-10 md:py-14 max-w-[1440px] mx-auto text-center">
        <p className="section-subtitle mb-3">
          {categoryFilter ? categories.find((c) => c.id === categoryFilter)?.name : 'All Jewelry'}
        </p>
        <h1 className="section-title">
          {categoryFilter ? categories.find((c) => c.id === categoryFilter)?.name : 'Our Collection'}
        </h1>
      </div>

      <div className="hairline-divider" />

      {/* Toolbar */}
      <div className="section-padding py-5 max-w-[1440px] mx-auto flex items-center justify-between">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden flex items-center gap-2 text-sm text-cream-muted hover:text-cream transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
          {hasActiveFilters && (
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          )}
        </button>

        <p className="hidden lg:block text-sm text-cream-muted">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>

        <div className="relative">
          <select
            value={sortValue}
            onChange={(e) => setFilter('sort', e.target.value)}
            className="appearance-none bg-transparent text-sm text-cream-muted pr-8 py-2 cursor-pointer focus:outline-none hover:text-cream transition-colors"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-surface text-cream">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-cream-dim" />
        </div>
      </div>

      {/* Content */}
      <div className="section-padding pb-20 md:pb-28 max-w-[1440px] mx-auto">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ${
              filtersOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity ${filtersOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setFiltersOpen(false)}
            />
            <div
              className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-surface border-r border-divider p-6 overflow-y-auto transition-transform duration-400 ${
                filtersOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-lg text-cream">Filters</h2>
                <button onClick={() => setFiltersOpen(false)} className="text-cream-muted hover:text-cream">
                  <X size={20} />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-cream mb-2">No pieces found</p>
                <p className="text-sm text-cream-muted mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-gold-outline text-xs">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
