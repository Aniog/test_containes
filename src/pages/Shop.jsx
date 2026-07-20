import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  
  const categoryFilter = searchParams.get('category');
  const sortFilter = searchParams.get('sort') || 'featured';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter]);

  const filteredProducts = products.filter(p => 
    !categoryFilter || p.category.toLowerCase() === categoryFilter.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortFilter === 'price-low') return a.price - b.price;
    if (sortFilter === 'price-high') return b.price - a.price;
    return 0;
  });

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Collections'];

  return (
    <div ref={containerRef} className="pt-24 pb-24 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif">
            {categoryFilter ? categoryFilter : 'The Collection'}
          </h1>
          <p className="text-sm text-black/50 uppercase tracking-widest font-light">
            {sortedProducts.length} Treasures Found
          </p>
        </div>

        <div className="flex justify-between items-center mb-12 py-4 border-y">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest font-medium hover:text-brand-gold transition-colors"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-[10px] uppercase tracking-widest text-black/40">Sort By:</span>
            <select 
              value={sortFilter}
              onChange={(e) => setSearchParams({ ...Object.fromEntries(searchParams), sort: e.target.value })}
              className="bg-transparent text-xs uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 z-[100] transition-opacity duration-300",
        isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
        <div className={cn(
          "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 transform",
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-serif uppercase tracking-widest">Filter</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>

            <div className="flex-grow space-y-10">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Category</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      searchParams.delete('category');
                      setSearchParams(searchParams);
                    }}
                    className={cn(
                      "block text-sm font-light hover:text-brand-gold transition-colors",
                      !categoryFilter ? "text-brand-gold font-medium" : "text-black/60"
                    )}
                  >
                    All Items
                  </button>
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), category: cat.toLowerCase() })}
                      className={cn(
                        "block text-sm font-light hover:text-brand-gold transition-colors",
                        categoryFilter === cat.toLowerCase() ? "text-brand-gold font-medium" : "text-black/60"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-4">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-brand-dark text-white py-4 text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors duration-500"
              >
                Apply Filters
              </button>
              <button 
                onClick={() => {
                  setSearchParams({});
                  setIsFilterOpen(false);
                }}
                className="w-full text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
