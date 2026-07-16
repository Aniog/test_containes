import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/api/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@/lib/mock-sdk';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const containerRef = useRef(null);
  
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (window.ImageHelper) {
      window.ImageHelper.loadImages({}, containerRef.current);
    }
  }, [categoryFilter]);

  const filteredProducts = products.filter(p => 
    categoryFilter === 'All' || p.category === categoryFilter
  );

  const categories = ['All', 'Necklaces', 'Earrings', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-24 min-h-screen">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.1em]">Collection</h1>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Explore our curated selection of demi-fine jewelry, designed to be worn every day and cherished forever.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-black/5 py-6 mb-12 space-y-4 md:space-y-0">
          <div className="flex space-x-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold hover:text-accent transition-colors"
            >
              <Filter size={16} />
              <span>Filters</span>
            </button>
            <div className="hidden md:flex space-x-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors ${categoryFilter === cat ? 'text-accent' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold cursor-pointer relative group">
            <span className="text-muted-foreground">Sort By:</span>
            <span>{sortBy}</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-24">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-serif text-muted-foreground">No pieces found in this category.</h3>
          </div>
        )}
      </div>

      {/* Filter Sidebar Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-8 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-sm uppercase tracking-widest font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>
            
            <div className="space-y-8 flex-grow">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                      <div 
                        onClick={() => setSearchParams({ category: cat })}
                        className={`w-4 h-4 border ${categoryFilter === cat ? 'bg-accent border-accent' : 'border-black/20 group-hover:border-accent'} transition-colors`} 
                      />
                      <span className={`text-sm ${categoryFilter === cat ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Price Range</h3>
                <div className="space-y-3">
                   {['Under $50', '$50 - $100', 'Over $100'].map(range => (
                     <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-black/20 group-hover:border-accent transition-colors" />
                        <span className="text-sm text-muted-foreground">{range}</span>
                     </label>
                   ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-primary text-white py-4 uppercase tracking-widest text-xs font-bold"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
