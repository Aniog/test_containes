import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products as allProducts } from '@/lib/data';
import { useCart } from '@/hooks/useCart';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [activeSort, setActiveSort] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Collections'];
  const sorts = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  const filteredProducts = allProducts.filter(p => 
    activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === 'Price: Low to High') return a.price - b.price;
    if (activeSort === 'Price: High to Low') return b.price - a.price;
    return 0; // Featured/Default
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeSort]);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[10px] uppercase tracking-widestest text-brand-gold">Curated Collections</p>
          <h1 id="shop-title" className="text-5xl md:text-6xl font-serif">Shop All Jewelry</h1>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-y mb-12 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <button 
                className="flex items-center text-[10px] uppercase tracking-widestest gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={14} /> Filter
            </button>
            <div className="hidden md:flex items-center space-x-6">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[9px] uppercase tracking-widestest transition-colors ${activeCategory === cat ? 'text-brand-gold font-bold' : 'text-gray-400 hover:text-brand-charcoal'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widestest text-gray-400">Sort By:</span>
            <select 
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="bg-transparent text-[10px] uppercase tracking-widestest outline-none cursor-pointer"
            >
                {sorts.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-sand aspect-[3/4]">
                <img
                  data-strk-img-id={`shop-${product.imgId}`}
                  data-strk-img={`[prod-name-${product.id}] [shop-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5" />
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/30 backdrop-blur-md">
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full bg-brand-charcoal text-white py-3 text-[9px] uppercase tracking-widestest hover:bg-brand-gold transition-colors"
                    >
                        Add to Bag
                    </button>
                </div>
              </Link>
              <div className="mt-6">
                <h3 id={`prod-name-${product.id}`} className="text-[11px] font-medium uppercase tracking-widestest mb-1 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm italic font-serif">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
            <div className="py-24 text-center space-y-6">
                <p className="font-serif italic text-2xl text-gray-500">No products found in this category.</p>
                <button 
                    onClick={() => setActiveCategory('All')}
                    className="px-8 py-3 bg-brand-charcoal text-white text-[10px] uppercase tracking-widestest"
                >
                    Clear Filters
                </button>
            </div>
        )}
      </div>

      {/* Filter Sidebar Overlay (Simplified for MVP) */}
      {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
              <div className="absolute inset-0 bg-black/20" onClick={() => setIsFilterOpen(false)} />
              <div className="relative w-full max-w-xs bg-white h-full p-8 shadow-2xl animate-slide-left">
                  <div className="flex justify-between items-center mb-12">
                      <h2 className="text-xl font-serif uppercase tracking-widest">Filter</h2>
                      <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
                  </div>
                  
                  <div className="space-y-10">
                      <div>
                          <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-6">Category</h4>
                          <div className="space-y-4">
                              {categories.map(cat => (
                                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                                      <input 
                                        type="radio" 
                                        name="cat" 
                                        checked={activeCategory === cat}
                                        onChange={() => setActiveCategory(cat)}
                                        className="sr-only" 
                                      />
                                      <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${activeCategory === cat ? 'border-brand-gold' : 'border-gray-200'}`}>
                                          {activeCategory === cat && <div className="w-2 h-2 bg-brand-gold" />}
                                      </div>
                                      <span className={`text-[10px] uppercase tracking-widestest ${activeCategory === cat ? 'text-brand-gold' : 'text-gray-500 group-hover:text-brand-charcoal'}`}>{cat}</span>
                                  </label>
                              ))}
                          </div>
                      </div>

                      <div>
                          <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-6">Price Range</h4>
                          <div className="space-y-4 text-[10px] uppercase tracking-widestest text-gray-500">
                              <p className="cursor-pointer hover:text-brand-gold">Under $50</p>
                              <p className="cursor-pointer hover:text-brand-gold">$50 - $100</p>
                              <p className="cursor-pointer hover:text-brand-gold">Over $100</p>
                          </div>
                      </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                       <button 
                        onClick={() => setIsFilterOpen(false)}
                        className="w-full bg-brand-charcoal text-white py-4 text-[10px] uppercase tracking-widestest"
                       >
                           Apply Filters
                       </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Shop;
