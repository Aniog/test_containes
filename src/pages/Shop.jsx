import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('featured');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  // Derive categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  let filteredProducts = products.filter(p => filter === 'All' || p.category === filter);

  if (sort === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    // Just reverse as a mock for "newest"
    filteredProducts = [...filteredProducts].reverse();
  }

  useEffect(() => {
    try {
       // Timeout helps ensure DOM is updated after filtering
       const timer = setTimeout(() => {
         if (containerRef.current && strkImgConfig) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
         }
       }, 50);
       return () => clearTimeout(timer);
    } catch {
       // ignore
    }
  }, [filter, sort]);

  return (
    <div className="pt-24 min-h-screen max-w-[1400px] mx-auto px-6" ref={containerRef}>
      
      {/* Header */}
      <h1 className="font-serif text-4xl mb-4 text-center mt-8">Shop All</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Discover our full collection of demi-fine jewelry. Each piece is crafted to bring a touch of quiet luxury to your everyday look.
      </p>

      {/* Desktop Filters & Sort */}
      <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4">
        <div className="flex gap-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${filter === cat ? 'border-b border-primary text-foreground pb-1' : 'text-muted-foreground'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort By:</span>
          <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent text-sm uppercase tracking-widest appearance-none outline-none cursor-pointer pr-4 font-medium"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Mobile Filters & Sort */}
      <div className="md:hidden flex justify-between items-center mb-8 border-b border-border pb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 uppercase tracking-widest text-sm font-medium">
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader className="mb-8 border-b border-border pb-4">
              <SheetTitle className="font-serif uppercase tracking-widest text-left">Filters</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 font-medium text-sm tracking-widest uppercase">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); // Hack to close sheet
                  }}
                  className={`text-left ${filter === cat ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent text-sm uppercase tracking-widest appearance-none outline-none cursor-pointer font-medium"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low - High</option>
            <option value="price-high">Price: High - Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-8 pb-24">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative flex flex-col">
            <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
              <img
                data-strk-img-id={`shop-${product.id}-img1`}
                data-strk-img={`[${product.descId}] [${product.titleId}] [shop-category-name]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                data-strk-img-id={`shop-${product.id}-img2`}
                data-strk-img={`[${product.titleId}] detail shot`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} detail`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 hidden md:block">
                <Button 
                  className="w-full rounded-none bg-background/90 text-foreground hover:bg-background h-10 tracking-widest uppercase text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                >
                  Quick Add
                </Button>
              </div>
            </Link>
            <div className="flex flex-col">
              <Link to={`/product/${product.slug}`}>
                <h3 id={product.titleId} className="font-serif text-sm tracking-wider uppercase mb-1">{product.name}</h3>
                <p id={product.descId} className="sr-only">{product.description}</p>
              </Link>
              <span className="text-sm font-medium text-muted-foreground">${product.price}</span>
            </div>
            {/* Mobile quick add */}
            <button 
              className="mt-4 md:hidden text-xs border border-border py-2 uppercase tracking-widest hover:border-foreground"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div id="shop-category-name" className="sr-only">velmora sophisticated jewelry shop</div>
    </div>
  );
}
