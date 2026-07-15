import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [sort, setSort] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const containerRef = useRef(null);
  
  const allProducts = getProducts();
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    if (categoryFilter && categoryFilter.toLowerCase() !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }
    
    // Sort
    switch(sort) {
      case 'price-low':
        result.sort((a,b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a,b) => b.price - a.price);
        break;
      case 'newest':
        // pseudo logic: just reverse
        result.reverse();
        break;
      default:
        break;
    }
    
    return result;
  }, [allProducts, categoryFilter, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div className="pt-24 bg-velmora-bg min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-velmora-light/30 py-16 mb-12 text-center border-b border-border">
        <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4">
          {categoryFilter ? categoryFilter : 'The Collection'}
        </h1>
        <p className="text-velmora-text/60 max-w-lg mx-auto px-6">
          Explore our range of demi-fine jewelry. Crafted with intention. Designed to be worn every day.
        </p>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 pb-24">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4 mb-4">
          <button 
            className="flex items-center gap-2 uppercase tracking-widest text-sm text-velmora-text/80"
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          
          {/* Mobile Sort */}
          <div className="relative">
            <select 
              className="appearance-none bg-transparent uppercase tracking-widest text-sm text-velmora-text/80 pr-6 outline-none"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className={`md:w-64 flex-shrink-0 ${showFiltersMobile ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28">
            <div className="mb-10">
              <h3 className="uppercase tracking-widest text-sm mb-6 border-b border-border pb-2">Category</h3>
              <ul className="space-y-4">
                {['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => {
                        if (cat === 'All') setSearchParams({});
                        else setSearchParams({category: cat});
                        setShowFiltersMobile(false);
                      }}
                      className={`text-sm tracking-wide ${(!categoryFilter && cat === 'All') || categoryFilter?.toLowerCase() === cat.toLowerCase() ? 'text-velmora-accent underline underline-offset-4 decoration-1 font-medium' : 'text-velmora-text/60 hover:text-velmora-text'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-10">
              <h3 className="uppercase tracking-widest text-sm mb-6 border-b border-border pb-2">Material</h3>
              <ul className="space-y-4">
                <li><span className="text-sm tracking-wide text-velmora-text/60 flex items-center gap-3"><input type="checkbox" className="accent-velmora-accent" defaultChecked /> 18K Gold Plated</span></li>
                <li><span className="text-sm tracking-wide text-velmora-text/60 flex items-center gap-3"><input type="checkbox" className="accent-velmora-accent border-velmora-text/30" /> Sterling Silver</span></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Desktop Sort Bar */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-sm text-velmora-text/60">{filteredProducts.length} Products</span>
            <div className="flex items-center gap-4">
              <span className="text-sm uppercase tracking-widest text-velmora-text/60">Sort By</span>
              <div className="relative border-b border-velmora-text pb-1">
                <select 
                  className="appearance-none bg-transparent uppercase tracking-widest text-sm pr-6 outline-none hover:text-velmora-accent transition-colors cursor-pointer"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full py-20 text-center text-velmora-text/60 font-serif text-xl">
                No products found in this category.
              </div>
            ) : (
              filteredProducts.map(product => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-light overflow-hidden mb-4 rounded-sm">
                    <img 
                      data-strk-img-id={`${product.imgId}-shop`}
                      data-strk-img={`[prod-name-${product.id}] [shop-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Add to Bag */}
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="w-full py-3 bg-velmora-bg/90 hover:bg-velmora-bg text-velmora-text uppercase tracking-widest text-xs font-medium backdrop-blur-sm transition-all shadow-md"
                      >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  
                  <div className="flex flex-col text-center mt-2 flex-grow">
                    <Link to={`/product/${product.id}`} className="hover:text-velmora-accent transition-colors">
                      <h3 id={`prod-name-${product.id}`} className="text-sm md:text-base uppercase tracking-wider mb-2 leading-tight">{product.name}</h3>
                    </Link>
                    <p className="text-velmora-text/70 mt-auto">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}