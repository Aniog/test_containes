import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEED_PRODUCTS } from '@/lib/seed-data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...SEED_PRODUCTS];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [categoryFilter, sortBy]);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif text-center uppercase tracking-widest">
          {categoryFilter || 'All Jewelry'}
        </h1>
        <p className="text-sm text-muted-foreground text-center uppercase tracking-[0.2em]">
          {filteredProducts.length} Pieces
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 space-y-12 shrink-0">
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Category</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => setSearchParams({})}
                  className={cn(
                    "text-xs uppercase tracking-widest transition-colors",
                    !categoryFilter ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  All Jewelry
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSearchParams({ category: cat })}
                    className={cn(
                      "text-xs uppercase tracking-widest transition-colors",
                      categoryFilter === cat ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Sort By</h3>
            <div className="space-y-4">
               {['featured', 'price-low', 'price-high'].map(sort => (
                 <button 
                   key={sort}
                   onClick={() => setSortBy(sort)}
                   className={cn(
                     "block text-xs uppercase tracking-widest transition-colors",
                     sortBy === sort ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
                   )}
                 >
                   {sort === 'featured' ? 'Featured' : sort === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                 </button>
               ))}
            </div>
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between py-4 border-y border-border mb-8">
            <button 
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest"
            >
                <Filter className="w-4 h-4" /> Filters
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
                <span>{sortBy}</span>
                <ChevronDown className="w-3 h-3" />
            </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-secondary overflow-hidden mb-6 block">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-img-${product.id}`}
                    data-strk-img={`[shop-name-${product.id}] gold ${product.category}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-luxury lg:translate-y-full lg:group-hover:translate-y-0 bg-background/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                    <button 
                         onClick={(e) => {
                           e.preventDefault();
                           addToCart(product);
                         }}
                         className="w-full bg-accent text-white py-3 text-[10px] uppercase tracking-widest hover:bg-black transition-luxury shadow-lg lg:shadow-none"
                    >
                        Add to Cart
                    </button>
                  </div>
                </Link>
                <div className="space-y-2 text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 id={`shop-name-${product.id}`} className="text-xs font-serif uppercase tracking-[0.2em] leading-relaxed">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-light text-muted-foreground">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
               <p className="text-muted-foreground uppercase tracking-widest text-sm italic">No pieces found in this category.</p>
               <button 
                 onClick={() => setSearchParams({})}
                 className="mt-6 text-xs uppercase tracking-widest border-b border-accent pb-1"
               >
                 View All Jewelry
               </button>
            </div>
          )}
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
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[110] bg-background lg:hidden p-8 h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl tracking-widest uppercase">Filter & Sort</h2>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-8 h-8" /></button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-12">
                <section>
                    <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Category</h3>
                    <div className="flex flex-wrap gap-3">
                        {['All', ...categories].map(cat => (
                            <button 
                                key={cat}
                                onClick={() => {
                                    if (cat === 'All') setSearchParams({});
                                    else setSearchParams({ category: cat });
                                }}
                                className={cn(
                                    "px-6 py-2 text-[10px] uppercase tracking-widest border transition-luxury",
                                    (cat === 'All' && !categoryFilter) || (categoryFilter === cat) 
                                        ? "bg-accent text-white border-accent" 
                                        : "border-border text-muted-foreground hover:border-accent"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-xs uppercase tracking-widest font-medium mb-6">Sort By</h3>
                    <div className="flex flex-col gap-4">
                        {['featured', 'price-low', 'price-high'].map(sort => (
                            <button 
                                key={sort}
                                onClick={() => setSortBy(sort)}
                                className={cn(
                                    "text-left text-xs uppercase tracking-widest transition-colors py-2 border-b border-border",
                                    sortBy === sort ? "text-accent font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {sort === 'featured' ? 'Featured' : sort === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                            </button>
                        ))}
                    </div>
                </section>
              </div>

              <div className="pt-8 mt-auto">
                <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-accent text-white py-4 text-xs uppercase tracking-widest hover:bg-black transition-luxury"
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
