import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [sortOrder, setSortOrder] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryFilter);
    }
    
    if (sortOrder === 'price-low') result.sort((a,b) => a.price - b.price);
    if (sortOrder === 'price-high') result.sort((a,b) => b.price - a.price);
    
    return result;
  }, [categoryFilter, sortOrder]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight uppercase tracking-tight">
            {categoryFilter === 'all' ? 'Shop All' : categoryFilter}
          </h1>
          <p className="text-muted-foreground font-sans text-sm tracking-widest uppercase">
            {filteredProducts.length} Results
          </p>
        </div>

        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-6 border-t md:border-none pt-6 md:pt-0">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] hover:opacity-60"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filter
          </button>
          
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-muted-foreground">Sort:</span>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent font-sans text-xs uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Filter Sidebar */}
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
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-background z-[101] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl uppercase tracking-widest">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] mb-6 text-muted-foreground">Category</h3>
                  <div className="flex flex-col gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSearchParams({ category: cat });
                          setIsFilterOpen(false);
                        }}
                        className={`text-left text-sm font-sans uppercase tracking-[0.2em] hover:opacity-60 transition-opacity ${categoryFilter === cat ? 'border-b w-fit border-primary' : ''}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] mb-6 text-muted-foreground">Material</h3>
                  <div className="flex flex-col gap-4 text-sm font-sans uppercase tracking-[0.2em] opacity-40 cursor-not-allowed">
                    <span>18K Gold Plated</span>
                    <span>Sterling Silver</span>
                    <span>Cubic Zirconia</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => {
                    setSearchParams({});
                    setIsFilterOpen(false);
                  }}
                  className="w-full border py-4 text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-secondary transition-colors"
                >
                  Clear All
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
