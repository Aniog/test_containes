import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, priceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

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

  const priceRanges = [
    { label: 'Under $40', value: '0-40' },
    { label: '$40 – $60', value: '40-60' },
    { label: '$60 – $100', value: '60-100' },
    { label: 'Over $100', value: '100-999' },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal mb-3">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-sm text-charcoal hover:text-gold transition-colors bg-transparent border-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          {(activeCategory || priceRange) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 font-sans text-xs text-warm-gray hover:text-gold transition-colors bg-transparent border-none"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          )}

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-hairline px-4 py-2 pr-8 font-sans text-sm text-charcoal focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilter('category', '')}
                  className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none transition-colors ${
                    !activeCategory ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter('category', cat.id)}
                    className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none transition-colors ${
                      activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilter('price', '')}
                  className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none transition-colors ${
                    !priceRange ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  All Prices
                </button>
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setFilter('price', range.value)}
                    className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none transition-colors ${
                      priceRange === range.value ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-warm-gray text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-sans text-gold hover:text-gold-dark transition-colors bg-transparent border-none underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="relative aspect-[3/4] bg-gold-light overflow-hidden mb-3">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-grid-${product.id}-n7o8p9`}
                          data-strk-img={`[shop-name-${product.id}] gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Quick add */}
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product);
                            }}
                            className="px-4 py-2 bg-white text-charcoal font-sans text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors border-none"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="text-center">
                      <h3 id={`shop-name-${product.id}`} className="font-serif text-xs uppercase tracking-widest text-charcoal mb-1 truncate">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-warm-gray">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
