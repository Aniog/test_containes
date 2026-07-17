import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { ChevronDown, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1));
  const [sortBy, setSortBy] = useState('Featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  const filteredProducts = SEED_PRODUCTS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0; // Featured
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-serif italic">The Collection</h1>
        <div className="w-12 h-[1px] bg-velmora-accent" />
        <p className="text-velmora-muted uppercase tracking-[0.2em] text-[10px]">Elegance meticulously crafted for every occasion</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between py-6 border-y border-velmora-surface mb-12">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold md:hidden"
        >
          <Filter size={16} /> Filters
        </button>

        {/* Desktop Categories */}
        <div className="hidden md:flex items-center gap-8">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={p => `uppercase tracking-widest text-[10px] font-bold transition-all border-b pb-1 ${
                activeCategory === cat ? 'border-velmora-accent text-velmora-accent' : 'border-transparent text-velmora-muted hover:text-velmora-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="relative group cursor-pointer">
           <div className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold">
              Sort By: <span className="text-velmora-accent">{sortBy}</span>
              <ChevronDown size={14} />
           </div>
           
           <div className="absolute right-0 top-full mt-2 w-48 bg-velmora-base border border-velmora-surface shadow-xl z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
                <button 
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-velmora-surface transition-colors"
                >
                  {option}
                </button>
              ))}
           </div>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Static Sidebar Desktop */}
        <aside className="hidden md:block w-64 space-y-12">
          <div className="space-y-6">
            <h4 className="uppercase tracking-[0.2em] text-[10px] font-bold border-b border-velmora-surface pb-4">Style</h4>
            <div className="space-y-3">
              {['Minimalist', 'Statement', 'Celestial', 'Classic'].map(style => (
                <label key={style} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-velmora-surface rounded-sm group-hover:border-velmora-accent transition-colors" />
                  <span className="text-sm font-light text-velmora-muted group-hover:text-velmora-primary transition-colors">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="uppercase tracking-[0.2em] text-[10px] font-bold border-b border-velmora-surface pb-4">Material</h4>
            <div className="space-y-3">
              {['18K Gold Vermeil', 'Sterling Silver', 'Rose Gold'].map(mat => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-velmora-surface rounded-sm group-hover:border-velmora-accent transition-colors" />
                  <span className="text-sm font-light text-velmora-muted group-hover:text-velmora-primary transition-colors">{mat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
             {filteredProducts.map((product, idx) => (
                <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="group"
                >
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-velmora-surface mb-6">
                         <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            data-strk-bg={`luxury gold jewelry ${product.name} lifestyle`}
                            data-strk-bg-id={`shop-${product.id}-img`}
                            data-strk-bg-ratio="3x4"
                            data-strk-bg-width="600"
                        />
                         {/* Quick Add overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="w-full bg-white text-velmora-primary py-3 text-center uppercase tracking-widest text-[10px] font-bold shadow-lg">
                                Quick View
                            </span>
                        </div>
                    </Link>
                    <div className="space-y-1">
                        <p className="text-[10px] text-velmora-muted uppercase tracking-widest">{product.category}</p>
                        <h3 className="font-serif uppercase tracking-widest text-xs group-hover:text-velmora-accent transition-colors">
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="text-sm">{formatPrice(product.price)}</p>
                    </div>
                </motion.div>
             ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
                 <p className="font-serif italic text-xl text-velmora-muted">No products found for this selection.</p>
                 <button onClick={() => setActiveCategory('All')} className="mt-6 text-[10px] uppercase-spacing font-bold border-b border-velmora-primary pb-1">Show All Products</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
            <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
                />
                <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    className="fixed inset-y-0 left-0 w-[80%] bg-velmora-base z-[90] p-10 flex flex-col"
                >
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl font-serif">Filters</h2>
                        <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
                    </div>
                    
                    <div className="space-y-10 overflow-y-auto flex-1">
                         <div className="space-y-4">
                            <p className="uppercase tracking-widest text-[10px] font-bold text-velmora-accent">Category</p>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => { setActiveCategory(cat); setIsSidebarOpen(false); }}
                                        className={`px-4 py-2 border text-[10px] uppercase tracking-widest ${activeCategory === cat ? 'bg-velmora-primary text-white border-velmora-primary' : 'border-velmora-surface text-velmora-muted'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                         </div>
                    </div>
                </motion.div>
            </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
