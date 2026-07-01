import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];

  const filteredProducts = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; // Default newest
    });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [activeCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-4 md:px-12 lg:px-20 min-h-screen bg-background animate-fade-in">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif italic text-foreground tracking-tight">
          {activeCategory === 'All' ? 'The Collection' : activeCategory}
        </h1>
        <p className="font-sans text-xs uppercase tracking-super-wide text-stone-500">
          Showing {filteredProducts.length} pieces
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center border-y border-stone-200 py-4 mb-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-[10px] uppercase font-bold tracking-widest"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent font-sans text-[10px] uppercase font-bold tracking-widest outline-none"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden lg:block w-64 space-y-10">
          <div className="space-y-6">
            <h3 className="font-sans text-[10px] uppercase font-bold tracking-super-wide pb-4 border-b border-stone-200">Category</h3>
            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
                  className={cn(
                    "text-left font-serif text-lg italic transition-colors hover:text-primary",
                    activeCategory === cat ? "text-primary border-r-2 border-primary" : "text-stone-500"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-[10px] uppercase font-bold tracking-super-wide pb-4 border-b border-stone-200">Sort By</h3>
            <div className="flex flex-col gap-4">
               {['newest', 'price-low', 'price-high'].map((sort) => (
                 <button
                   key={sort}
                   onClick={() => setSortBy(sort)}
                   className={cn(
                     "text-left font-sans text-xs uppercase tracking-widest transition-colors hover:text-stone-950",
                     sortBy === sort ? "text-stone-950 font-bold" : "text-stone-400"
                   )}
                 >
                   {sort.replace('-', ': ').replace('low', 'low to high').replace('high', 'high to low')}
                 </button>
               ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 space-y-6">
              <p className="font-serif text-2xl italic text-stone-400">No pieces found in this category.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="btn btn-outline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-background z-[100] p-8 lg:hidden animate-fade-in flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-2xl italic">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-12 overflow-y-auto no-scrollbar pb-20">
             <div className="space-y-6">
                <h3 className="font-sans text-[10px] uppercase font-bold tracking-widest text-stone-400">Category</h3>
                <div className="flex flex-col gap-6">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSearchParams(cat === 'All' ? {} : { category: cat });
                        setIsFilterOpen(false);
                      }}
                      className={cn(
                        "text-left font-serif text-3xl italic",
                        activeCategory === cat ? "text-primary" : "text-stone-950"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
             </div>
          </div>

          <div className="mt-auto pt-8 border-t border-stone-100">
             <button 
              onClick={() => setIsFilterOpen(false)}
              className="btn btn-primary w-full"
             >
               Show {filteredProducts.length} Results
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
