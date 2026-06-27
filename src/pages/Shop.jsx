import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { INITIAL_PRODUCTS } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { ShoppingBag, Filter, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const categoryFilter = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  // Filter products
  let displayedProducts = [...INITIAL_PRODUCTS];
  if (categoryFilter && categoryFilter !== 'All') {
      displayedProducts = displayedProducts.filter(p => p.category === categoryFilter);
  }

  // Sort products
  if (sortOption === 'price-low-high') {
      displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high-low') {
      displayedProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [categoryFilter]);

  // Handle Image Loading
  useEffect(() => {
        if(strkImgConfig && displayedProducts.length > 0) {
            // Need a slight delay to ensure DOM nodes are rendered before helper scans
             const frameId = window.requestAnimationFrame(() => {
                 ImageHelper.loadImages(strkImgConfig, containerRef.current);
             });
             return () => window.cancelAnimationFrame(frameId);
        }
  }, [displayedProducts, categoryFilter]);


  const handleCategoryChange = (cat) => {
      if (cat === 'All') {
          searchParams.delete('category');
      } else {
          searchParams.set('category', cat);
      }
      setSearchParams(searchParams);
      setIsFilterOpen(false);
  };

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 pt-32">
      {/* Header */}
      <h1 id="shop-page-title" className="font-serif text-4xl md:text-5xl text-center mb-4">
          {categoryFilter === 'All' || !categoryFilter ? 'All Jewelry' : categoryFilter}
      </h1>
      <p id="shop-page-desc" className="text-center text-[var(--color-brand-clay)] max-w-2xl mx-auto mb-16 font-light">
          Explore our collection of demi-fine jewelry. Designed for the modern muse.
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters (Mobile toggleable) */}
          <aside className="w-full md:w-64 flex-shrink-0">
             <div className="md:hidden flex justify-between items-center mb-6 border-b border-[var(--color-brand-stone)] pb-4">
                 <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
                 >
                     <Filter size={16} /> Filters
                 </button>
                 
                 {/* Mobile Sort */}
                 <div className="relative">
                    <select 
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="appearance-none bg-transparent uppercase tracking-widest text-xs pr-6 outline-none cursor-pointer"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-brand-clay)]" />
                 </div>
             </div>

             <div className={cn(
                 "md:block",
                 isFilterOpen ? "block mb-8" : "hidden"
             )}>
                 <div className="mb-10">
                     <h3 className="font-serif text-xl mb-4 border-b border-[var(--color-brand-stone)] pb-2">Categories</h3>
                     <ul className="space-y-3">
                         {categories.map(cat => (
                             <li key={cat}>
                                 <button 
                                    onClick={() => handleCategoryChange(cat)}
                                    className={cn(
                                        "text-sm tracking-wide transition-colors",
                                        (categoryFilter === cat) || (!categoryFilter && cat === 'All') 
                                            ? "text-[var(--color-brand-charcoal)] font-medium" 
                                            : "text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)]"
                                    )}
                                 >
                                     {cat}
                                 </button>
                             </li>
                         ))}
                     </ul>
                 </div>
                 
                 {/* Desktop Sort */}
                 <div className="hidden md:block mb-10">
                     <h3 className="font-serif text-xl mb-4 border-b border-[var(--color-brand-stone)] pb-2">Sort By</h3>
                      <div className="relative">
                        <select 
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-full appearance-none bg-transparent text-sm tracking-wide text-[var(--color-brand-charcoal)] pr-6 outline-none cursor-pointer py-2"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-brand-clay)]" />
                     </div>
                 </div>

             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 w-full">
                {displayedProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col w-full">
                        <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-[var(--color-brand-stone)] mb-4 overflow-hidden w-full">
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`shop-primary-${product.imgId}`}
                                data-strk-img={`[product-name-${product.id}] [shop-page-desc]`}
                                data-strk-img-ratio="4x5"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                alt={product.name}
                            />
                            {/* Hover Image */}
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`shop-secondary-${product.imgId}`}
                                data-strk-img={`woman wearing [product-name-${product.id}] [shop-page-title]`}
                                data-strk-img-ratio="4x5"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                alt={`${product.name} worn`}
                            />
                            
                            {/* Quick Add Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(product, 1, '18k Gold');
                                    }}
                                    className="w-full bg-[var(--color-brand-white)]/90 backdrop-blur text-[var(--color-brand-charcoal)] py-3 text-xs uppercase tracking-widest hover:bg-[var(--color-brand-charcoal)] hover:text-white transition-colors flex justify-center items-center gap-2 font-medium"
                                >
                                    <ShoppingBag size={14} /> Quick Add
                                </button>
                            </div>
                        </Link>
                        
                        <div className="flex flex-col flex-grow">
                            <h2 id={`product-name-${product.id}`} className="font-serif text-lg leading-tight mb-1 uppercase tracking-wider text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-gold-dark)] transition-colors">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h2>
                            <div className="mt-auto">
                                <p className="font-medium">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {displayedProducts.length === 0 && (
                <div className="text-center py-24">
                    <p className="font-serif text-2xl mb-4">No products found.</p>
                    <button 
                        onClick={() => handleCategoryChange('All')}
                        className="text-sm uppercase tracking-widest underline underline-offset-4"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
          </div>
      </div>
    </div>
  );
}
