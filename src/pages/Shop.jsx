import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { cn } from '../lib/utils';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];
const sorts = ['Featured', 'Price: Low to High', 'Price: High to Low'];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [activeSort, setActiveSort] = useState('Featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeSort]); // Re-run when products change

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat.toLowerCase() === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  let filteredProducts = products.filter(p => 
    activeCategory.toLowerCase() === 'all' ? true : p.category.toLowerCase() === activeCategory.toLowerCase()
  );

  if (activeSort === 'Price: Low to High') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'Price: High to Low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen flex flex-col">
      <div className="bg-muted py-16 mb-12">
        <h1 className="font-heading text-4xl md:text-5xl tracking-widest text-center uppercase">
          {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filters Toggle */}
        <div className="lg:hidden flex justify-between items-center border-b border-border pb-4 mb-4">
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
              Sort <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {sorts.map(s => (
                <button
                  key={s}
                  onClick={() => setActiveSort(s)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-sm font-sans hover:bg-muted transition-colors",
                    activeSort === s && "font-medium"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className={cn(
          "w-full lg:w-64 flex-none font-sans",
          "lg:block",
          isMobileFiltersOpen ? "block mb-8" : "hidden"
        )}>
          <div className="sticky top-24">
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6">Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "text-sm transition-colors hover:text-accent",
                      activeCategory.toLowerCase() === cat.toLowerCase()
                        ? "text-foreground font-medium border-b border-foreground pb-0.5"
                        : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block mt-12">
               <h3 className="text-sm uppercase tracking-widest font-medium mb-6">Sort By</h3>
               <ul className="space-y-4">
                {sorts.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => setActiveSort(s)}
                      className={cn(
                        "text-sm transition-colors hover:text-accent",
                        activeSort === s
                          ? "text-foreground font-medium border-b border-foreground pb-0.5"
                          : "text-muted-foreground"
                      )}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 hidden lg:flex">
             <p className="text-sm text-muted-foreground font-sans">{filteredProducts.length} Products</p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={`${product.id}-${activeSort}`} product={product} /> // key change forces re-render for image loader
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
               <p className="text-muted-foreground font-sans">No products found in this category.</p>
               <button 
                onClick={() => handleCategoryChange('All')}
                className="mt-4 border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-accent hover:border-accent transition-colors"
               >
                 Clear Filters
               </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;
