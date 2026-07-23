import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, sortBy]);

  // Trigger image reload when products change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Find the parent element that contains all products
      const pGrid = document.getElementById('product-grid-container');
      if (pGrid) {
        ImageHelper.loadImages(strkImgConfig, pGrid);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Collections</span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">
            {activeCategory === 'All' ? 'Every Fine Detail' : activeCategory}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-6 gap-6">
            <div className="flex gap-4 overflow-x-auto no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={cn(
                    "text-[10px] uppercase tracking-widest px-6 py-2 border transition-all duration-300 whitespace-nowrap",
                    activeCategory === cat 
                      ? "bg-charcoal text-white border-charcoal" 
                      : "bg-transparent text-muted-foreground border-border hover:border-charcoal hover:text-charcoal"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto justify-between">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                <span className="text-muted-foreground">Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent outline-none cursor-pointer focus:text-velmora-gold"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {filteredProducts.length} Products
              </p>
            </div>
          </div>
        </header>

        <div id="product-grid-container" className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 min-h-[400px]">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <p className="font-serif italic text-xl text-muted-foreground">No pieces found in this collection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
