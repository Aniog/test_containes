import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const [activeCategory, setActiveCategory] = useState(categoryFilter || 'All');

  const filteredProducts = products.filter(p =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
    setIsFilterOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 space-y-6 md:space-y-0">
          <div className="space-y-2">
            <h1 id="shop-title" className="text-4xl md:text-5xl font-light italic">The Collection</h1>
            <p id="shop-count" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Showing {filteredProducts.length} Results</p>
          </div>

          <div className="flex items-center space-x-8 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap",
                  activeCategory === cat ? "text-accent border-b border-accent pb-1" : "text-gray-400 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex space-x-4 mb-8">
           <button
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="flex-1 flex justify-between items-center bg-muted px-6 py-4 text-[10px] uppercase tracking-widest font-medium"
           >
             <span>Filters</span>
             <Filter className="w-4 h-4" />
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
             <p className="text-gray-400 font-light italic text-lg">No pieces found in this category.</p>
             <button
               onClick={() => handleCategoryChange('All')}
               className="mt-6 text-xs uppercase tracking-widest font-medium border-b border-foreground pb-1"
             >
               View All Jewelry
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
