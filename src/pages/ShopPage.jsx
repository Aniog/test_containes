import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { SlidersHorizontal } from 'lucide-react';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || null,
    priceRange: null,
    materials: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters((f) => ({ ...f, category: cat }));
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters, sortBy]);

  // Filter products
  let filtered = products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.priceRange) {
      if (p.price < filters.priceRange.min || p.price > filters.priceRange.max) return false;
    }
    if (filters.materials && filters.materials.length > 0) {
      if (!filters.materials.includes(p.material)) return false;
    }
    return true;
  });

  // Sort
  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#faf8f5] pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1
          id="shop-page-title"
          className="velmora-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] text-center mb-2"
        >
          {filters.category
            ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
            : 'All Jewelry'}
        </h1>
        <p className="text-sm text-[#6b6b6b] text-center">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden flex items-center gap-2 text-sm text-[#1a1a1a]"
            onClick={() => setMobileOpen(true)}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <div className="hidden lg:block" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-[#e8e4df] bg-transparent px-3 py-2 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl text-[#6b6b6b] mb-2">No pieces found</p>
                <p className="text-sm text-[#6b6b6b]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
