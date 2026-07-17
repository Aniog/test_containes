import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { SEED_PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/home/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = SEED_PRODUCTS.filter(p => 
    activeCategory === 'all' || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-wider">
            {activeCategory === 'all' ? 'The Collection' : activeCategory}
          </h1>
          <p className="text-muted text-xs uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            Thoughtfully crafted pieces designed to elevate your everyday ritual. 
            Explore our range of demi-fine jewelry.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-stone-100 py-6 mb-12 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto px-4 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all pb-1 border-b-2",
                  activeCategory === cat ? "border-accent text-primary font-bold" : "border-transparent text-muted hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between px-4 md:px-0">
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 py-2 text-[10px] uppercase tracking-widest outline-none cursor-pointer font-bold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
            >
              <Filter className="w-3 h-3" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-muted font-serif italic">
            No pieces found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
