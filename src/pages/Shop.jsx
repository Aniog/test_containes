import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../lib/data.js';
import { useCart } from '../context/CartContext.jsx';

const Shop = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div className='pt-32 pb-24 px-6 md:px-12' ref={containerRef}>
      <div className='max-w-7xl mx-auto mb-16 text-center text-left'>
        <h1 id='shop-title' className='font-serif text-5xl md:text-7xl mb-6'>Collections</h1>
        <p className='text-brand-muted max-w-xl mx-auto font-light tracking-wide'>
          Explore our range of demi-fine jewelry. Each piece is designed to be layered, stacked, and worn every day.
        </p>
      </div>

      <div className='max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center py-6 border-y border-brand-dark/5 gap-6'>
        <div className='flex space-x-8'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className='flex items-center space-x-8 text-xs uppercase tracking-[0.2em] text-brand-muted'>
          <button className='flex items-center hover:text-brand-dark transition-colors'>
            Sort <ChevronDown className='w-3 h-3 ml-2' />
          </button>
          <button className='flex items-center hover:text-brand-dark transition-colors'>
            Filter <SlidersHorizontal className='w-4 h-4 ml-2' />
          </button>
        </div>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='group flex flex-col'>
            <div className='relative aspect-[3/4] bg-brand-stone/10 overflow-hidden mb-6'>
              <Link to={}>
                <img
                  data-strk-img-id={}
                  data-strk-img={}
                  data-strk-img-ratio='3x4'
                  data-strk-img-width='700'
                  src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"/%3E'
                  alt={product.name}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </Link>
              <button 
                onClick={() => addToCart(product)}
                className='absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-4 uppercase tracking-widest text-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-dark hover:text-white'
              >
                Add to Bag
              </button>
            </div>
            <h3 id={product.titleId} className='font-serif text-xl uppercase tracking-wider mb-2'>{product.name}</h3>
            <p className='text-brand-muted font-light mt-auto'>${product.price}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;