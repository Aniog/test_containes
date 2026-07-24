import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { SEED_PRODUCTS } from '../lib/data.js';
import { useCart } from '../components/cart/CartContext.jsx';
import { cn } from '../lib/utils.js';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const sortOption = searchParams.get('sort') || 'featured';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter]);

  const filteredProducts = SEED_PRODUCTS.filter(p => 
    categoryFilter === 'all' || p.category === categoryFilter
  ).sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    return 0; // default featured
  });

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
        <div>
          <h1 id="shop-title" className="text-5xl font-serif mb-4 capitalize">
            {categoryFilter === 'all' ? 'All Jewelry' : categoryFilter}
          </h1>
          <p className="uppercase-spaced text-[10px] font-bold opacity-50">{filteredProducts.length} Pieces</p>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 uppercase-spaced text-[10px] font-bold border border-border px-6 py-3 hover:bg-secondary transition-colors shrink-0"
          >
            <Filter className="w-3 h-3" /> Filter
          </button>
          
          <div className="relative group shrink-0">
            <button className="flex items-center gap-2 uppercase-spaced text-[10px] font-bold border border-border px-6 py-3 hover:bg-secondary transition-colors">
              Sort: {sortOption.replace('-', ' ')} <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40 p-2 flex flex-col gap-1">
              {['featured', 'price-low', 'price-high'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSearchParams({ category: categoryFilter, sort: opt })}
                  className={cn(
                    "w-full text-left px-4 py-2 uppercase-spaced text-[8px] font-bold hover:bg-secondary transition-colors",
                    sortOption === opt && "bg-secondary"
                  )}
                >
                  {opt.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12">
        {filteredProducts.map((product) => (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={product.id} 
            className="group flex flex-col gap-4"
          >
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-secondary overflow-hidden block border border-border/10">
              <img
                data-strk-img-id={`shop-thumb-${product.id}`}
                data-strk-img={`[shop-product-title-${product.id}] gold jewelry clean background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 transform translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 shadow-lg"
              >
                Add to Bag
              </button>
            </Link>
            <div className="text-center">
              <h3 id={`shop-product-title-${product.id}`} className="uppercase-spaced text-[10px] font-bold mb-1">{product.name}</h3>
              <p className="text-muted-foreground text-xs italic font-serif">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter Sidebar Overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[70] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-full max-w-sm bg-white z-[80] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-border flex justify-between items-center">
                <h2 className="text-xl font-serif uppercase tracking-widest">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="hover:rotate-90 transition-transform">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 flex flex-col gap-12">
                <div>
                  <h4 className="uppercase-spaced text-[10px] font-bold mb-6 opacity-40">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSearchParams({ category: cat, sort: sortOption });
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "px-6 py-2 border border-border uppercase-spaced text-[8px] font-bold hover:bg-secondary transition-colors",
                          categoryFilter === cat && "bg-primary text-white border-primary"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="uppercase-spaced text-[10px] font-bold mb-6 opacity-40">Material</h4>
                  <div className="flex flex-col gap-3">
                    {['18K Gold Plated', '925 Sterling Silver'].map((mat) => (
                      <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-border group-hover:border-primary transition-colors flex items-center justify-center">
                          {mat === '18K Gold Plated' && <div className="w-2 h-2 bg-primary" />}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="uppercase-spaced text-[10px] font-bold mb-6 opacity-40">Price Range</h4>
                  <div className="flex flex-col gap-3">
                    {['$30 - $50', '$50 - $100', 'Over $100'].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-border group-hover:border-primary transition-colors" />
                        <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto p-8 bg-secondary/30 flex gap-4 border-t border-border">
                <button 
                  onClick={() => {
                    setSearchParams({ category: 'all', sort: 'featured' });
                    setIsFilterOpen(false);
                  }}
                  className="flex-grow py-4 text-[10px] font-bold uppercase tracking-widest border border-primary hover:bg-white transition-colors"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-grow bg-primary text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;