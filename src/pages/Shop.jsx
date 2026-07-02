import React, { useState, useEffect, useRef } from 'react';
import { products } from '@/api/products';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Sets'];
  
  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy]);

  return (
    <div ref={containerRef} className="py-12 px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-screen-2xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800">Shop All</h1>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A8A29A]">Pieces for the everyday and the extraordinary</p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex items-center justify-between border-y-[0.5px] border-slate-100 py-6">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-slate-800 hover:text-[#C5A059] transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter & Sort
            </button>
            <div className="hidden md:flex items-center gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "font-sans text-[10px] uppercase tracking-widest transition-all",
                    selectedCategory === cat ? "text-[#C5A059] border-b-[1.5px] border-[#C5A059] pb-1" : "text-slate-500 hover:text-slate-800"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#A8A29A]">{filteredProducts.length} Products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 py-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Filter Sidebar (Slide out) */}
      <div className={cn(
        "fixed inset-0 z-[100] transition-opacity duration-500",
        isFilterOpen ? "visible opacity-100" : "invisible opacity-0"
      )}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
        <div className={cn(
          "absolute top-0 left-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 p-8",
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-xl uppercase tracking-widest">Filter</h2>
            <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="font-sans text-xs uppercase tracking-widest font-bold">Category</h3>
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      className="accent-[#C5A059]" 
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span className="font-sans text-xs uppercase tracking-widest text-slate-500 group-hover:text-black">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t-[0.5px] border-slate-100">
              <button 
                onClick={() => { setSelectedCategory('All'); setIsFilterOpen(false); }}
                className="w-full bg-[#1A1A1A] text-white py-4 font-sans text-xs uppercase tracking-widest"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
