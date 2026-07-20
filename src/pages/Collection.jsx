import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

export default function Collection() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCat = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(rawCat || 'All');
  const [sort, setSort] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (rawCat && CATEGORIES.includes(rawCat)) {
      setActiveCategory(rawCat);
    } else {
      setActiveCategory('All');
    }
  }, [rawCat]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    // Schedule image load for filtered products
    const frameId = window.requestAnimationFrame(() => {
       if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
       }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sort]);


  let filteredProducts = [...products];
  if (activeCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
  }

  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-24 pb-24 min-h-screen" ref={containerRef}>
      <div className="bg-secondary/50 py-16 mb-12">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              {activeCategory === 'All' ? 'Complete Collection' : activeCategory}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
               Graceful, timeless pieces designed to be lived in. Explore our full range of demi-fine jewelry.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filter - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-32 space-y-10">
            <div>
              <h3 className="font-serif tracking-widest uppercase text-sm mb-6 pb-2 border-b border-border">Category</h3>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleCategoryClick(cat)}
                      className={`text-sm transition-colors hover:text-primary ${activeCategory === cat ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center pb-4 border-b border-border">
           <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 text-sm uppercase tracking-wider">
              <Filter className="w-4 h-4" /> Filters
           </button>
           
           <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Sort <ChevronDown className="w-4 h-4" />
              </button>
              {/* Very simple mobile sort dropdown, not focus-trapped for briefness */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg p-2 rounded-sm hidden group-hover:block z-20">
                 <button onClick={() => setSort('featured')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Featured</button>
                 <button onClick={() => setSort('price-asc')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: Low to High</button>
                 <button onClick={() => setSort('price-desc')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: High to Low</button>
              </div>
           </div>
        </div>
        
        {/* Mobile Filter Menu (Expandable) */}
        {isFilterOpen && (
           <div className="md:hidden py-4 border-b border-border mb-6">
              <h3 className="font-serif tracking-widest uppercase text-xs mb-4 text-muted-foreground">Category</h3>
              <ul className="space-y-4 text-sm">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => { handleCategoryClick(cat); setIsFilterOpen(false); }}
                      className={`transition-colors hover:text-primary w-full text-left ${activeCategory === cat ? 'text-primary font-medium' : 'text-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
           </div>
        )}

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Desktop Sort Header */}
          <div className="hidden md:flex justify-end mb-8 pb-4 border-b border-border">
             <div className="relative group">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sort by: <span className="text-foreground capitalize">{sort.replace('-', ' ')}</span> <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg p-2 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                   <button onClick={() => setSort('featured')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Featured</button>
                   <button onClick={() => setSort('price-asc')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: Low to High</button>
                   <button onClick={() => setSort('price-desc')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: High to Low</button>
                </div>
             </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-muted-foreground">
               <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}