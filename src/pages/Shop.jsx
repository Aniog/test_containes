import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParams || 'all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);
  
  const { addToCart } = useCart();

  useEffect(() => {
    setActiveCategory(categoryParams || 'all');
  }, [categoryParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  // Filtering
  let filteredProducts = products;
  if (activeCategory !== 'all') {
    filteredProducts = products.filter(p => p.category === activeCategory);
  }

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else {
    // featured: Reset to original order based on some criteria, let's say just ID for simplicity
    filteredProducts.sort((a, b) => a.id.localeCompare(b.id)); 
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="text-brand-charcoal/60 max-w-2xl mx-auto font-light">
            Discover our collection of demi-fine jewelry, crafted with intention for your everyday moments.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center border-y border-black/10 py-4 mb-8">
          <button 
            className="md:hidden flex items-center text-sm font-medium tracking-widest uppercase"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={16} className="mr-2" /> Filter
          </button>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`transition-colors pb-1 border-b-2 ${activeCategory === 'all' ? 'border-brand-gold' : 'border-transparent hover:text-brand-gold'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryChange('earrings')}
              className={`transition-colors pb-1 border-b-2 ${activeCategory === 'earrings' ? 'border-brand-gold' : 'border-transparent hover:text-brand-gold'}`}
            >
              Earrings
            </button>
            <button 
              onClick={() => handleCategoryChange('necklaces')}
              className={`transition-colors pb-1 border-b-2 ${activeCategory === 'necklaces' ? 'border-brand-gold' : 'border-transparent hover:text-brand-gold'}`}
            >
              Necklaces
            </button>
            <button 
              onClick={() => handleCategoryChange('huggies')}
              className={`transition-colors pb-1 border-b-2 ${activeCategory === 'huggies' ? 'border-brand-gold' : 'border-transparent hover:text-brand-gold'}`}
            >
              Huggies
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium tracking-widest uppercase hidden md:inline">Sort:</span>
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-sm font-medium tracking-widest uppercase py-2 pl-4 pr-8 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)}></div>
            <div className="relative w-[300px] max-w-[80%] bg-brand-sand h-full p-6 flex flex-col shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-xl uppercase tracking-widest">Filter</span>
                <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-charcoal/50">Category</h3>
                  <div className="space-y-4 flex flex-col text-left">
                    {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-left text-lg font-serif tracking-wider capitalize ${activeCategory === cat ? 'text-brand-gold' : 'text-brand-charcoal'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-12 md:gap-x-6">
          {filteredProducts.map((product) => (
             <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-brand-sand mb-4 block">
                <img 
                  src={product.images[0]}
                  data-strk-img-id={`shop-${product.strkImgId}`}
                  data-strk-img={product.strkImgQuery}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  alt={product.name}
                  className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.images[1]}
                  data-strk-img-id={`shop-${product.strkImgId}-hover`}
                  data-strk-img={`[shop-title-${product.id}] alternate angle jewelry lifestyle`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  alt={`${product.name} on model`}
                  className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`shop-title-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-1">{product.name}</h3>
                  <p className="text-brand-charcoal/70">${product.price.toFixed(2)}</p>
                </Link>
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="mt-auto opacity-100 md:opacity-0 group-hover:opacity-100 w-full py-2 border border-brand-charcoal text-xs uppercase tracking-widest transition-all duration-300 hover:bg-brand-charcoal hover:text-white mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl mb-4">No products found.</p>
            <button 
              onClick={() => handleCategoryChange('all')}
              className="text-sm font-medium tracking-widest uppercase border-b border-brand-charcoal pb-1"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}