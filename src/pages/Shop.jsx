import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '@/components/products/ProductGrid';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 uppercase tracking-widest">{currentCategory}</h1>
        <p className="text-muted-foreground font-light max-w-lg mx-auto italic">
          Timeless pieces for the modern ritual. Crafted in demi-fine 18K gold plating.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between border-y border-border py-4 mb-16 space-y-4 md:space-y-0 text-xs uppercase tracking-[0.2em] font-medium">
        <div className="flex items-center space-x-12">
          {/* Categories Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat === 'All' ? '' : cat })}
                className={cn(
                  "hover:opacity-100 transition-opacity",
                  currentCategory === cat ? "opacity-100 border-b border-foreground" : "opacity-40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <button 
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer group">
          <span>Sort By: {sortOptions[0]}</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Grid */}
      <ProductGrid category={currentCategory === 'All' ? null : currentCategory} />
    </div>
  );
};

export default Shop;
