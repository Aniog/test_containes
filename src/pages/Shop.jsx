import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const ALL_PRODUCTS = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, variant: 'Gold', category: 'Earrings', imgId: 'prod-vivid-aura-1', imgAltId: 'prod-vivid-aura-2' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, variant: 'Gold', category: 'Necklaces', imgId: 'prod-majestic-flora-1', imgAltId: 'prod-majestic-flora-2' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, variant: 'Gold', category: 'Huggies', imgId: 'prod-golden-sphere-1', imgAltId: 'prod-golden-sphere-2' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, variant: 'Gold', category: 'Earrings', imgId: 'prod-amber-lace-1', imgAltId: 'prod-amber-lace-2' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, variant: 'Gold', category: 'Sets', imgId: 'prod-royal-heirloom-1', imgAltId: 'prod-royal-heirloom-2' },
  { id: '6', name: 'Classic Pearl Drop', price: 48, variant: 'Gold', category: 'Earrings', imgId: 'prod-pearl-drop-1', imgAltId: 'prod-pearl-drop-2' },
  { id: '7', name: 'Snake Chain Choker', price: 55, variant: 'Gold', category: 'Necklaces', imgId: 'prod-snake-chain-1', imgAltId: 'prod-snake-chain-2' },
  { id: '8', name: 'Pave Diamond Huggies', price: 62, variant: 'Gold', category: 'Huggies', imgId: 'prod-pave-huggies-1', imgAltId: 'prod-pave-huggies-2' },
  { id: '9', name: 'Herringbone Necklace', price: 72, variant: 'Gold', category: 'Necklaces', imgId: 'prod-herringbone-1', imgAltId: 'prod-herringbone-2' },
];

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

export default function Shop() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const addItem = useCart(state => state.addItem);

  const filteredProducts = ALL_PRODUCTS
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; // featured/default
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-lg tracking-widest uppercase mb-4">Category</h3>
        <ul className="space-y-3">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button 
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-wider hover:text-primary transition-colors ${activeCategory === cat ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="flex-1 w-full pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 font-serif uppercase tracking-widest">Shop All</h1>
        <p className="text-muted-foreground max-w-xl mx-auto font-light">
          Discover our full collection of demi-fine jewelry. Crafted to be worn, loved, and treasured.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mt-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0 sticky top-32">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Controls Bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/40">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-none uppercase tracking-widest border-border text-xs">
                    <SlidersHorizontal className="w-4 h-4 mr-2" /> Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="font-serif uppercase tracking-widest text-left">Filters</SheetTitle>
                  </SheetHeader>
                  <FilterSidebar />
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="hidden md:block text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:inline-block">Sort by</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-sm uppercase tracking-widest font-medium focus:ring-0 cursor-pointer outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                  <img 
                    src="https://images.unsplash.com/photo-1599643478524-fb66f7f3bc75?q=80&w=800&auto=format&fit=crop"
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                    alt={`${product.name} alternate view`}
                    data-strk-img-id={product.imgAltId}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100 transform"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      className="w-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm rounded-none border-none uppercase tracking-widest text-xs"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigating to PDP
                        addItem(product);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-serif text-lg tracking-wide uppercase hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground mt-1">{formatPrice(product.price)}</p>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground mb-4">No products found in this category.</p>
              <Button 
                variant="outline" 
                onClick={() => setActiveCategory('All')}
                className="rounded-none uppercase tracking-widest"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}