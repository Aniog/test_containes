import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProductById, fetchProducts } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { Star, ChevronDown, ChevronUp, Share2, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-left"
      >
        <span>{title}</span>
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
            <div className="pt-4 text-xs text-foreground/60 leading-loose tracking-wider">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState('Gold');
  const [qty, setQty] = useState(1);
  const [related, setRelated] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const p = await fetchProductById(id);
        setProduct(p);
        const rel = await fetchProducts(p.data.category);
        setRelated(rel.filter(item => item.id !== id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, related]);

  if (loading || !product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="md:col-span-7 flex flex-col-reverse md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
               {[1,2,3].map(i => (
                 <div key={i} className="w-20 md:w-24 aspect-[3/4] bg-secondary flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
                    <img 
                      data-strk-img-id={`pdp-thumb-${id}-${i}`}
                      data-strk-img={`[pdp-name-${id}] jewelry thumbnail ${i}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                 </div>
               ))}
            </div>
            <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden relative">
               <img 
                 data-strk-img-id={`pdp-main-${id}`}
                 data-strk-img={`[pdp-name-${id}] high end jewelry editorial product`}
                 data-strk-img-ratio="3x4"
                 data-strk-img-width="1200"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                 alt={product.data.name}
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-6 right-6 flex flex-col space-y-4">
                 <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:text-accent transition-colors"><Heart size={18} strokeWidth={1.5} /></button>
                 <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:text-accent transition-colors"><Share2 size={18} strokeWidth={1.5} /></button>
               </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">{product.data.category}</p>
              <h1 id={`pdp-name-${id}`} className="text-4xl md:text-5xl font-serif leading-tight">{product.data.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-serif text-accent">\${product.data.price}</p>
                <div className="flex items-center space-x-1 text-accent scale-75 origin-right">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="text-foreground opacity-40 text-xs ml-2 tracking-widest">(24 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed font-light">
              {product.data.description}
            </p>

            {/* Variants */}
            <div className="space-y-4 pt-6">
              <p className="text-[10px] uppercase tracking-widest font-bold">Select Tone: <span className="opacity-50 font-medium ml-2">{variant}</span></p>
              <div className="flex space-x-3">
                {product.data.variants?.map(v => (
                  <button 
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      variant === v ? "bg-foreground text-white border-foreground shadow-lg" : "bg-transparent text-foreground border-border hover:border-accent"
                    )}
                  >
                    {v}
                  </button>
                )) || <p className="text-[10px] opacity-40">Gold Finish only</p>}
              </div>
            </div>

            {/* Qty & Add to Cart */}
            <div className="flex items-stretch space-x-4 pt-4">
              <div className="flex items-center border border-border px-6 py-4 space-x-8">
                <button onClick={() => setQty(prev => Math.max(1, prev - 1))} className="hover:text-accent"><ChevronDown size={14} /></button>
                <span className="text-sm font-medium w-4 text-center">{qty}</span>
                <button onClick={() => setQty(prev => prev + 1)} className="hover:text-accent"><ChevronUp size={14} /></button>
              </div>
              <button 
                onClick={() => addToCart(product, variant, qty)}
                className="flex-grow bg-foreground text-white py-4 text-[11px] uppercase tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-xl"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-12">
              <Accordion title="Description">
                A masterpiece of understated elegance. This piece features our signature refinement, designed to transition seamlessly from morning edit to evening attire. Hand-finished for the perfect soft-glow sheen.
              </Accordion>
              <Accordion title="Materials & Care">
                {product.data.details?.materials || "18K Gold Plated Brass, Swarovski Crystals."}
                <br /><br />
                {product.data.details?.care || "Wipe with a soft cloth after each use. Store your jewelry individually to avoid scratches and tangles."}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Complimentary worldwide shipping on all orders over \$100. Delivered in our signature eco-friendly gift box within 3-5 business days. 30-day effortless returns for store credit or refund.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div>
          <h2 className="text-3xl font-serif text-center mb-16 tracking-wide">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map(item => (
              <div key={item.id} className="group">
                <Link to={`/product/${item.id}`} className="block aspect-[3/4] bg-secondary overflow-hidden mb-6 relative">
                  <img 
                    data-strk-img-id={`rel-img-${item.id}`}
                    data-strk-img={`[rel-name-${item.id}] luxury jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={item.data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <h3 id={`rel-name-${item.id}`} className="font-serif uppercase tracking-widest text-xs mb-2 text-center group-hover:text-accent transition-colors">
                  {item.data.name}
                </h3>
                <p className="font-serif text-sm opacity-60 text-center">\${item.data.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
