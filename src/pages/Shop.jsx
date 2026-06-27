import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(120);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = products.filter(p => {
    const matchCat = activeCategory === 'all' || p.category.toLowerCase() === activeCategory;
    const matchPrice = p.price <= priceRange;
    return matchCat && matchPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-16">
           <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">Explore the Collections</h1>
           <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-black/5">
              <div className="flex flex-wrap gap-8 items-center">
                 {categories.map(cat => (
                   <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-sans text-[10px] uppercase tracking-[0.3em] pb-1 transition-all border-b-2 ${
                      activeCategory === cat ? 'border-gold text-carbon font-bold' : 'border-transparent text-black/40 hover:text-black'
                    }`}
                   >
                     {cat}
                   </button>
                 ))}
              </div>
              
              <div className="flex items-center gap-10">
                 <div className="flex items-center gap-2 group cursor-pointer relative">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-black/40 group-hover:text-black">Sort By:</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="font-sans text-[10px] uppercase tracking-widest outline-none bg-transparent appearance-none pr-4"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
                 </div>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar Filters */}
          <aside className="space-y-12">
             <div>
                <h4 className="font-serif text-lg tracking-wider mb-6 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-sans uppercase tracking-widest text-black/40">
                      <span>Max Price</span>
                      <span className="text-carbon font-medium">${priceRange}</span>
                   </div>
                   <input 
                     type="range"
                     min="30"
                     max="120"
                     step="1"
                     value={priceRange}
                     onChange={(e) => setPriceRange(Number(e.target.value))}
                     className="w-full accent-gold bg-muted h-[2px] cursor-pointer"
                   />
                </div>
             </div>

             <div className="pt-8 border-t border-black/5">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] mb-6 text-black/40">Material</h4>
                <div className="space-y-3">
                   {['18K Gold Plated', '925 Sterling Silver', 'Vermeil'].map(m => (
                     <label key={m} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-black/10 rounded-sm group-hover:border-gold transition-colors flex items-center justify-center">
                           {/* Custom checkbox visual */}
                        </div>
                        <span className="font-sans text-xs tracking-widest text-black/60 group-hover:text-black transition-colors">{m}</span>
                     </label>
                   ))}
                </div>
             </div>
          </aside>

          {/* Grid */}
          <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
             </div>
             
             {filteredProducts.length === 0 && (
               <div className="py-32 text-center opacity-30">
                  <p className="font-serif text-2xl italic">No pieces found matching your criteria.</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
