import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const selectedCategory = searchParams.get('category') || '';

  const setCategory = (cat) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

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
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [selectedCategory]);

  const categories = [
    { id: '', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
              {selectedCategory === cat.id && (
                <span className="ml-2 w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {['Under $50', '$50 – $80', '$80 – $100', 'Over $100'].map((range) => (
            <label key={range} className="flex items-center gap-3 cursor-pointer group">
              <span className="w-4 h-4 border border-border rounded group-hover:border-warm-gray transition-colors" />
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Mixed Metals'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <span className="w-4 h-4 border border-border rounded group-hover:border-warm-gray transition-colors" />
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream-dark py-10 md:py-14 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Collection
        </p>
        <h1 className="section-title">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <div className="hairline mx-auto mt-5" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-2">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal size={16} />
              <span className="tracking-[0.05em] uppercase text-xs font-medium">Filter</span>
            </button>
            <span className="text-sm text-warm-gray">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Mobile filter drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFilterOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-lg">Filters</h2>
                  <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                    <X size={20} className="text-warm-gray" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid area */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="hidden lg:block text-sm text-warm-gray">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border px-4 py-2.5 pr-10 text-xs tracking-[0.05em] uppercase text-charcoal focus:outline-none focus:border-warm-gray transition-colors cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-sm text-warm-gray">Try a different category or filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
