import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../lib/data.js';
import { useCart } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const p = products.find(x => x.id === id) || products[0];
  
  useEffect(() => { 
    window.scrollTo(0,0); 
    return ImageHelper.loadImages(strkImgConfig, containerRef.current); 
  }, [id]);

  return (
    <div className='pt-32 pb-24 px-6 max-w-7xl mx-auto text-left' ref={containerRef}>
      <Link to='/shop' className='inline-flex items-center text-xs uppercase tracking-widest text-brand-muted mb-12'>
        <ArrowLeft className='w-4 h-4 mr-2'/> Back
      </Link>
      <div className='grid md:grid-cols-2 gap-16'>
        <div className='aspect-[3/4] bg-brand-stone/10 overflow-hidden'>
          <img 
            data-strk-img-id={`pm-${p.id}`} 
            data-strk-img={`[${p.titleId}] gold model jewelry`} 
            data-strk-img-ratio='3x4' 
            data-strk-img-width='1000' 
            src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"/%3E' 
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h1 className='font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4'>{p.name}</h1>
          <p className='font-serif text-3xl mb-8'>${p.price}.00</p>
          <p className='text-brand-muted text-lg leading-relaxed mb-12'>{p.description}</p>
          <button onClick={() => addToCart(p)} className='w-full bg-brand-dark text-white py-5 uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors'>Add to Bag</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
