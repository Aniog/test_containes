import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { seedProducts } from '../lib/products';
import ProductCard from '../components/products/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = ({ title = "Shop All" }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, sortBy]);

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Earrings', slug: 'earrings' },
    { name: 'Necklaces', slug: 'necklaces' },
    { name: 'Huggies', slug: 'huggies' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...seedProducts];
    
    // Category filter
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    
    // Sort logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [category, sortBy]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider">{title}</h1>
          <p className="text-stone-500 font-light tracking-wide uppercase text-[10px]">
            {filteredProducts.length} pieces found
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12 border-y border-stone-100 py-6">
          <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          
          <div className="hidden md:flex gap-8">
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] pb-1 transition-all",
                  category === cat.slug ? "text-primary border-b border-primary" : "text-stone-400 hover:text-primary"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative group">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-[10px] uppercase tracking-widest pr-8 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-stone-400 font-serif italic text-lg">No pieces found in this collection.</p>
          </div>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-white p-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-sm font-serif uppercase tracking-widest">Filter By</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6">Category</h3>
                <div className="space-y-4">
                  {categories.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        setCategory(cat.slug);
                        setIsMobileFiltersOpen(false);
                      }}
                      className={cn(
                        "block text-sm font-light tracking-wide",
                        category === cat.slug ? "text-gold" : "text-primary"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
