import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/common/ProductCard';
import productsData from '@/data/products.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('All');
    }
  }, [categoryParam]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];

  const filteredProducts = productsData.filter((product) => {
    if (activeCategory === 'All') return true;
    return product.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured/default
  });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 uppercase-spaced tracking-[0.2em]">{activeCategory === 'All' ? 'The Collection' : activeCategory}</h1>
          <p className="text-gray-400 font-serif italic text-lg">Finely crafted demi-fine jewelry for every mood and occasion.</p>
        </div>

        {/* Filters and Search Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-gray-100 py-6 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="flex items-center space-x-2">
             <span className="text-[10px] uppercase font-bold tracking-widest">{sortedProducts.length}</span>
             <span className="text-[10px] uppercase tracking-widest text-gray-400">Products Found</span>
          </div>

          <div className="flex items-center space-x-8">
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 pb-1",
                    activeCategory.toLowerCase() === cat.toLowerCase()
                      ? "border-[#C5A059] text-black"
                      : "border-transparent text-gray-400 hover:text-black"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
            >
              <Filter size={14} />
              <span>Filters</span>
            </button>

            {/* Sort */}
            <div className="flex items-center space-x-2 relative group">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Sort By:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-[10px] uppercase tracking-widest font-bold focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-serif italic text-gray-400 text-xl">No products found in this category.</p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="mt-8 uppercase tracking-[0.2em] text-[10px] font-bold border-b border-black pb-1"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-white transition-transform duration-500 md:hidden flex flex-col p-10",
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-16">
          <span className="font-serif text-2xl tracking-widest">Filters</span>
          <button onClick={() => setIsFilterOpen(false)}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex flex-col space-y-8">
           <h3 className="text-[10px] uppercase tracking-widest text-gray-400">Categories</h3>
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => handleCategoryChange(cat)}
               className={cn(
                 "text-2xl font-serif text-left",
                 activeCategory.toLowerCase() === cat.toLowerCase() ? "text-[#C5A059]" : "text-black"
               )}
             >
               {cat}
             </button>
           ))}
        </div>
        <div className="mt-auto">
           <button 
             onClick={() => setIsFilterOpen(false)}
             className="w-full bg-black text-white py-4 uppercase-spaced text-xs"
           >
             Show {sortedProducts.length} Results
           </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
