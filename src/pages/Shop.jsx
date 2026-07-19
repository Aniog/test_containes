import { useState, useMemo } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Sets'];
  const sorts = ['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    
    if (activeSort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [activeCategory, activeSort]);

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 id="shop-title" className="font-serif text-4xl lg:text-6xl mb-6 tracking-wide">The Collection</h1>
          <p id="shop-desc" className="text-velmora-taupe max-w-xl font-serif italic text-lg lg:text-xl">
            Ethically crafted, demi-fine jewelry designed for your everyday moments and cherished milestones.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 border-y border-velmora-charcoal/5 py-4 space-y-4 lg:space-y-0">
          {/* Categories Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'text-[10px] uppercase tracking-[0.2em] transition-all hover:text-velmora-gold',
                  activeCategory === cat ? 'text-velmora-gold font-bold' : 'text-velmora-charcoal'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widestest"
          >
            <Filter className="w-4 h-4" />
            <span>Filters ({activeCategory})</span>
          </button>

          {/* Sort */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widestest">
              <span>Sort: {activeSort}</span>
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 border border-velmora-charcoal/5 py-2">
              {sorts.map((sort) => (
                <button
                  key={sort}
                  onClick={() => setActiveSort(sort)}
                  className={cn(
                    'w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-velmora-cream transition-colors',
                    activeSort === sort ? 'bg-velmora-cream text-velmora-gold' : 'text-velmora-charcoal'
                  )}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center flex flex-col items-center">
            <p className="font-serif italic text-2xl text-velmora-taupe mb-8">
              We couldn't find any pieces in this category.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs uppercase tracking-widest border-b border-velmora-charcoal pb-1"
            >
              View All Jewelry
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Filter (Slide-up) */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[70] lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[71] p-8 lg:hidden rounded-t-[2rem]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="serif-heading font-bold">Categories</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      'text-left text-lg uppercase tracking-widest pb-2 border-b border-velmora-charcoal/5',
                      activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-charcoal'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
