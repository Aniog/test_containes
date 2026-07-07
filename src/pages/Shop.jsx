import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      <header className="mb-16">
        <h1 className="text-5xl font-serif mb-6">Velmora Shop</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-xs">Elevated Essentials for the Modern Woman</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters - Hidden on mobile, drawer-style or simple list? Let's do a simple vertical list for now */}
        <aside className="hidden lg:block w-64 space-y-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 border-b border-muted/30 pb-2">Category</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm uppercase tracking-widest hover:text-accent transition-colors ${activeCategory === cat ? 'text-accent font-bold' : 'text-muted-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 border-b border-muted/30 pb-2">Material</h3>
            <ul className="space-y-4">
               <li><button className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent">18K Gold Plated</button></li>
               <li><button className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent">Sterling Silver</button></li>
            </ul>
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-8 border-y border-muted/30 py-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
          
          <div className="flex items-center space-x-1 text-xs uppercase tracking-widest">
            <span>Sort:</span>
            <button className="flex items-center">
              <span>{sortBy}</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="hidden lg:flex justify-end mb-8 items-center space-x-2 text-xs uppercase tracking-widest">
            <span className="text-muted-foreground">Sort By:</span>
            <button className="flex items-center hover:text-accent transition-colors">
              <span>{sortBy}</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-secondary mb-4">
                  <img
                    data-strk-img-id={`shop-img-${product.id}`}
                    data-strk-img={`[shop-name-${product.id}] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button 
                    className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Quick Add</span>
                  </button>
                </Link>
                <div className="space-y-1">
                  <h3 id={`shop-name-${product.id}`} className="text-sm font-serif uppercase tracking-[0.2em]">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-sans tracking-wide">${product.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col p-6 animate-in slide-in-from-bottom">
          <div className="flex justify-between items-center mb-12">
            <span className="text-sm uppercase tracking-widest font-bold">Filters</span>
            <button onClick={() => setIsFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-12 overflow-y-auto pb-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-muted-foreground">Category</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                    className={`border py-3 text-xs uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-black text-white border-black' : 'border-muted'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto border-t py-6">
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest"
            >
              See Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
