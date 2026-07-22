import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    let frameId;
    if (containerRef.current) {
        frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
    }
    return () => {
        if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // assuming last items in array are newest for this mock
        result.reverse();
        break;
      case 'featured':
      default:
        // just returning the original order (or maybe prioritizing bestsellers)
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }

    return result;
  }, [activeCategory, sortBy]);


  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All</h1>
          <p className="text-velmora-500 font-light max-w-xl mx-auto">
            Discover our complete collection of demi-fine jewelry. Ethically crafted, thoughtfully designed pieces meant to be worn every day.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-velmora-200 pb-6 mb-12 gap-6">
          
          {/* Categories */}
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto hide-scrollbar">
             {categories.map(cat => (
               <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`uppercase tracking-widest text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat ? 'text-velmora-900 border-b border-velmora-900 pb-1' : 'text-velmora-400 hover:text-velmora-900'
                }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <span className="flex items-center gap-2 text-sm text-velmora-500 uppercase tracking-widest">
              <Filter size={14} /> Sort By
            </span>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-200 text-velmora-900 text-sm pl-4 pr-10 py-2 focus:outline-none focus:border-velmora-900 uppercase tracking-wider font-medium"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-500" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-velmora-100 mb-4 overflow-hidden">
                <Link to={`/product/${product.id}`} className="block h-full w-full">
                  <img
                    key={`${product.imgId}-shop`}
                    alt={product.name}
                    data-strk-img-id={`${product.imgId}-shop`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <img
                    key={`${product.imgHoverId}-shop`}
                    alt={`${product.name} on model`}
                    data-strk-img-id={`${product.imgHoverId}-shop`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn on model`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </Link>
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-velmora-900">
                    Bestseller
                  </span>
                )}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-900 font-serif tracking-widest uppercase text-xs py-3 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-900 hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              <div className="text-center">
                <h3 id={product.titleId} className="font-serif uppercase tracking-widest text-sm mb-1">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-velmora-600 font-light">${product.price}</p>
                <p id={product.descId} className="sr-only">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}