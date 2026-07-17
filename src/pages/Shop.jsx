import React, { useState, useEffect, useRef } from 'react';
import { products, useStore } from '@/lib/store';
import { Search, Filter, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useStore();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-velmora-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-velmora-stone pb-12">
          <div>
            <h1 className="text-5xl font-serif mb-4">Shop the Collection</h1>
            <p className="text-sm font-light text-velmora-charcoal/60 uppercase tracking-widest italic font-serif">
              Timeless pieces for the modern woman.
            </p>
          </div>
          
          <div className="flex gap-8 items-center w-full md:w-auto">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
            <div className="relative group flex-1 md:w-64">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent border-none appearance-none font-sans text-xs uppercase tracking-widest font-bold focus:outline-none cursor-pointer pr-8"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-40" />
            </div>
          </div>
        </div>

        <div className="flex gap-16">
          {/* Sidebar / Desktop Filter */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Category</h3>
              <ul className="flex flex-col gap-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "text-sm font-light transition-colors hover:text-velmora-gold",
                        selectedCategory === cat ? "text-velmora-gold font-medium" : "text-velmora-charcoal/60"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Price Range</h3>
              <ul className="flex flex-col gap-4 text-sm font-light text-velmora-charcoal/60">
                <li className="hover:text-velmora-gold cursor-pointer italic font-serif">Under $50</li>
                <li className="hover:text-velmora-gold cursor-pointer italic font-serif">$50 to $100</li>
                <li className="hover:text-velmora-gold cursor-pointer italic font-serif">Over $100</li>
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-velmora-stone overflow-hidden mb-6 rounded-sm">
                      <img
                        data-strk-img-id={`shop-m-${product.imgId}`}
                        data-strk-img={`[${product.titleId}-sh] jewelry editorial close-up`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      />
                      <button 
                         onClick={(e) => {
                           e.preventDefault();
                           addToCart(product);
                           toast.success(`Added ${product.name} to cart`);
                         }}
                         className="absolute bottom-6 left-6 right-6 py-4 bg-white/95 backdrop-blur-sm text-velmora-onyx text-[10px] uppercase tracking-widest font-bold border border-velmora-stone opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                      >
                        Quick Add
                      </button>
                    </div>
                    <h3 id={`${product.titleId}-sh`} className="text-xs uppercase tracking-widest font-serif mb-1 group-hover:text-velmora-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-light text-velmora-charcoal/60">${product.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/20 z-[100] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-xs bg-velmora-ivory z-[101] p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-lg font-serif">Filter</h2>
                <button onClick={() => setIsSidebarOpen(false)}><X className="w-5 h-5"/></button>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Category</h3>
                <ul className="flex flex-col gap-6">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsSidebarOpen(false);
                        }}
                        className={cn(
                          "text-sm uppercase tracking-widest transition-colors",
                          selectedCategory === cat ? "text-velmora-gold font-bold" : "text-velmora-charcoal/60"
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
