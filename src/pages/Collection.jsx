import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { seedProducts } from '../lib/data';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Collection = () => {
  const [products, setProducts] = useState(seedProducts);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    let filtered = [...seedProducts];
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (sortOption === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    setProducts(filtered);
  }, [activeCategory, sortOption]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]); // Re-run when products change

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16" ref={containerRef}>
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <h1 id="collection-title" className="text-4xl md:text-5xl font-serif uppercase tracking-wider mb-4">
          {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
        </h1>
        <p id="collection-desc" className="text-muted-foreground font-serif italic text-lg max-w-2xl mx-auto">
          Explore our collection of meticulously crafted, demi-fine pieces designed to elevate your everyday.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-border pb-4 gap-4">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center text-sm uppercase tracking-widest gap-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={16} /> Filters & Sort
        </button>

        {/* Categories (Desktop) */}
        <div className="hidden md:flex space-x-8 overflow-x-auto pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'text-foreground border-b border-foreground pb-1' 
                  : 'text-muted-foreground hover:text-foreground pb-1 border-b border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className={`w-full md:w-auto flex justify-between items-center ${isFilterOpen ? 'block' : 'hidden md:flex'}`}>
          <div className="md:hidden flexflex-wrap gap-2 mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {setActiveCategory(cat); setIsFilterOpen(false);}}
                className={`text-xs uppercase tracking-widest mr-4 mb-2 ${
                  activeCategory === cat ? 'underline underline-offset-4' : 'text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-auto md:ml-auto">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-transparent border border-border p-2 pr-8 w-full md:w-auto text-sm uppercase tracking-wider focus:outline-none focus:border-foreground"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground font-serif italic text-xl">
          No pieces found in this collection.
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col relative w-full">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4 block w-full">
                <img
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`col-img1-${product.id}`}
                  data-strk-img={`[prod-title-col-${product.id}] isolated on neutral background top down`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <img
                  alt={`${product.name} lifestyle`}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  data-strk-img-id={`col-img2-${product.id}`}
                  data-strk-img={`[prod-title-col-${product.id}] worn by model close up`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 hidden xl:block">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, { color: 'Gold' });
                    }}
                    className="w-full bg-white text-black py-3 uppercase tracking-widest text-xs font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="mt-auto">
                <h3 id={`prod-title-col-${product.id}`} className="font-serif uppercase tracking-wider text-sm mb-1 leading-tight">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
                  <button 
                    className="xl:hidden text-xs uppercase tracking-widest border-b border-foreground pb-0.5 hover:text-accent hover:border-accent"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, { color: 'Gold' });
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
