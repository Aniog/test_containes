import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(categoryParam || 'all');
  }, [categoryParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'sets'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">All Jewelry</h1>
          <p className="text-gray-500 uppercase tracking-widest text-[10px]">Explore our collection of demi-fine treasures</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-gray-100 py-6 mb-12 gap-6">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest whitespace-nowrap ${activeCategory === cat ? 'border-b border-black pb-1 font-medium' : 'text-gray-400 hover:text-black transition-colors'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs uppercase tracking-widest">
                <span>Sort by: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['newest', 'price-low', 'price-high'].map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
                  >
                    {option.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <button
               onClick={() => setIsFilterOpen(true)}
               className="flex md:hidden items-center space-x-2 text-xs uppercase tracking-widest"
            >
              <Filter size={14} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif italic text-gray-400">No pieces found in this collection.</p>
          </div>
        )}
      </div>

      {/* Mobile Filter Sidebar placeholder */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 animate-in slide-in-from-right duration-500">
           <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-serif uppercase tracking-widest">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24}/></button>
           </div>
           {/* Mobile filters would go here */}
           <div className="py-12 text-center text-gray-400 italic font-serif">
              Filters coming soon in preview.
           </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
EOF > /workspace/my-app/src/pages/Shop.jsx
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(categoryParam || 'all');
  }, [categoryParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'sets'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">All Jewelry</h1>
          <p className="text-gray-500 uppercase tracking-widest text-[10px]">Explore our collection of demi-fine treasures</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-gray-100 py-6 mb-12 gap-6">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest whitespace-nowrap ${activeCategory === cat ? 'border-b border-black pb-1 font-medium' : 'text-gray-400 hover:text-black transition-colors'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs uppercase tracking-widest">
                <span>Sort by: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['newest', 'price-low', 'price-high'].map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
                  >
                    {option.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <button
               onClick={() => setIsFilterOpen(true)}
               className="flex md:hidden items-center space-x-2 text-xs uppercase tracking-widest"
            >
              <Filter size={14} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif italic text-gray-400">No pieces found in this collection.</p>
          </div>
        )}
      </div>

      {/* Mobile Filter Sidebar placeholder */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 animate-in slide-in-from-right duration-500">
           <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-serif uppercase tracking-widest">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24}/></button>
           </div>
           {/* Mobile filters would go here */}
           <div className="py-12 text-center text-gray-400 italic font-serif">
              Filters coming soon in preview.
           </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
