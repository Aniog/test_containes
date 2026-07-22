import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../lib/data';
import { useStore } from '../store/useStore';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

const Collection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = React.useState(initialCategory.toLowerCase());
  const [sortBy, setSortBy] = React.useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);
  const containerRef = useRef(null);
  const addToCart = useStore((state) => state.addToCart);

  // Filter products
  let displayProducts = products;
  if (activeCategory !== 'all') {
    displayProducts = displayProducts.filter(p => p.category.toLowerCase() === activeCategory);
  }

  // Sort products
  if (sortBy === 'price-low') {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    // Re-run image loading when filters change the displayed products
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    addToCart({ ...product, variant: 'Gold', quantity: 1 });
  };

  const SidebarContent = () => (
    <>
      <div className="mb-8">
        <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-2">Categories</h3>
        <ul className="space-y-3 pl-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors",
                  activeCategory === cat.toLowerCase() ? "text-primary font-medium" : "text-muted hover:text-foreground"
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-2">Material</h3>
        <ul className="space-y-3 pl-2">
          <li><button className="text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors">18k Gold Plated</button></li>
          <li><button className="text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors">14k Solid Gold</button></li>
          <li><button className="text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors">Sterling Silver</button></li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4">
            {activeCategory === 'all' ? 'All Collection' : activeCategory}
          </h1>
          <p className="text-muted font-light max-w-lg mx-auto">
            Discover our carefully curated selection of demi-fine jewelry. 
            Pieces designed to be layered, loved, and lived in.
          </p>
        </div>

        {/* Toolbar (Mobile Filter Toggle & Desktop Sort) */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="hidden md:block text-sm text-muted uppercase tracking-widest">
            {displayProducts.length} Products
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted uppercase tracking-widest hidden md:inline">Sort by:</span>
            <div className="relative group/sort">
              <button className="flex flex-row items-center gap-2 text-sm uppercase tracking-widest font-medium">
                {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-gray-200 shadow-lg opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all duration-300 z-30">
                <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-3 text-sm hover:bg-secondary hover:text-primary transition-colors">Featured</button>
                <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-3 text-sm hover:bg-secondary hover:text-primary transition-colors">Price: Low to High</button>
                <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-3 text-sm hover:bg-secondary hover:text-primary transition-colors">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-12" ref={containerRef}>
          
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-48 shrink-0">
            <SidebarContent />
          </div>

          {/* Grid */}
          <div className="flex-1">
            {displayProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
                {displayProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block relative group/card text-center">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                      {/* Primary Image */}
                      <img
                        data-strk-img-id={`c-${product.imgId1}`}
                        data-strk-img={`[c-name-${product.id}] minimalist jewelry photography white background`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                      />
                      {/* Secondary Image */}
                      <img
                        data-strk-img-id={`c-${product.imgId2}`}
                        data-strk-img={`[c-name-${product.id}] close up worn on model editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} worn`}
                        className="w-full h-full object-cover absolute inset-0 z-0"
                      />
                      
                      {/* Quick Add */}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm text-foreground py-3 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 z-20 text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background"
                      >
                        Quick Add
                      </button>
                    </div>
                    
                    <h3 id={`c-name-${product.id}`} className="font-serif text-lg mb-1">{product.name}</h3>
                    <p className="text-muted text-sm">${product.price}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="text-muted mb-4 text-lg">No products found in this category.</p>
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="text-primary hover:text-foreground border-b border-primary pb-1 uppercase tracking-widest text-sm transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-background h-full p-6 slide-in-from-left">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <h2 className="font-serif text-xl uppercase tracking-widest">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}

    </div>
  );
};

export default Collection;