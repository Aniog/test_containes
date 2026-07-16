import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { SEED_PRODUCTS } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const CollectionsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFilter = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCartStore();

  let displayedProducts = [...SEED_PRODUCTS];

  if (categoryFilter && categoryFilter.toLowerCase() !== 'all') {
    displayedProducts = displayedProducts.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
  }

  if (sortBy === 'price-low') {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      // Need dummy configs to satisfy ImageHelper logic if missing
      const dummyConfig = { images: {}, backgrounds: {} };
      if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        window.ImageHelper.loadImages(dummyConfig, containerRef.current);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortBy, displayedProducts]);

  return (
    <div className="pt-24 pb-20 container mx-auto px-6" ref={containerRef}>
      
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-primary">
          {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All Jewelry'}
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Discover our collection of demi-fine jewelry designed for everyday elegance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters (Desktop) & Mobile Filter Toggle */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="flex justify-between items-center md:hidden mb-4 border-b border-border pb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm uppercase tracking-widest font-medium pr-6 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block space-y-8`}>
            <div>
              <h3 className="font-serif text-lg tracking-widest uppercase mb-4">Category</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/collections" className={!categoryFilter ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
                    All Jewelry
                  </Link>
                </li>
                <li>
                  <Link to="/collections?category=earrings" className={categoryFilter === 'earrings' ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link to="/collections?category=necklaces" className={categoryFilter === 'necklaces' ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link to="/collections?category=huggies" className={categoryFilter === 'huggies' ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
                    Huggies
                  </Link>
                </li>
                <li>
                  <Link to="/collections?category=sets" className={categoryFilter === 'sets' ? 'text-foreground font-medium' : 'hover:text-foreground transition-colors'}>
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg tracking-widest uppercase mb-4">Material</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><button className="text-foreground font-medium">18k Gold Vermeil</button></li>
                <li><button className="hover:text-foreground transition-colors">Sterling Silver</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-end mb-6 relative border-b border-border pb-4">
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm uppercase tracking-widest font-medium pr-6 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Sort by: Price (Low to High)</option>
                <option value="price-high">Sort by: Price (High to Low)</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    data-strk-img-id={`collection-${product.id}-img1`}
                    data-strk-img={`[collection-name-${product.id}] jewelry isolated`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  <img 
                    src={product.images[1]} 
                    alt={`${product.name} alternate`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    data-strk-img-id={`collection-${product.id}-img2`}
                    data-strk-img={`[collection-name-${product.id}] jewelry worn model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ ...product, variant: 'Gold', quantity: 1 });
                      }}
                      className="w-full bg-background text-foreground py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col flex-1">
                  <Link to={`/product/${product.id}`} id={`collection-name-${product.id}`} className="font-serif text-lg tracking-wide uppercase hover:text-muted-foreground transition-colors mb-1">
                    {product.name}
                  </Link>
                  <span className="text-muted-foreground">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {displayedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
              <button onClick={() => navigate('/collections')} className="inline-block mt-4 text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm font-medium hover:text-primary/70 transition-colors">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;