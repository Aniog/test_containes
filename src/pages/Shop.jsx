import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../lib/CartContext';
import { products } from '../lib/data';

const strkImgConfig = {};

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortBy]);

  let filteredProducts = products;
  if (categoryFilter && categoryFilter !== 'all') {
    filteredProducts = products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
  }

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 min-h-screen">
      <div className="bg-brand-beige py-12 px-6">
        <div className="max-w-[1600px] mx-auto">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl mb-4">
            {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'The Collection'}
          </h1>
          <p id="shop-desc" className="text-muted-foreground">
            Explore our curated selection of demi-fine jewelry. Designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-6 border-b pb-4">Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm uppercase tracking-wider transition-colors hover:text-accent ${(!categoryFilter && cat === 'All') || categoryFilter === cat.toLowerCase() ? 'text-accent font-medium' : 'text-muted-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 className="font-serif text-lg tracking-widest uppercase mb-6 border-b pb-4 mt-12">Material</h3>
            <ul className="space-y-4">
              <li>
                <button className="text-sm uppercase tracking-wider text-accent font-medium transition-colors">
                  18K Gold Plated
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <button 
              className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider border px-4 py-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={16} /> Filters
            </button>
            
            <div className="text-sm text-muted-foreground hidden md:block">
              {filteredProducts.length} Products
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="uppercase tracking-wider text-muted-foreground hidden sm:block">Sort by:</span>
              <div className="relative group">
                <button className="flex items-center gap-2 uppercase tracking-wider">
                  {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-3 hover:bg-secondary text-sm">Featured</button>
                  <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-3 hover:bg-secondary text-sm">Price: Low to High</button>
                  <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-3 hover:bg-secondary text-sm">Price: High to Low</button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={`${product.id}-primary`}
                    data-strk-img={`[product-title-${product.id}] close up jewelry on subtle background`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.title} worn`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    data-strk-img-id={`${product.id}-secondary`}
                    data-strk-img={`[product-title-${product.id}] worn on model jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                  />
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-background/95 text-foreground py-3 uppercase tracking-widest text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    Quick Add — ${product.price}
                  </button>
                </Link>
                <Link to={`/product/${product.id}`} className="block text-center">
                  <h3 id={`product-title-${product.id}`} className="font-serif text-lg mb-1">{product.title}</h3>
                  <p className="text-muted-foreground">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}