import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ShopPage = () => {
  const { category } = useParams();
  const containerRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, sortBy]);

  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : PRODUCTS;

  const products = [...filteredProducts];
  if (sortBy === 'Price: Low to High') products.sort((a,b) => a.price - b.price);
  if (sortBy === 'Price: High to Low') products.sort((a,b) => b.price - a.price);

  return (
    <div ref={containerRef} className="pt-40 pb-32 min-h-screen bg-background">
      <header className="px-6 md:px-12 mb-28 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70 mb-4">The Collection</p>
          <h1 className="text-5xl md:text-8xl font-serif uppercase tracking-[0.05em] leading-tight">
            {category ? category : 'All Objects'}
          </h1>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="max-w-xl mx-auto space-y-6"
        >
          <p className="text-sm text-muted-foreground font-light leading-relaxed italic font-serif">
             Thoughtful adornments for purposeful living. Discover pieces that bridge the gap between contemporary design and timeless elegance.
          </p>
          <div className="flex justify-center gap-8">
             <Link to="/collections/earrings" className={category === 'earrings' ? 'font-bold underline underline-offset-4' : 'opacity-60 hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest'}>Earrings</Link>
             <Link to="/collections/necklaces" className={category === 'necklaces' ? 'font-bold underline underline-offset-4' : 'opacity-60 hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest'}>Necklaces</Link>
             <Link to="/collections/huggies" className={category === 'huggies' ? 'font-bold underline underline-offset-4' : 'opacity-60 hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest'}>Huggies</Link>
          </div>
        </motion.div>
      </header>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="flex justify-between items-center border-y border-muted/60 py-10 mb-20 px-4">
           <button 
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-all group"
           >
             <SlidersHorizontal size={14} strokeWidth={1.5} className="group-hover:rotate-180 transition-transform duration-500" />
             Filter & Refine
           </button>
           
           <div className="flex items-center gap-12">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50 hidden md:block">
                Showing {products.length} Results
              </span>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest cursor-pointer group hover:opacity-60 transition-opacity">
                 Order By: <span className="text-primary font-bold italic font-serif lowercase first-letter:uppercase">{sortBy}</span>
                 <ChevronDown size={12} strokeWidth={2} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
           </div>
        </div>

        {/* Filter Sidebar Placeholder */}
        <AnimatePresence>
            {isFilterOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-20 border-b border-muted bg-neutral-50"
                >
                    <div className="p-16 grid grid-cols-1 md:grid-cols-4 gap-16">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-muted/50 pb-5">Materials</h4>
                            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> 18K Gold Plated
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Sterling Silver
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Fresh Water Pearls
                                </label>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-muted/50 pb-5">Price Point</h4>
                            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Under $50
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> $50 — $100
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Over $100
                                </label>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-muted/50 pb-5">GIFTING</h4>
                            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Gift Sets
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer hover:text-foreground">
                                    <input type="checkbox" className="accent-primary" /> Engravable
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end space-y-6">
                            <button 
                                onClick={() => setIsFilterOpen(false)}
                                className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:text-primary transition-colors"
                            >
                                <X size={14} /> Clear All Filters
                            </button>
                            <button className="bg-foreground text-background text-[10px] font-bold uppercase tracking-[0.2em] py-4 px-8 hover:bg-foreground/90 transition-colors">
                                Apply Refinement
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-32">
            {products.map((product, idx) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                >
                    <ProductCard product={product} />
                </motion.div>
            ))}
        </div>
        
        {products.length === 0 && (
          <div className="py-48 text-center space-y-12">
            <p className="font-serif italic text-4xl opacity-20">Currently, our vaults are resting.</p>
            <Link to="/shop" className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-foreground pb-2 hover:opacity-60 transition-all">Explore All Pieces</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
