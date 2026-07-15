import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Collection = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Generate more products by duplicating for demo purposes
  const extendedProducts = [...products, ...products.map(p => ({...p, id: p.id + '-2'}))];

  const filteredProducts = extendedProducts.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured/default
  });

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      {/* Collection Header */}
      <div className="bg-secondary/30 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 id="collection-title" className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-foreground mb-4">
            {activeCategory === 'All' ? 'Complete Collection' : activeCategory}
          </h1>
          <p id="collection-desc" className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of demi-fine jewelry. Each piece is designed to be layered, loved, and lived in.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-border/50 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto no-scrollbar">
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2 rounded-none uppercase tracking-widest text-xs"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </Button>
            
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              Showing {filteredProducts.length} results
            </p>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="text-sm text-muted-foreground uppercase tracking-widest hidden md:inline">Sort by:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-none uppercase tracking-widest text-xs flex items-center gap-2">
                  {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none">
                <DropdownMenuItem onClick={() => setSortBy('featured')} className="uppercase text-xs tracking-widest">Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-low')} className="uppercase text-xs tracking-widest">Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-high')} className="uppercase text-xs tracking-widest">Price: High to Low</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className={`w-full md:w-64 shrink-0 space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div>
              <h3 className="font-serif text-lg uppercase tracking-widest mb-4">Category</h3>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      className={`text-sm tracking-wide transition-colors ${activeCategory === cat ? 'text-foreground font-medium underline underline-offset-4 decoration-accent' : 'text-muted-foreground hover:text-foreground'}`}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsMobileFiltersOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-border/50">
              <h3 className="font-serif text-lg uppercase tracking-widest mb-4">Material</h3>
              <ul className="space-y-3">
                <li>
                  <label className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <input type="checkbox" className="rounded-none border-border text-accent focus:ring-accent accent-accent w-4 h-4" defaultChecked />
                    Gold Plated
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <input type="checkbox" className="rounded-none border-border text-accent focus:ring-accent accent-accent w-4 h-4" />
                    Sterling Silver
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative group/card flex flex-col">
                  <Link to={`/products/${product.id.split('-')[0]}`} className="block relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                    <img 
                      src={product.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      alt={product.name}
                      data-strk-img-id={`${product.imgId}-${product.id}`}
                      data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                    />
                    <img 
                      src={product.image2 || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      alt={`${product.name} alternate view`}
                      data-strk-img-id={`${product.img2Id}-${product.id}`}
                      data-strk-img={`[prod-desc-${product.id}] alternate lifestyle view jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 z-20">
                      <Button 
                        className="w-full bg-white/90 backdrop-blur text-foreground hover:bg-white rounded-none uppercase tracking-widest text-xs py-5"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="text-center mt-auto flex flex-col">
                    <h3 id={`prod-name-${product.id}`} className="font-serif text-sm uppercase tracking-widest mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium">${product.price}</p>
                    <p id={`prod-desc-${product.id}`} className="sr-only">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No products found in this category.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveCategory('All')}
                  className="rounded-none uppercase tracking-widest"
                >
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
