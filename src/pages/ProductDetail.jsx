import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { products } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [tone, setTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('Description');
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
        <Link to="/shop" className="text-accent underline uppercase tracking-widest text-xs">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `Primary Material: ${product.materials}. Avoid contact with water, perfumes, and body oils to maintain shime.` },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. Unworn jewelry in original packaging can be returned within 30 days.' },
  ];

  return (
    <div ref={containerRef} className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent font-sans mb-12 group">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary/30 overflow-hidden relative group">
              <img
                data-strk-img-id="main-product-img"
                data-strk-img={`[pd-name] close up fine jewelry photography model studio product shot`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="aspect-[3/4] bg-secondary/20 cursor-pointer overflow-hidden group">
                  <img
                     data-strk-img-id={`pd-thumb-${idx}`}
                     data-strk-img={`[pd-name] macro detail angle model styled shot idx-${idx}`}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="300"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans">{product.category}</span>
                <div className="flex items-center space-x-1 text-accent">
                   <Star size={12} fill="currentColor" />
                   <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">4.9 (127 Reviews)</span>
                </div>
              </div>
              <h1 id="pd-name" className="text-4xl md:text-5xl font-serif tracking-tight uppercase">{product.name}</h1>
              <p className="font-serif text-3xl">${product.price}</p>
            </div>

            <p className="text-muted-foreground font-sans leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            {/* Selection */}
            <div className="mb-10 space-y-6">
               <div className="space-y-4">
                 <span className="text-[10px] uppercase tracking-widest text-foreground/70 font-sans">Material Tone</span>
                 <div className="flex space-x-4">
                   {['Gold', 'Silver'].map(t => (
                     <button
                       key={t}
                       onClick={() => setTone(t)}
                       className={`px-8 py-3 text-[10px] uppercase tracking-widest border font-sans transition-all ${tone === t ? 'bg-foreground text-background border-foreground' : 'border-hairline border-accent/20 text-muted-foreground hover:border-accent'}`}
                     >
                       {t}
                     </button>
                   ))}
                 </div>
               </div>
            </div>

            <button
              onClick={() => addToCart(product, tone)}
              className="w-full bg-foreground text-background py-5 text-xs uppercase tracking-[0.4em] mb-12 hover:bg-accent transition-all flex items-center justify-center space-x-3 group"
            >
              <ShoppingBag size={18} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              <span>Add to Bag</span>
            </button>

            {/* Accordions */}
            <div className="border-t border-hairline border-accent/20">
              {accordions.map((acc) => {
                const isOpen = activeAccordion === acc.title;
                return (
                  <div key={acc.title} className="border-b border-hairline border-accent/20">
                    <button
                      onClick={() => setActiveAccordion(isOpen ? null : acc.title)}
                      className="w-full flex items-center justify-between py-5 text-[10px] uppercase tracking-widest font-sans hover:text-accent transition-colors"
                    >
                      <span>{acc.title}</span>
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm text-muted-foreground font-sans leading-loose tracking-wide">
                            {acc.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 py-8 border-y border-hairline border-accent/10">
               <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Hypoallergenic</span>
               </div>
               <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>30-Day Guarantee</span>
               </div>
               <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Sustainably Sourced</span>
               </div>
               <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Gift Wrapped</span>
               </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 pt-24 border-t border-hairline border-accent/20">
          <h2 className="text-3xl font-serif uppercase tracking-tight mb-12 text-center">Complete the Look</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
