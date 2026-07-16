import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS } from '@/config';

const Shop = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('Featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, sortBy]);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  const filteredProducts = PRODUCTS
    .filter(p => category === 'All' || p.category === category)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest">Shop the Collection</h1>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{filteredProducts.length} Pieces</p>
        </div>

        <div className="flex justify-between items-center mb-12 py-4 border-y border-black/5">
          <div className="flex items-center space-x-8">
            <button 
              className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest text-primary font-medium"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${category === c ? 'text-primary font-bold border-b border-primary pb-0.5' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-medium">
              <span>Sort: {sortBy}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full pt-4 hidden group-hover:block z-20">
              <div className="bg-white border border-black/5 shadow-xl p-4 w-48 space-y-3">
                {sortOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`block w-full text-left text-[9px] uppercase tracking-widest hover:text-accent transition-colors ${sortBy === option ? 'text-accent' : 'text-muted-foreground'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 w-full bg-white z-[110] rounded-t-3xl p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm font-serif tracking-widest uppercase">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(c => (
                      <button
                        key={c}
                        onClick={() => { setCategory(c); setIsMobileFilterOpen(false); }}
                        className={`px-4 py-2 text-[9px] uppercase tracking-[0.2em] rounded-full border transition-colors ${category === c ? 'bg-primary text-white border-primary' : 'border-black/10 text-muted-foreground'}`}
                      >
                        {c}
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
