import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../lib/products';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  
  const categoryFilter = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0 text-center md:text-left">
        <header>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
            {categoryFilter || 'Shop All'}
          </h1>
          <p className="text-zinc-500 font-light tracking-wide max-w-lg">
            Elevate your everyday with our curated collection of fine jewelry.
          </p>
        </header>

        <div className="flex items-center justify-center md:justify-end space-x-6">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-xs uppercase-widest tracking-widest border-b border-transparent hover:border-zinc-900 pb-1 transition-all"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 text-xs uppercase-widest tracking-widest border-b border-transparent hover:border-zinc-900 pb-1 transition-all">
              <span>Sort: {sortBy.replace('-', ' ')}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-zinc-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {['newest', 'price-low', 'price-high'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="w-full text-left px-4 py-3 text-xs uppercase-widest tracking-widest hover:bg-zinc-50 transition-colors"
                >
                  {option.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar (Mobile Overlay/Collapsible) */}
      <div className={cn(
        "grid transition-all duration-500",
        isFilterOpen ? "grid-cols-1 md:grid-cols-[240px_1fr] gap-12" : "grid-cols-1"
      )}>
        {isFilterOpen && (
          <aside className="space-y-10 animate-in fade-in slide-in-from-left duration-500">
            <div>
              <h3 className="uppercase-widest text-[10px] font-semibold mb-6 tracking-[0.2em] text-zinc-400">Categories</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      "text-sm font-light text-left tracking-wide hover:translate-x-1 transition-transform",
                      (cat === 'All' && !categoryFilter) || cat === categoryFilter ? "text-zinc-900 font-medium" : "text-zinc-500"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="uppercase-widest text-[10px] font-semibold mb-6 tracking-[0.2em] text-zinc-400">Price</h3>
              <div className="flex flex-col space-y-4 text-sm font-light text-zinc-500">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-zinc-200 rounded-none focus:ring-0 accent-zinc-900" />
                  <span className="group-hover:text-zinc-900 transition-colors">Under $50</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-zinc-200 rounded-none focus:ring-0 accent-zinc-900" />
                  <span className="group-hover:text-zinc-900 transition-colors">$50 - $100</span>
                </label>
              </div>
            </div>
          </aside>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-X-6 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <p className="uppercase-widest text-xs text-zinc-400">No pieces found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
