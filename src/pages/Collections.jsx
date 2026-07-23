import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Collections() {
  const { addToCart } = useCart();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category') || 'All';
    setActiveCategory(category);
    window.scrollTo(0, 0);
  }, [location.search]);
  
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortOption]);

  // Categories
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  // Filter and Sort
  let filteredProducts = products.filter(p => activeCategory === 'All' || p.category === activeCategory);

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          {activeCategory === 'All' ? 'The Collection' : activeCategory}
        </h1>
        <p className="text-muted-foreground font-serif italic max-w-2xl mx-auto">
          Discover our curated selection of demi-fine gold jewelry, designed to be layered, loved, and lived in.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-border gap-4">
        <div className="flex items-center gap-2">
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          
          <div className={`hidden md:flex gap-6 ${isFilterOpen ? 'flex flex-wrap mt-4 md:mt-0 w-full md:w-auto' : ''}`}>
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/collections${cat === 'All' ? '' : `?category=${cat}`}`}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${activeCategory === cat ? 'text-foreground underline underline-offset-4 decoration-2' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
          
          <div className="relative group">
            <button className="flex items-center gap-2 border border-border px-4 py-2 text-sm uppercase tracking-widest font-medium">
              Sort: {sortOption === 'featured' ? 'Featured' : sortOption === 'price-low' ? 'Price: Low-High' : 'Price: High-Low'}
              <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <button onClick={() => setSortOption('featured')} className="w-full text-left px-4 py-3 hover:bg-muted text-sm uppercase tracking-wider">Featured</button>
              <button onClick={() => setSortOption('price-low')} className="w-full text-left px-4 py-3 hover:bg-muted text-sm uppercase tracking-wider">Price: Low to High</button>
              <button onClick={() => setSortOption('price-high')} className="w-full text-left px-4 py-3 hover:bg-muted text-sm uppercase tracking-wider">Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <div className="md:hidden flex flex-wrap gap-4 mb-8">
          {categories.map(cat => (
              <Link
                key={cat}
                to={`/collections${cat === 'All' ? '' : `?category=${cat}`}`}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${activeCategory === cat ? 'text-foreground underline underline-offset-4 decoration-2' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {cat}
              </Link>
            ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map(product => (
          <div key={product.id} className="group flex flex-col cursor-pointer">
            <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 block">
              <img 
                data-strk-img-id={`coll-${product.id}-img1`}
                data-strk-img={`[coll-${product.id}-name]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
              />
              <img 
                data-strk-img-id={`coll-${product.id}-img2`}
                data-strk-img={`[coll-${product.id}-name] details`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} worn`} 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
              />
              
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="w-full bg-foreground text-background py-3 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Quick Add
                </button>
              </div>
            </Link>
            
            <Link id={`coll-${product.id}-name`} to={`/product/${product.id}`} className="text-xs tracking-widest uppercase font-medium mb-1 hover:text-accent transition-colors">
              {product.name}
            </Link>
            <p className="text-sm font-serif italic text-muted-foreground mb-2">{product.material}</p>
            <p className="text-sm">${product.price}</p>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
         <div className="text-center py-20">
           <p className="text-lg font-serif">No products found in this category.</p>
           <Link to="/collections" className="inline-block mt-4 text-sm font-medium tracking-widest uppercase underline text-muted-foreground hover:text-foreground transition-colors">
              View All Products
           </Link>
         </div>
      )}
    </div>
  );
}