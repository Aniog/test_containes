import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { PRODUCTS } from '@/api/products';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  useEffect(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }

    // Sort
    switch (currentSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured / Newest - just leave as is for now
        break;
    }

    setFilteredProducts(result);
  }, [currentCategory, currentSort]);

  const updateCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const updateSort = (sort) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">
            {filteredProducts.length} Pieces
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest font-bold border border-border px-4 py-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>

          {/* Sort Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold border border-border px-4 py-2 hover:bg-muted transition-colors">
              <span>Sort: {SORT_OPTIONS.find(o => o.value === currentSort)?.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateSort(option.value)}
                  className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-muted transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Collections</h3>
            <div className="flex flex-col space-y-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => updateCategory(cat)}
                  className={cn(
                    "text-left text-sm uppercase tracking-widest hover:text-accent transition-colors",
                    currentCategory === cat ? "text-accent font-bold" : "text-foreground/70 font-light"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Material</h3>
            <div className="space-y-3">
              {['18K Gold Plated', '925 Sterling Silver', 'Vermeil'].map((m) => (
                <label key={m} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-border group-hover:border-accent transition-colors flex items-center justify-center">
                    {/* Placeholder checkbox */}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-foreground/70 font-light">{m}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif italic text-xl text-muted-foreground">No pieces found in this collection.</p>
              <button
                onClick={() => updateCategory('all')}
                className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-foreground/30 hover:border-foreground transition-all pb-1"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black/40 z-[200] md:hidden transition-opacity",
        isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )} onClick={() => setIsSidebarOpen(false)} />
      
      <div className={cn(
        "fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background z-[201] md:hidden p-8 flex flex-col transition-transform",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between mb-12">
          <h2 className="serif-uppercase text-lg">Filter By</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Collections</h3>
            <div className="flex flex-col space-y-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { updateCategory(cat); setIsSidebarOpen(false); }}
                  className={cn(
                    "text-left text-sm uppercase tracking-widest",
                    currentCategory === cat ? "text-accent font-bold underline underline-offset-8" : "text-foreground/70"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="btn-premium w-full py-4 text-xs"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
