import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { ChevronDown } from 'lucide-react';
import { products } from '@/data';

const ProductGrid = ({ setIsMobileFilterOpen }) => {
  const [sortBy, setSortBy] = useState('featured');
  // Duplicate products to fill out the grid for the demo
  const gridProducts = [...products, ...products, ...products.slice(0, 2)].map((p, i) => ({...p, id: `${p.id}-${i}`}));

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="flex-1 lg:pl-12">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="lg:hidden text-sm font-medium tracking-widest uppercase py-2 border-b border-foreground"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          Filters
        </button>

        <p className="text-muted text-sm hidden lg:block">Showing {gridProducts.length} products</p>

        {/* Sort Dropdown */}
        <div className="relative group self-end sm:self-auto">
          <button className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase">
            <span>Sort: {sortOptions.find(o => o.value === sortBy)?.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-borders shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors ${sortBy === option.value ? 'bg-secondary font-medium' : ''}`}
                onClick={() => setSortBy(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
        {gridProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination (Visual only) */}
      <div className="mt-16 flex justify-center border-t border-borders pt-8">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center border border-foreground bg-foreground text-background">1</button>
          <button className="w-10 h-10 flex items-center justify-center border border-transparent hover:bg-secondary transition-colors">2</button>
          <button className="w-10 h-10 flex items-center justify-center border border-transparent hover:bg-secondary transition-colors">3</button>
          <span className="px-2">...</span>
          <button className="w-10 h-10 flex items-center justify-center border border-transparent hover:bg-secondary transition-colors">→</button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
