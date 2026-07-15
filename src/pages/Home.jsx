import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, ugcItems, testimonials } from '../lib/data.js';
import { useCart } from '../context/CartContext.jsx';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  useEffect(() => { 
    return ImageHelper.loadImages(strkImgConfig, containerRef.current); 
  }, []);

  return (
    <div ref={containerRef} className='text-left'>
      <section className='relative h-screen w-full overflow-hidden flex items-center justify-center'>
        <div 
          className='absolute inset-0 bg-brand-dark/20 z-10' 
          data-strk-bg-id='hero' 
          data-strk-bg='[hero-t] jewelry model' 
          data-strk-bg-ratio='16x9' 
          data-strk-bg-width='1920'
        />
        <div className='relative z-20 text-center px-6 text-white'>
          <h1 id='hero-t' className='font-serif text-5xl md:text-7xl mb-6'>Crafted to be Treasured</h1>
          <Link to='/shop' className='inline-block bg-white text-brand-dark px-10 py-5 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-white transition-all'>Shop the Collection</Link>
        </div>
      </section>

      <div className='bg-brand-stone/20 py-4 px-6'>
        <div className='max-w-7xl mx-auto flex justify-between text-[10px] uppercase tracking-widest text-brand-muted'>
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      <section className='py-24 px-6 md:px-12 max-w-7xl mx-auto'>
         <h2 id='bt-t' className='font-serif text-4xl mb-12'>Bestsellers</h2>
         <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
           {products.map(p => (
             <div key={p.id} className='group'>
               <div className='relative aspect-[3/4] bg-brand-stone/10 mb-4 overflow-hidden'>
                 <Link to={`/product/${p.id}`}>
                   <img 
                    data-strk-img-id={`p-${p.id}`} 
                    data-strk-img={`[${p.titleId}] gold jewelry`} 
                    data-strk-img-ratio='3x4' 
                    data-strk-img-width='500' 
                    src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"/%3E' 
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                   />
                 </Link>
                 <button onClick={() => addToCart(p)} className='absolute bottom-0 w-full bg-white/90 py-3 uppercase tracking-widest text-[10px] translate-y-full group-hover:translate-y-0 transition-transform'>Quick Add</button>
               </div>
               <h3 id={p.titleId} className='font-serif text-lg uppercase tracking-wider'>{p.name}</h3>
               <p className='text-brand-muted'>${p.price}</p>
             </div>
           ))}
         </div>
      </section>

      <section className='py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
        <div className='aspect-[4/5] bg-brand-stone/20 overflow-hidden'>
          <img data-strk-img-id='story' data-strk-img='[story-t] model elegant' data-strk-img-ratio='4x5' data-strk-img-width='800' src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"/%3E' className='w-full h-full object-cover'/>
        </div>
        <div className='space-y-6'>
          <h2 id='story-t' className='font-serif text-4xl md:text-5xl'>Quiet Luxury</h2>
          <p className='text-brand-muted leading-relaxed font-light'>Velmora is defined by understated elegance. Our pieces are crafted using 18K gold plating and semi-precious stones, designed to be worn and loved for years.</p>
          <Link to='/shop' className='inline-block border-b border-brand-dark pb-1 text-sm uppercase tracking-widest'>Our Story</Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
