import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  const filteredProducts = products.filter(p =>
    activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat.toLowerCase() });
    setIsFilterOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Collections</span>
          <h1 className="text-4xl md:text-5xl uppercase tracking-widest leading-tight">
            Shop All <br /> <span className="italic">Jewelry</span>
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12 border-y border-platinum py-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-widest hover:text-accent transition-colors"
          >
            <Filter size={14} />
            <span>Filters</span>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-widest transition-all",
                  activeCategory === cat ? "text-foreground font-bold" : "text-foreground/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
              <span>Sort: {sortBy}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-platinum shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
              {sortOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setSortBy(opt)}
                  className="w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-black/5"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background z-[100] p-10 transition-transform duration-500",
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-between items-center mb-12">
            <span className="text-sm uppercase tracking-widest">Filters</span>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-accent mb-6">Category</h3>
              <div className="flex flex-col space-y-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "text-xl font-serif text-left",
                      activeCategory === cat ? "text-accent italic" : "text-foreground opacity-60"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 right-10">
            <button onClick={() => setIsFilterOpen(false)} className="w-full bg-foreground text-white py-4 text-xs uppercase tracking-widest">
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((p) => (
            <div key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif italic text-lg text-foreground/40">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
