import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60plus', label: '$60+', min: 60, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find((p) => p.id === selectedPrice);
    if (priceRange && priceRange.id !== 'all') {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
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
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) + (selectedPrice !== 'all' ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wide mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm ${
              selectedCategory === 'all' ? 'text-foreground font-medium' : 'text-muted hover:text-foreground'
            } transition-colors`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`block text-sm ${
                selectedCategory === cat.slug
                  ? 'text-foreground font-medium'
                  : 'text-muted hover:text-foreground'
              } transition-colors`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wide mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setSelectedPrice(range.id)}
              className={`block text-sm ${
                selectedPrice === range.id
                  ? 'text-foreground font-medium'
                  : 'text-muted hover:text-foreground'
              } transition-colors`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wide mb-3">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Gold Vermeil', 'Stainless Steel'].map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 border-border rounded-sm accent-foreground"
                onChange={() => {}}
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="pt-24 md:pt-28 pb-6 md:pb-10 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">Shop All</h1>
          <p className="mt-2 text-sm text-muted">{filteredProducts.length} products</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-2 text-sm text-muted">
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-border text-xs">
                {categories.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPrice !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-border text-xs">
                {priceRanges.find((p) => p.id === selectedPrice)?.label}
                <button onClick={() => setSelectedPrice('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center gap-2 text-sm"
            >
              Sort by: {sortOptions.find((s) => s.id === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setSortDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-background border border-border shadow-lg z-40 min-w-[180px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-border transition-colors ${
                        sortBy === opt.id ? 'font-medium' : 'text-muted'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-52 shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                  }}
                  className="mt-4 text-sm text-accent underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[70]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[300px] bg-background z-[80] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <FilterContent />
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPrice('all');
                }}
                className="mt-8 w-full border border-border py-3 text-sm uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
