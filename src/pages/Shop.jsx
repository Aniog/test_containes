import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCartStore } from '../store/cartStore';

export default function Shop() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    // We use a timeout to let React render the list first
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [filterCategory, sortBy]); // Re-run when products list changes

  const filteredProducts = products.filter(p => 
    filterCategory === 'All' || p.category === filterCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0; // Default Featured
  });

  const categories = ['All', 'Ear Cuffs', 'Necklaces', 'Huggies', 'Earrings', 'Sets'];

  return (
    <div className="pt-24 min-h-screen" ref={containerRef}>
      <div className="bg-secondary/30 py-12 md:py-16 text-center border-b border-border/50">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-foreground">The Collection</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto px-4">
          Discover our full range of demi-fine jewelry designed for everyday elegance.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="flex items-center text-sm font-medium tracking-wide uppercase"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter & Sort
            </button>
            <span className="text-muted-foreground text-sm">{sortedProducts.length} Products</span>
          </div>

          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Category Filter */}
            <div className="mb-10">
              <h3 className="font-serif text-lg uppercase tracking-wider mb-4 border-b border-border pb-2">Category</h3>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => {
                        setFilterCategory(cat);
                        setIsMobileFiltersOpen(false);
                      }}
                      className={`text-sm tracking-wide transition-colors ${
                        filterCategory === cat 
                          ? 'text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sort */}
            <div className="mb-10">
              <h3 className="font-serif text-lg uppercase tracking-wider mb-4 border-b border-border pb-2">Sort By</h3>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-background border border-border px-4 py-2.5 text-sm rounded-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer pr-10"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            <div className="mb-10">
               <h3 className="font-serif text-lg uppercase tracking-wider mb-4 border-b border-border pb-2">Material</h3>
               <p className="text-sm text-muted-foreground w-full appearance-none bg-secondary/20 px-4 py-2.5">18K Gold Plated</p>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-8">
              <p className="text-muted-foreground text-sm tracking-wide">Showing {sortedProducts.length} products <span className="mx-2">|</span> {filterCategory}</p>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                <p>No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col h-full">
                    <Link to={`/product/${product.handle}`} className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden block">
                      <img 
                        alt={product.name}
                        data-strk-img-id={product.imgId + '-shop'}
                        data-strk-img={product.imgQuery}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="600"
                        src={product.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                    </Link>
                    
                    <div className="flex justify-between items-start mb-2">
                       <Link to={`/product/${product.handle}`}>
                          <h3 id={product.nameId + '-shop'} className="font-serif text-lg leading-tight uppercase tracking-wider pr-4 hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                       </Link>
                      <span className="font-medium text-foreground">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">{product.material}</p>
                    <p id={product.descId + '-shop'} className="hidden">{product.description}</p>
                    
                    <div className="mt-auto pt-2">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product, 'gold');
                        }}
                        className="w-full bg-background border border-foreground text-foreground px-4 py-2.5 text-sm font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
