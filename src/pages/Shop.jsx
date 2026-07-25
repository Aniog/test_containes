import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../api/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Separator } from '../components/ui/separator';

const Shop = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-widest">Shop All</h1>
        <p className="max-w-xl text-charcoal/60 font-light leading-relaxed">
          Discover our collection of demi-fine jewelry, designed to be layered and loved every day. Crafted with 18k gold and genuine stones.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-12 border-b border-charcoal/10 pb-6">
        <div className="flex items-center space-x-8">
           {/* Desktop Categories */}
           <div className="hidden lg:flex items-center space-x-8">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${activeCategory === cat ? 'text-gold border-b border-gold pb-1' : 'text-charcoal/40 hover:text-charcoal'}`}
               >
                 {cat}
               </button>
             ))}
           </div>

           {/* Mobile Filter Trigger */}
           <Sheet>
             <SheetTrigger asChild>
               <button className="lg:hidden flex items-center space-x-2 text-xs uppercase tracking-widest">
                 <Filter className="w-4 h-4" />
                 <span>Filters</span>
               </button>
             </SheetTrigger>
             <SheetContent side="left" className="bg-cream border-r border-charcoal/10">
               <SheetHeader>
                 <SheetTitle className="text-left font-serif uppercase tracking-widest border-b pb-4">Filters</SheetTitle>
               </SheetHeader>
               <div className="py-8 space-y-8">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-gold">Category</h4>
                    <div className="flex flex-col space-y-4">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`text-left text-sm font-light ${activeCategory === cat ? 'text-charcoal font-medium underline' : 'text-charcoal/60'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Separator className="bg-charcoal/5" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-gold">Price Range</h4>
                    <div className="flex flex-col space-y-4">
                       {['Under $50', '$50 - $100', 'Over $100'].map(range => (
                         <label key={range} className="flex items-center space-x-3 text-sm text-charcoal/60">
                           <input type="checkbox" className="w-4 h-4 border-charcoal/20 rounded-none accent-gold" />
                           <span>{range}</span>
                         </label>
                       ))}
                    </div>
                  </div>
               </div>
             </SheetContent>
           </Sheet>
        </div>

        <div className="flex items-center space-x-6">
           <span className="hidden md:inline text-[10px] uppercase tracking-widest text-charcoal/40">
             {filteredProducts.length} Items
           </span>
           <div className="flex items-center space-x-2 text-xs uppercase tracking-widest cursor-pointer group">
             <span>Sort By</span>
             <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
           </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-taupe/10 mb-6">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-strk-bg-id={`shop-${product.id}`}
                data-strk-bg={`[shop-item-name-${product.id}] gold jewelry editorial product shot`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute top-4 left-4">
                 {product.price > 80 && (
                   <span className="bg-gold text-white text-[9px] uppercase tracking-widest px-3 py-1.5 font-bold shadow-sm">Exclusive</span>
                 )}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="absolute bottom-0 left-0 w-full h-12 bg-white/95 backdrop-blur-sm text-charcoal text-[10px] uppercase font-bold tracking-[0.2em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold hover:text-white"
              >
                Add to Bag
              </button>
            </Link>
            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3 id={`shop-item-name-${product.id}`} className="font-serif uppercase text-sm tracking-widest mb-1 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm font-light text-charcoal/60">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More (Visual) */}
      <div className="mt-24 flex justify-center">
         <div className="flex flex-col items-center space-y-6">
           <p className="text-xs uppercase tracking-widest text-charcoal/40">Showing all {filteredProducts.length} items</p>
           <div className="w-48 h-[1px] bg-charcoal/10 relative">
              <div className="absolute top-0 left-0 h-full bg-gold w-full" />
           </div>
         </div>
      </div>
    </div>
  );
};

export default Shop;
