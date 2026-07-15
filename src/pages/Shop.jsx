import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Shop() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { addToCart } = useStore();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const filteredProducts = useMemo(() => {
    let products = [...seedProducts];
    
    if (activeCategory !== 'all') {
      products = products.filter(p => p.category === activeCategory);
    }
    
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'newest':
        return products.reverse();
      case 'featured':
      default:
        return products;
    }
  }, [activeCategory, sortBy]);

  useEffect(() => {
    // Re-run image loading when filtered products change
    if (containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [filteredProducts]);

  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Sets' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="py-12 md:py-16 text-center border-b border-border/50 mb-8 md:mb-12">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl mb-4">
            {categories.find(c => c.id === activeCategory)?.label || 'All Jewelry'}
          </h1>
          <p id="shop-subtitle" className="text-muted-foreground max-w-2xl mx-auto font-light">
            Discover our collection of demi-fine jewelry. Crafted to companion your everyday moments with quiet luxury.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pb-24">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center bg-muted/50 p-4 -mt-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter & Sort
            </button>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} Results</span>
          </div>

          {/* Sidebar */}
          <div className={cn(
            "w-full md:w-64 flex-shrink-0 transition-all duration-300 md:block",
            isFilterOpen ? "block" : "hidden"
          )}>
            <div className="sticky top-28 space-y-10">
              
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-xl border-b border-border pb-2 mb-4">Category</h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "text-sm tracking-wider transition-colors",
                          activeCategory === cat.id 
                            ? "text-primary font-medium" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Filter (Static representation) */}
              <div>
                <h3 className="font-serif text-xl border-b border-border pb-2 mb-4">Material</h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-primary w-4 h-4 rounded-none border-border" defaultChecked />
                      <span className="text-sm text-foreground tracking-wider group-hover:text-primary transition-colors">18K Gold Plated</span>
                    </label>
                  </li>
                  <li>
                     <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-primary w-4 h-4 rounded-none border-border" />
                      <span className="text-sm text-muted-foreground tracking-wider group-hover:text-primary transition-colors">14K Solid Gold</span>
                    </label>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Sort Header (Desktop) */}
            <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border/50">
              <span className="text-sm text-muted-foreground tracking-wider">{filteredProducts.length} Results</span>
              
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm tracking-wider border border-border px-4 py-2 hover:border-foreground transition-colors">
                  Sort by: {sortBy.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10 w-48">
                  <div className="bg-background border border-border shadow-lg p-2 flex flex-col">
                    <button onClick={() => setSortBy('featured')} className="text-left text-sm tracking-wider p-2 hover:bg-muted transition-colors">Featured</button>
                    <button onClick={() => setSortBy('newest')} className="text-left text-sm tracking-wider p-2 hover:bg-muted transition-colors">New Arrivals</button>
                    <button onClick={() => setSortBy('price-low')} className="text-left text-sm tracking-wider p-2 hover:bg-muted transition-colors">Price: Low to High</button>
                    <button onClick={() => setSortBy('price-high')} className="text-left text-sm tracking-wider p-2 hover:bg-muted transition-colors">Price: High to Low</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col relative animate-in fade-in zoom-in duration-500">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                    <img
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-prod-${product.id}-name] [shop-subtitle] [shop-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-[80%] uppercase tracking-widest text-xs"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="flex flex-col flex-1 text-center">
                    <Link to={`/product/${product.id}`} className="flex flex-col h-full justify-between">
                      <h3 id={`shop-prod-${product.id}-name`} className="font-serif text-lg md:text-xl tracking-wide mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mt-auto tracking-wider">${product.price.toFixed(2)}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No products found in this category.</p>
                <Button onClick={() => setActiveCategory('all')} variant="outline">Clear Filters</Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}