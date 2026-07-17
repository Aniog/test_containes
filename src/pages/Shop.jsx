import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '../lib/products';
import ProductGrid from '../components/shop/ProductGrid';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const { category } = useParams();
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen bg-[#FDFDFB]">
      <header className="px-6 md:px-12 mb-20 text-center space-y-4">
        <h1 id="shop-title" className="text-4xl md:text-7xl font-serif">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
        </h1>
        <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] md:text-xs">
          Essential Pieces for Everyday Radiance
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y py-6 mb-16 space-y-6 md:space-y-0">
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={cn(
                  "transition-luxury border-b border-transparent pb-1 pb-1",
                  activeCategory === cat.toLowerCase() ? "text-accent border-accent" : "text-gray-400 hover:text-black"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-12 text-[10px] uppercase tracking-widest font-bold">
            <button 
              className="flex items-center space-x-2 text-gray-400 hover:text-black transition-luxury"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-black transition-luxury">
                <span>Sort By: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
              {/* Simple dropdown simulation */}
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-luxury z-20 p-2 shadow-lg">
                <button onClick={() => setSortBy('newest')} className="w-full text-left p-2 hover:bg-gray-50 transition-luxury">Newest</button>
                <button onClick={() => setSortBy('price-low')} className="w-full text-left p-2 hover:bg-gray-50 transition-luxury">Price: Low to High</button>
                <button onClick={() => setSortBy('price-high')} className="w-full text-left p-2 hover:bg-gray-50 transition-luxury">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-40">
            <p className="font-serif text-2xl text-gray-400 italic">No pieces found in this collection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
