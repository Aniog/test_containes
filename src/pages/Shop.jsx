import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/lib/products';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('Featured');

  useEffect(() => {
     setActiveCategory(categoryParam || 'All');
  }, [categoryParam]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sorts = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight uppercase">
            {activeCategory === 'All' ? 'Treasures for Every Moment' : activeCategory}
          </h1>
          <p className="text-gray-500 font-light italic max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry, designed to be worn and loved every day.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-hairline py-6 mb-12 gap-8">
          <div className="flex items-center gap-12 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={cn(
                   "nav-link text-[10px] whitespace-nowrap px-1",
                   activeCategory === cat ? "text-accent border-b border-accent pb-1" : "text-gray-400"
                 )}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium hover:text-accent transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
            
            <div className="relative group">
               <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium hover:text-accent transition-colors">
                 Sort: {sortBy}
                 <ChevronDown size={14} />
               </button>
               {/* Simplified Sort Dropdown */}
               <div className="absolute top-full right-0 mt-4 bg-white border border-hairline p-4 min-w-[200px] shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30">
                  <div className="flex flex-col gap-4">
                    {sorts.map(option => (
                      <button 
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={cn(
                          "text-[10px] tracking-widest uppercase text-left hover:text-accent transition-colors",
                          sortBy === option ? "text-accent" : "text-gray-500"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center text-gray-500 italic">
            No pieces found in this collection.
          </div>
        )}
      </div>

      {/* Filter Sidebar Overlay Placeholder */}
      <div className={cn(
        "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500",
        isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsFilterOpen(false)} />
      
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[101] shadow-2xl p-8 transition-transform duration-500 ease-in-out",
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-12 border-b border-hairline pb-4">
          <h2 className="font-serif text-xl">Filter Collections</h2>
          <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
        </div>
        
        <div className="flex flex-col gap-8">
           <div>
              <h3 className="text-[10px] tracking-widest uppercase font-semibold mb-4">Material</h3>
              <div className="flex flex-col gap-3">
                 {['18K Gold Plated', 'Recycled Silver', 'Mixed Crystals'].map(m => (
                   <label key={m} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-accent transition-colors" />
                      <span className="text-xs text-gray-600 font-light">{m}</span>
                   </label>
                 ))}
              </div>
           </div>
           
           <div>
              <h3 className="text-[10px] tracking-widest uppercase font-semibold mb-4">Price Range</h3>
              <div className="flex flex-col gap-3">
                 {['Under $50', '$50 - $100', 'Over $100'].map(p => (
                   <label key={p} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-accent transition-colors" />
                      <span className="text-xs text-gray-600 font-light">{p}</span>
                   </label>
                 ))}
              </div>
           </div>
        </div>

        <button 
          className="btn-primary w-full mt-12 py-4"
          onClick={() => setIsFilterOpen(false)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Shop;
