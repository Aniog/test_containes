import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (activePriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (activeMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === activeMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (a.badge === 'New' ? -1 : 1));
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all' || activeMaterial !== 'all';

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream-200 py-12 md:py-16 border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading mb-3">Collection</p>
          <h1 className="section-heading">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                  {[activeCategory, activePriceRange, activeMaterial].filter((v) => v !== 'all').length}
                </span>
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 font-sans text-xs text-charcoal-400 hover:text-charcoal transition-colors"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-charcoal-400 hidden sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans text-xs tracking-wider uppercase text-charcoal bg-transparent pr-6 py-2 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-3 h-3 text-charcoal-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter sidebar (mobile drawer / desktop inline) */}
      {showFilters && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 animate-fade-in">
          <div className="bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category */}
            <div>
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                    activeCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                      activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">
                Price
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => updateFilter('price', 'all')}
                  className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                    activePriceRange === 'all' ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
                  }`}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => updateFilter('price', range.id)}
                    className={`block font-sans text-sm w-full text-left py-1 transition-colors ${
                      activePriceRange === range.id ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">
                Material
              </h3>
              <div className="space-y-2">
                {['all', 'gold', 'silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => updateFilter('material', mat)}
                    className={`block font-sans text-sm w-full text-left py-1 capitalize transition-colors ${
                      activeMaterial === mat ? 'text-gold font-medium' : 'text-charcoal-500 hover:text-charcoal'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : `${mat} Plated`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-charcoal-300 mb-4">No products found</p>
            <button onClick={clearFilters} className="btn-outline">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
