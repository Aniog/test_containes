import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard.jsx';
import { products } from '../data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils.js';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop the Collection</h1>
          <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs">Explore our curated selection of demi-fine jewelry</p>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs font-sans uppercase tracking-widest whitespace-nowrap pb-2 border-b transition-all",
                activeCategory === cat ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar - desktop only for now or simple mobile toggle */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32 flex flex-col gap-10">
            <div>
              <h4 className="font-serif uppercase tracking-widest text-sm mb-6 border-b border-gray-100 pb-2">Filter By</h4>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center group cursor-pointer">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Material</span>
                  <Plus size={14} className="text-gray-300" />
                </div>
                <div className="flex justify-between items-center group cursor-pointer">
                  <span className="text-xs uppercase tracking-widest text-gray-400">Price Range</span>
                  <Plus size={14} className="text-gray-300" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif uppercase tracking-widest text-sm mb-6 border-b border-gray-100 pb-2">Sort By</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-3 h-3 border border-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                  <span className="text-xs uppercase tracking-widest">Newest Arrivals</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer opacity-40">
                  <div className="w-3 h-3 border border-gray-200 rounded-full" />
                  <span className="text-xs uppercase tracking-widest">Price: Low to High</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer opacity-40">
                  <div className="w-3 h-3 border border-gray-200 rounded-full" />
                  <span className="text-xs uppercase tracking-widest">Price: High to Low</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-between border-y border-gray-100 py-4 w-full">
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest">
                <Filter size={14} /> Filter & Sort
            </button>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">{filteredProducts.length} Items</span>
        </div>

        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-xl text-gray-400 italic">No pieces found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Plus = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
)

export default Shop;
