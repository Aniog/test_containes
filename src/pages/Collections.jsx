import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/api/mockData';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';

const Collections = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef} className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-serif text-luxury-black mb-2 tracking-widest uppercase">The Collection</h1>
          <p className="text-luxury-black/60 text-sm tracking-wide">Jewelry designed for the modern woman.</p>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-luxury-black text-white border-luxury-black'
                  : 'bg-transparent text-luxury-black border-gray-200 hover:border-luxury-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-8">
        <div className="flex items-center gap-2 cursor-pointer group">
          <Filter className="w-4 h-4 text-luxury-black group-hover:text-gold-600 transition-colors" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Filters</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-[10px] uppercase tracking-widest font-bold">Sort By</span>
          <ChevronDown className="w-4 h-4 text-luxury-black group-hover:text-gold-600 transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden mb-4">
              <Link to={`/product/${product.id}`} className="block w-full h-full">
                <img
                  data-strk-img-id={`collection-item-${product.id}`}
                  data-strk-img={`[collection-name-${product.id}] jewelry gold luxury`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, 1);
                }}
                className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3 h-3" />
                Add to Bag
              </button>
            </div>

            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3 id={`collection-name-${product.id}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-black mb-1 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs font-serif text-luxury-black/60">${product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
