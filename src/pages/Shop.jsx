import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '../lib/data';
import ProductCard from '../components/product/ProductCard';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (sortFilter === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, sortFilter]);

  const toggleCategory = (cat) => {
    setSearchParams({ category: cat, sort: sortFilter });
  };

  const toggleSort = (sort) => {
    setSearchParams({ category: categoryFilter, sort });
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Collections</span>
          <h1 className="text-5xl md:text-7xl font-serif">
            {categoryFilter === 'All' ? 'The Full Collection' : categoryFilter}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-y border-hairline border-accent/20 py-6 mb-12 font-sans text-xs uppercase tracking-widest">
          <div className="hidden md:flex items-center space-x-8">
             {categories.map(cat => (
               <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`hover:text-accent transition-colors ${categoryFilter === cat ? 'text-accent border-b border-accent pb-1' : 'text-muted-foreground'}`}
               >
                 {cat}
               </button>
             ))}
          </div>
          
          <button 
            className="md:hidden flex items-center space-x-2 text-foreground"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={16} strokeWidth={1.5} />
            <span>Filter</span>
          </button>

          <div className="mt-4 md:mt-0 relative group">
            <div className="flex items-center space-x-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
              <span>Sort: {sortOptions.find(o => o.value === sortFilter)?.label}</span>
              <ChevronDown size={14} />
            </div>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <div className="bg-background border border-hairline border-accent/20 w-48 shadow-xl">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => toggleSort(opt.value)}
                    className="w-full text-left px-4 py-3 hover:bg-secondary text-[10px] tracking-widest uppercase transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-muted-foreground">No pieces found in this category.</p>
            <button 
              onClick={() => toggleCategory('All')}
              className="mt-6 text-xs uppercase tracking-widest text-accent border-b border-accent"
            >
              Back to Collection
            </button>
          </div>
        )}
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
              className="fixed inset-0 bg-black/40 z-[80] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed inset-y-0 left-0 w-[80%] bg-background z-[90] p-8 md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="font-serif text-2xl uppercase tracking-tight">Filter</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-accent mb-6 font-sans">Category</h4>
                  <div className="flex flex-col space-y-4">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { toggleCategory(cat); setIsFilterOpen(false); }}
                        className={`text-left text-lg font-serif tracking-tight ${categoryFilter === cat ? 'text-accent' : 'text-muted-foreground'}`}
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
