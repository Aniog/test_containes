import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const filteredProducts = PRODUCTS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-velmora-cream min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">Shop the Collection</h1>
        <p className="text-sm text-velmora-muted uppercase tracking-[0.2em] px-4 max-w-2xl mx-auto italic">
          Curated pieces crafted with precision and intention.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 relative">
        {/* Sidebar Filters - Desktop Only */}
        <aside className="hidden md:block w-64 space-y-12 shrink-0">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-velmora-dark">Categories</h3>
            <ul className="space-y-4">
              {['All', ...CATEGORIES].map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "text-xs uppercase tracking-widest transition-colors duration-300",
                      activeCategory === cat ? "text-velmora-gold font-bold" : "text-velmora-muted hover:text-velmora-dark"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-velmora-dark">Material</h3>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-velmora-muted">
              <li><button className="hover:text-velmora-dark transition-colors">18K Gold Plated</button></li>
              <li><button className="hover:text-velmora-dark transition-colors">Sterling Silver</button></li>
              <li><button className="hover:text-velmora-dark transition-colors">Freshwater Pearls</button></li>
            </ul>
          </div>

          <div className="pt-8 border-t border-velmora-border italic text-xs text-velmora-muted leading-relaxed">
            All pieces are nickel-free and hypoallergenic, designed for sensitive skin.
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex items-center justify-between mb-12 py-4 border-b border-velmora-border">
            <button 
              className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <div className="hidden md:block text-[10px] uppercase tracking-widest text-velmora-muted">
              Showing {filteredProducts.length} Results
            </div>
            
            <div className="relative group">
               <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                 Sort By: {sortBy}
                 <ChevronDown className="w-3 h-3" />
               </button>
               <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl border border-velmora-border py-4 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
                    <button
                      key={option}
                      className="w-full text-left px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-velmora-beige transition-colors"
                      onClick={() => setSortBy(option)}
                    >
                      {option}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Mobile Categories - Horizontal Scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-8 scrollbar-hide mb-8">
            {['All', ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 whitespace-nowrap text-[10px] uppercase tracking-widest border transition-all duration-300",
                  activeCategory === cat ? "bg-velmora-dark text-white border-velmora-dark" : "bg-white text-velmora-dark border-velmora-border"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl italic text-velmora-muted">No pieces found in this category.</p>
              <button onClick={() => setActiveCategory('All')} className="mt-6 text-xs uppercase tracking-widest border-b border-velmora-dark pb-1 text-velmora-gold border-velmora-gold">
                View All Collection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
