import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/common/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.reverse();
    }

    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    setSearchParams({ category: cat, sort: sortBy });
  };

  const handleSortChange = (sort) => {
    setSearchParams({ category: activeCategory, sort: sort });
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      {/* Header */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A1A1A]/40">
           <span>Shop</span>
           <span>/</span>
           <span className="text-[#1A1A1A] font-bold">{activeCategory}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
          {activeCategory === 'All' ? 'Our Jewelry Collection' : activeCategory}
        </h1>
        <p className="text-sm text-[#1A1A1A]/60 max-w-2xl leading-relaxed">
          Discover our curated collection of demi-fine jewelry. Each piece is crafted with thick 18K gold layers over sterling silver or brass, designed to be worn and treasured every day.
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between border-y border-[#E5E5E5] py-6 mb-12 sticky top-[80px] bg-white z-30">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-bold hover:text-gold transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[10px] uppercase tracking-widest transition-colors ${activeCategory === cat ? 'font-bold text-gold border-b border-gold' : 'text-[#1A1A1A]/60 hover:text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-bold group">
              Sort By
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#E5E5E5] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
              {[
                { label: 'Featured', value: 'featured' },
                { label: 'Newest', value: 'newest' },
                { label: 'Price: Low to High', value: 'price-low' },
                { label: 'Price: High to Low', value: 'price-high' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSortChange(opt.value)}
                  className={`w-full text-left px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#F4F1ED] transition-colors ${sortBy === opt.value ? 'bg-[#F4F1ED] font-bold' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <p className="font-serif text-xl italic opacity-40">No pieces found in this category.</p>
            <Button variant="outline" className="mt-8" onClick={() => handleCategoryChange('All')}>
              VIEW ALL JEWELRY
            </Button>
          </div>
        )}
      </div>

      {/* Filter Sidebar Drawer (Mobile & Quick) */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-[110] shadow-2xl p-10 flex flex-col gap-12"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-2xl tracking-widest uppercase">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 border-b border-[#E5E5E5] pb-2">Category</h3>
                  <div className="flex flex-col gap-3">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                        className={`text-sm text-left uppercase tracking-widest transition-colors ${activeCategory === cat ? 'text-gold font-bold' : 'text-[#1A1A1A]/60'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 border-b border-[#E5E5E5] pb-2">Price Range</h3>
                   <div className="flex flex-col gap-3">
                      <label className="flex items-center gap-3 text-sm text-[#1A1A1A]/80 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-gold" />
                        Under $50
                      </label>
                      <label className="flex items-center gap-3 text-sm text-[#1A1A1A]/80 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-gold" />
                        $50 - $100
                      </label>
                      <label className="flex items-center gap-3 text-sm text-[#1A1A1A]/80 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-gold" />
                        Over $100
                      </label>
                   </div>
                </div>

                <div>
                   <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 border-b border-[#E5E5E5] pb-2">Material</h3>
                   <div className="flex flex-col gap-3">
                      {['18K Gold Plated', '925 Sterling Silver', 'Rose Gold'].map(mat => (
                         <label key={mat} className="flex items-center gap-3 text-sm text-[#1A1A1A]/80 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-gold" />
                            {mat}
                         </label>
                      ))}
                   </div>
                </div>
              </div>

              <div className="mt-auto">
                 <Button className="w-full" onClick={() => setIsFilterOpen(false)}>APPLY FILTERS</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
