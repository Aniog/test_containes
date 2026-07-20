import React, { useState, useMemo } from 'react';
import { products, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-20 max-w-[1600px] mx-auto fade-in">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-velmora-taupe/10 pb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Shop All</h1>
            <p className="text-sm text-velmora-charcoal/60 uppercase tracking-widest">{filteredProducts.length} Pieces found</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                Sort: {sortBy} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-velmora-warm border border-velmora-taupe/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['Featured', 'Price: Low to High', 'Price: High to Low'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => setSortBy(opt)}
                    className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-velmora-cream transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filter */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Category</h3>
              <div className="flex flex-col gap-4">
                {['All', ...CATEGORIES].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm tracking-wide text-left transition-colors ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal/60 hover:text-velmora-charcoal'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Material</h3>
              <div className="flex flex-col gap-4">
                {['18K Gold Plated', 'Gold Vermeil', 'Sterling Silver'].map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-velmora-taupe/30 rounded-none group-hover:border-velmora-gold" />
                    <span className="text-sm text-velmora-charcoal/60 group-hover:text-velmora-charcoal tracking-wide">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Price</h3>
              <div className="flex flex-col gap-4">
                {['$0 - $50', '$50 - $100', '$100+'].map(p => (
                  <label key={p} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-velmora-taupe/30 rounded-none" />
                    <span className="text-sm text-velmora-charcoal/60 tracking-wide">{p}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 border border-velmora-charcoal py-4 text-xs uppercase tracking-widest font-bold"
          >
            <Filter size={16} /> Filters
          </button>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <p className="font-serif text-2xl italic">No products found for this selection.</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="text-xs uppercase tracking-widest font-bold border-b border-velmora-charcoal pb-1"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[102]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 w-full bg-velmora-warm z-[103] p-10 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-serif">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6">Category</h3>
                  <div className="flex flex-col gap-4">
                    {['All', ...CATEGORIES].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                        className={`text-sm tracking-wide text-left ${activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-charcoal/60'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6">Sort By</h3>
                  <div className="flex flex-col gap-4">
                    {['Featured', 'Price: Low to High', 'Price: High to Low'].map(opt => (
                      <button 
                        key={opt}
                        onClick={() => { setSortBy(opt); setIsFilterOpen(false); }}
                        className={`text-sm tracking-wide text-left ${sortBy === opt ? 'text-velmora-gold' : 'text-velmora-charcoal/60'}`}
                      >
                        {opt}
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
