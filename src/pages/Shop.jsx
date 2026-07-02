import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

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

  const hasFilters = activeCategory || priceRange;

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="container-max px-6 md:px-8 section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-ink">
            {activeCategory
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-3 text-stone text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-ink hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-stone hover:text-gold transition-colors"
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-ink bg-transparent border border-sand px-4 py-2 focus:outline-none focus:border-gold ml-auto"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-ink mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilter('category', '')}
                  className={`block text-sm transition-colors ${!activeCategory ? 'text-gold font-medium' : 'text-stone hover:text-ink'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter('category', cat.id)}
                    className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-ink'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-ink mb-4">Price</h3>
              <div className="space-y-2">
                {[
                  { label: 'All', value: '' },
                  { label: 'Under $40', value: '0-40' },
                  { label: '$40 – $60', value: '40-60' },
                  { label: '$60 – $100', value: '60-100' },
                  { label: 'Over $100', value: '100-999' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('price', opt.value)}
                    className={`block text-sm transition-colors ${priceRange === opt.value ? 'text-gold font-medium' : 'text-stone hover:text-ink'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs uppercase tracking-wide font-semibold text-ink mb-4">Material</h3>
              <div className="space-y-2">
                <span className="block text-sm text-gold font-medium">18K Gold Plated</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-stone">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
