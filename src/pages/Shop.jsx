import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Featured');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  const filteredProducts = products.filter(p => filter === 'All' || p.category === filter);

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-brand-cream min-h-screen px-6 md:px-12 animate-in fade-in duration-700">
      <header className="max-w-7xl mx-auto mb-16 text-center">
        <h1 id="shop-title" className="font-serif text-5xl md:text-6xl uppercase tracking-[0.2em] mb-4">Shop All</h1>
        <p id="shop-subtitle" className="text-brand-stone text-xs md:text-sm uppercase tracking-widest font-light">Elevated essentials for every day.</p>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mb-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h4 className="font-serif text-lg uppercase tracking-widest mb-6 border-b border-brand-stone/10 pb-2 flex items-center gap-2">
              <Filter size={16} /> Filters
            </h4>
            <div className="flex flex-wrap md:flex-col gap-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs uppercase tracking-widest text-left hover:text-brand-gold transition-colors ${filter === cat ? 'text-brand-charcoal font-bold underline underline-offset-4' : 'text-brand-stone'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 text-[10px] uppercase tracking-widest text-brand-stone">
            <span>{filteredProducts.length} Products</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-brand-charcoal transition-colors">
              Sort by: {sort} <ChevronDown size={12} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-stone/5 mb-4">
                  <Link to={`/product/${product.id}`}>
                    <img
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-item-name-${product.id}] gold jewelry luxury editorial white`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt={product.name}
                    />
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-4 right-4 bg-brand-cream/90 backdrop-blur-sm text-brand-charcoal py-3 uppercase tracking-widest text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-charcoal hover:text-white"
                  >
                    Quick Add
                  </button>
                </div>
                <div className="text-center md:text-left px-2">
                  <h3 id={`shop-item-name-${product.id}`} className="font-serif text-sm uppercase tracking-widest mb-1 italic">
                    <Link to={`/product/${product.id}`} className="hover:text-brand-gold transition-colors">{product.name}</Link>
                  </h3>
                  <p className="text-xs font-light text-brand-stone">$${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
