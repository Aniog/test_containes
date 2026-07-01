import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { ChevronDown, Filter, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter]);

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12">
      {/* Page Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest-extra italic">{categoryFilter || 'Shop All'}</h1>
        <p className="text-sm text-muted-foreground uppercase tracking-widest max-w-lg mx-auto leading-loose opacity-70 font-light">
          Elevate your daily ritual with pieces designed to last. Hand-finished details, 18K gold plating, and timeless silhouettes.
        </p>
      </div>

      {/* Filters & Sorting */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 py-6 border-y border-border gap-6">
        <div className="flex items-center space-x-8 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => cat === 'All' ? setSearchParams({}) : setSearchParams({ category: cat.toLowerCase() })}
              className={`text-[10px] uppercase tracking-widest-extra whitespace-nowrap transition-colors duration-300 ${
                (cat === 'All' && !categoryFilter) || (cat.toLowerCase() === categoryFilter)
                  ? 'text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-1'
                  : 'text-muted-foreground hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest-extra font-medium">
          <button className="flex items-center gap-2 hover:opacity-60 transition-opacity">
            Sort <ChevronDown size={14} />
          </button>
          <button 
            className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            onClick={() => setIsFilterOpen(true)}
          >
            Filter <Filter size={14} />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-[#F0F0F0]">
              <img 
                data-strk-img-id={`shop-thumb-${product.id}`}
                data-strk-img={`[shop-title-${product.id}] [shop-cat-${product.id}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <button className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm text-[#1A1A1A] py-4 text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-semibold shadow-xl">
                Add to Cart — ${product.price}
              </button>
            </div>
            <div className="text-center px-4">
              <span id={`shop-cat-${product.id}`} className="text-[10px] uppercase tracking-widest-extra opacity-40 mb-3 block">{product.category}</span>
              <h3 id={`shop-title-${product.id}`} className="text-sm uppercase tracking-[0.2em] font-serif mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
              <p className="text-xs font-light text-muted-foreground">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Filter Sidebar Overlay (Mock) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full p-12 overflow-y-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl font-serif uppercase tracking-widest">Filter</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>
            {/* Filter sections */}
            <div className="space-y-12">
               <div>
                  <h4 className="text-[10px] uppercase tracking-widest-extra mb-6 font-bold">Category</h4>
                  {categories.slice(1).map(cat => (
                    <div key={cat} className="flex items-center space-x-3 py-2 cursor-pointer group">
                       <div className="w-4 h-4 border border-border group-hover:border-accent" />
                       <span className="text-sm tracking-widest uppercase opacity-70">{cat}</span>
                    </div>
                  ))}
               </div>
               <div>
                  <h4 className="text-[10px] uppercase tracking-widest-extra mb-6 font-bold">Price Range</h4>
                  {['Under $50', '$50 - $100', 'Over $100'].map(range => (
                    <div key={range} className="flex items-center space-x-3 py-2 cursor-pointer group">
                       <div className="w-4 h-4 border border-border group-hover:border-accent" />
                       <span className="text-sm tracking-widest uppercase opacity-70">{range}</span>
                    </div>
                  ))}
               </div>
            </div>
            <button 
              className="w-full bg-[#1A1A1A] text-white py-5 text-xs uppercase tracking-widest font-semibold mt-20 hover:bg-accent transition-colors"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
