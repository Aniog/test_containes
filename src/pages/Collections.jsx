import React, { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/products';
import ProductCard from '@/components/home/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, sortBy]);

  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-serif mb-6">Collections</h1>
          <p className="text-sm opacity-60 uppercase-widest tracking-widest">Timeless, refined, responsibly crafted.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-none">
            <div className="sticky top-32">
              <div className="mb-12">
                <h3 className="text-[11px] uppercase-extra mb-8 text-accent">Category</h3>
                <div className="flex flex-col gap-4">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left text-sm transition-colors hover:text-accent ${selectedCategory === cat ? 'font-semibold text-primary' : 'opacity-60'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-[11px] uppercase-extra mb-8 text-accent">Material</h3>
                <div className="flex flex-col gap-4 text-sm opacity-60">
                  <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                    <input type="checkbox" defaultChecked className="accent-accent" /> 18K Gold Plated
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                    <input type="checkbox" className="accent-accent" /> Sterling Silver
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-8 border-y border-border py-4">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-[11px] uppercase-widest"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            <div className="flex items-center gap-2 text-[11px] uppercase-widest">
              Sort: {sortBy} <ChevronDown className="w-3 h-3" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-12">
              <p className="text-xs opacity-40 uppercase-widest">{filteredProducts.length} Products</p>
              <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer text-[11px] uppercase-widest flex items-center gap-2">
                  Sort by: <span className="font-semibold">{sortBy}</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <p className="font-serif italic text-xl opacity-40">No pieces found in this collection.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-background p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[11px] uppercase-extra">Filter & Sort</span>
            <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col gap-12 overflow-y-auto">
            <div>
              <h3 className="text-[11px] uppercase-extra mb-6 opacity-40">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                    className={`px-6 py-3 text-xs border ${selectedCategory === cat ? 'bg-primary text-white border-primary' : 'border-border'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="mt-auto w-full bg-primary text-white py-4 text-[11px] uppercase-extra"
          >
            Show {filteredProducts.length} Results
          </button>
        </div>
      )}
    </div>
  );
};

export default Collections;
