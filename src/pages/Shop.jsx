import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(categoryParam || 'all');
    window.scrollTo(0, 0);
  }, [categoryParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (val) => {
    if (val === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      {/* Category Header */}
      <section className="px-6 mb-16 max-w-7xl mx-auto">
        <div className="relative h-64 md:h-80 bg-muted flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-60"
            data-strk-bg-id="shop-header-bg"
            data-strk-bg={`luxury ${activeCategory} jewelry gold editorial display`}
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
            style={{ 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
              {activeCategory === 'all' ? 'The Collection' : activeCategory}
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] font-light">Explore our timeless pieces</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden flex items-center justify-between border border-border px-6 py-4 uppercase tracking-widest text-[10px]"
        >
          <span>Filters</span>
          <Filter className="w-4 h-4" />
        </button>

        {/* Sidebar */}
        <div className={cn(
          "fixed inset-0 z-[100] bg-background md:relative md:z-0 md:inset-auto md:w-64 md:block transition-all duration-500",
          isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        )}>
          <div className="md:hidden p-8 flex justify-between items-center border-b border-border/20">
            <span className="font-serif text-xl tracking-widest uppercase">Filter By</span>
            <button onClick={() => setIsSidebarOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          
          <div className="p-8 md:p-0 flex flex-col gap-12 sticky top-32">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Category</h4>
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => handleCategoryChange('all')}
                  className={cn(
                    "w-full text-left text-xs uppercase tracking-widest transition-colors",
                    activeCategory === 'all' ? "text-primary font-bold" : "text-muted-foreground hover:text-black"
                  )}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={cn(
                      "w-full text-left text-xs uppercase tracking-widest transition-colors",
                      activeCategory === cat.value ? "text-primary font-bold" : "text-muted-foreground hover:text-black"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Material</h4>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-black">
                  <input type="checkbox" className="w-4 h-4 rounded-none bg-muted border-border appearance-none checked:bg-black" />
                  Gold Plated
                </label>
                <label className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-black">
                  <input type="checkbox" className="w-4 h-4 rounded-none bg-muted border-border appearance-none checked:bg-black" />
                  Sterling Silver
                </label>
              </div>
            </div>

            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden mt-8 w-full bg-black text-white py-4 text-[10px] uppercase tracking-widest"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-12">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground italic">Showing {filteredProducts.length} items</p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest cursor-pointer">
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
