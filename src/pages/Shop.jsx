import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryFilter || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(categoryFilter || 'all');
  }, [categoryFilter]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];
  
  const filteredProducts = products.filter(p => 
    activeCategory === 'all' || p.category.toLowerCase() === activeCategory
  );

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'all' ? {} : { category: cat });
    setIsMobileFiltersOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-brand-sand pb-8 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-sm font-sans uppercase tracking-[0.3em] text-brand-gold font-bold mb-2">Collection</h1>
            <h2 className="text-4xl font-serif capitalize">
              {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center space-x-2 text-xs uppercase tracking-widest border border-brand-sand px-4 py-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs uppercase tracking-widest border border-brand-sand px-6 py-2 pr-10 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 space-y-12 shrink-0">
            <div>
              <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold mb-6">Category</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "block text-sm font-sans uppercase tracking-widest transition-colors",
                      activeCategory === cat ? "text-brand-gold font-bold" : "text-muted hover:text-brand-charcoal"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold mb-6">Price</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 text-sm font-sans uppercase tracking-widest text-muted">
                  <input type="checkbox" className="accent-brand-gold" />
                  <span>Under $50</span>
                </label>
                <label className="flex items-center space-x-3 text-sm font-sans uppercase tracking-widest text-muted">
                  <input type="checkbox" className="accent-brand-gold" />
                  <span>$50 - $100</span>
                </label>
                <label className="flex items-center space-x-3 text-sm font-sans uppercase tracking-widest text-muted">
                  <input type="checkbox" className="accent-brand-gold" />
                  <span>Over $100</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif italic text-xl text-muted">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
        isMobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsMobileFiltersOpen(false)} />
      
      <div className={cn(
        "fixed left-0 top-0 h-full w-4/5 bg-white z-[101] p-8 transition-transform duration-300 transform",
        isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl font-serif tracking-widest uppercase">Filters</h2>
          <button onClick={() => setIsMobileFiltersOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold mb-6 text-brand-gold">Category</h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <button
                  key={`mobile-${cat}`}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "block text-lg font-serif uppercase tracking-widest transition-colors",
                    activeCategory === cat ? "text-brand-charcoal underline" : "text-muted"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;