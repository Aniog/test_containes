import React, { useState, useEffect, useRef, useMemo } from 'react';
import { seedProducts } from '../lib/data';
import { Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { useCart } from '../components/CartProvider';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { cn } from '../lib/utils';

export function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...seedProducts];
    
    // Filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
         // Assuming newest first if 'new' tag exists
         result.sort((a, b) => {
            const aNew = a.tags.includes('new') ? 1 : 0;
            const bNew = b.tags.includes('new') ? 1 : 0;
            return bNew - aNew;
         });
         break;
      default: // 'featured' -> bestsellers first
         result.sort((a, b) => {
            const aBest = a.tags.includes('bestseller') ? 1 : 0;
            const bBest = b.tags.includes('bestseller') ? 1 : 0;
            return bBest - aBest || b.rating - a.rating; // tie-breaker on rating
         });
    }
    
    return result;
  }, [activeCategory, sortBy]);

  // Image load effect depends on filtered products since DOM nodes change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredAndSortedProducts]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    addItem(product, 1, 'Gold');
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-24 bg-background w-full">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <h1 id="shop-title" className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          {activeCategory === 'All' ? 'Fine Jewelry Collection' : activeCategory}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Discover our curated collection of demi-fine pieces, designed to be layered, loved, and lived in.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-y border-border mb-8 gap-4">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <button 
                className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMobileFiltersOpen(true)}
             >
                <Filter className="w-4 h-4" /> Filter
             </button>
             <span className="text-sm text-muted-foreground hidden md:inline">
                {filteredAndSortedProducts.length} Results
             </span>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto group relative">
             <span className="text-sm uppercase tracking-widest text-muted-foreground mr-2">Sort By</span>
             <select 
               className="bg-transparent text-sm uppercase tracking-widest font-medium focus:outline-none cursor-pointer appearance-none pr-6"
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
             >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
             </select>
             <ChevronDown className="w-4 h-4 absolute right-0 pointer-events-none text-muted-foreground" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
             <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="font-medium uppercase tracking-widest text-sm mb-4 pb-2 border-b border-border">Category</h3>
                  <ul className="space-y-3">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => setActiveCategory(cat)}
                          className={cn(
                            "text-sm hover:text-primary transition-colors",
                            activeCategory === cat ? "text-primary font-medium" : "text-muted-foreground"
                          )}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual placeholder for other filters */}
                <div>
                  <h3 className="font-medium uppercase tracking-widest text-sm mb-4 pb-2 border-b border-border">Material</h3>
                  <ul className="space-y-3">
                    {['18K Gold Plated', '14K Solid Gold', 'Sterling Silver'].map(mat => (
                      <li key={mat}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <div className="w-4 h-4 border border-border rounded-sm flex items-center justify-center group-hover:border-primary transition-colors">
                              {/* Checkbox checkmark inside would go here */}
                           </div>
                           <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{mat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredAndSortedProducts.length === 0 ? (
                <div className="py-24 text-center text-muted-foreground">
                    <p>No products found for this category.</p>
                    <button 
                        onClick={() => setActiveCategory('All')}
                        className="mt-4 text-primary underline underline-offset-4"
                    >
                        View all products
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-10">
                {filteredAndSortedProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                        <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                        <img 
                            alt={product.name}
                            data-strk-img={`[shop-product-desc-${product.id}] [shop-product-name-${product.id}] [shop-title]`}
                            data-strk-img-id={`shop-item-${product.id}-1`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                        />
                        <img 
                            alt={`${product.name} alternate view`}
                            data-strk-img={`alternate view [shop-product-desc-${product.id}] [shop-product-name-${product.id}]`}
                            data-strk-img-id={`shop-item-${product.id}-2`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                            <button 
                                onClick={(e) => handleQuickAdd(e, product)}
                                className="w-full bg-white/90 backdrop-blur text-foreground py-3 uppercase tracking-widest text-xs font-medium hover:bg-white transition-colors"
                            >
                            Quick Add
                            </button>
                        </div>
                        </Link>
                        <div className="flex flex-col flex-grow">
                        <Link to={`/product/${product.id}`} className="hover:opacity-70 group-hover:underline underline-offset-4 decoration-primary/30">
                            <h3 id={`shop-product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 text-foreground">{product.name}</h3>
                        </Link>
                        <p id={`shop-product-desc-${product.id}`} className="hidden">{product.description}</p>
                        <span className="text-muted-foreground text-sm">${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[80] md:hidden transition-opacity duration-300",
          isMobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileFiltersOpen(false)}
      />
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background z-[90] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col md:hidden",
          isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider uppercase text-foreground">Filters</h2>
          <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2 hover:opacity-70 text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-6 text-foreground space-y-8">
            <div>
                <h3 className="font-medium uppercase tracking-widest text-sm mb-4 pb-2 border-b border-border">Category</h3>
                <ul className="space-y-4">
                {categories.map(cat => (
                    <li key={cat}>
                    <button 
                        onClick={() => {
                            setActiveCategory(cat);
                            setIsMobileFiltersOpen(false);
                        }}
                        className={cn(
                        "text-sm transition-colors",
                        activeCategory === cat ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                    >
                        {cat}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="p-6 border-t border-border mt-auto">
            <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 uppercase tracking-widest text-sm transition-colors"
            >
                View {filteredAndSortedProducts.length} Items
            </button>
        </div>
      </div>
    </div>
  );
}