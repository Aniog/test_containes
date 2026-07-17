import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';
import { Star, Truck, Shield, RotateCcw, Plus, Minus, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const containerRef = useRef(null);
  const { id } = useParams();
  const product = SEED_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('18K Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('Description');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImageIndex, activeAccordion]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl font-serif mb-6">Product not found</h1>
        <Link to="/shop" className="uppercase-spacing text-xs font-bold border-b border-velmora-primary pb-1">Back to Shop</Link>
      </div>
    );
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: 'Crafted in 18K Gold Vermeil (a thick layer of 18K gold over sterling silver). Avoid contact with perfumes, lotions, and chlorine. Store in your Velmora pouch when not in use.' },
    { title: 'Shipping & Returns', content: 'Free worldwide express shipping on orders over $100. 30-day hassle-free returns. Each piece comes gifted-ready in signature sustainable packaging.' },
  ];

  const handleAddToCart = () => {
    // Add logic to include quantity if our context supported it in one go, 
    // for now we'll just add the item (quantity logic handled in drawer)
    addToCart(product, selectedVariant);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-velmora-muted mb-12">
        <Link to="/" className="hover:text-velmora-accent">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-velmora-accent">Collection</Link>
        <span>/</span>
        <span className="text-velmora-primary font-bold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="md:w-20 hidden md:flex flex-col gap-4">
            {[0, 1].map((idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`aspect-[3/4] border transition-all ${activeImageIndex === idx ? 'border-velmora-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <div 
                   className="w-full h-full bg-cover bg-center"
                   data-strk-bg={`gold jewelry ${product.name} studio ${idx + 1}`}
                   data-strk-bg-id={`product-${product.id}-thumb-${idx}`}
                   data-strk-bg-ratio="3x4"
                   data-strk-bg-width="100"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 relative aspect-[3/4] bg-velmora-surface overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-cover bg-center"
                data-strk-bg={`luxury gold jewelry ${product.name} main ${activeImageIndex + 1}`}
                data-strk-bg-id={`product-${product.id}-main-${activeImageIndex}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="1200"
              />
            </AnimatePresence>
            
            {/* Mobile Nav arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity">
                 <button onClick={() => setActiveImageIndex(i => (i === 0 ? 1 : 0))} className="p-2 bg-white/80 rounded-full"><ChevronLeft size={20}/></button>
                 <button onClick={() => setActiveImageIndex(i => (i === 0 ? 1 : 0))} className="p-2 bg-white/80 rounded-full"><ChevronRight size={20}/></button>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest leading-tight">{product.name}</h1>
            <div className="flex items-center gap-6">
                <span className="text-2xl">{formatPrice(product.price)}</span>
                <div className="flex items-center gap-2">
                    <div className="flex text-velmora-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-xs text-velmora-muted uppercase tracking-widest">48 Reviews</span>
                </div>
            </div>
            <p className="text-velmora-muted leading-relaxed font-light">
                {product.description}
            </p>
          </div>

          <div className="w-full h-[1px] bg-velmora-surface" />

          {/* Variants */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-[10px] font-bold">Finish: <span className="font-light text-velmora-muted">{selectedVariant}</span></p>
            <div className="flex gap-3">
               {['18K Gold', 'Sterling Silver'].map(variant => (
                  <button 
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-3 border text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all ${
                      selectedVariant === variant ? 'border-velmora-primary bg-velmora-primary text-white' : 'border-velmora-surface hover:border-velmora-accent'
                  }`}
                  >
                   <div className={`w-3 h-3 rounded-full ${variant.includes('Gold') ? 'bg-velmora-accent' : 'bg-gray-300'}`} />
                   {variant}
                  </button>
               ))}
            </div>
          </div>

          {/* Quantity & ATC */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border border-velmora-surface px-4 py-4 md:w-32 justify-between">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-velmora-accent"><Minus size={16} /></button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="hover:text-velmora-accent"><Plus size={16} /></button>
            </div>
            <button 
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-accent text-white py-4 uppercase tracking-[0.2em] text-sm font-bold shadow-xl hover:bg-velmora-primary transition-all duration-500 transform hover:-translate-y-1"
            >
                Add to Bag
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
                { icon: <Truck size={18} />, text: "Global Ship" },
                { icon: <Shield size={18} />, text: "Warranty" },
                { icon: <RotateCcw size={18} />, text: "30-Day Easy" },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="text-velmora-accent opacity-70">{item.icon}</div>
                    <span className="text-[9px] uppercase tracking-widest text-velmora-muted font-medium">{item.text}</span>
                </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="pt-8 space-y-4 divide-y divide-velmora-surface">
             {accordions.map((acc) => (
               <div key={acc.title} className="pt-4 first:pt-0">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.title ? '' : acc.title)}
                    className="w-full flex items-center justify-between py-2 group"
                  >
                    <span className="uppercase tracking-[0.2em] text-[11px] font-bold group-hover:text-velmora-accent transition-colors">
                        {acc.title}
                    </span>
                    <Plus size={16} className={`transition-transform duration-300 ${activeAccordion === acc.title ? 'rotate-45' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === acc.title && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="py-4 text-sm text-velmora-muted font-light leading-relaxed">
                                {acc.content}
                            </p>
                        </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-32 pt-24 border-t border-velmora-surface">
         <h2 className="text-4xl font-serif italic mb-16 text-center">You May Also Like</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SEED_PRODUCTS.slice(0, 4).map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group space-y-6">
                    <div className="aspect-[3/4] overflow-hidden bg-velmora-surface relative">
                         <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            data-strk-bg={`gold jewelry ${p.name} editorial`}
                            data-strk-bg-id={`related-${p.id}`}
                            data-strk-bg-ratio="3x4"
                            data-strk-bg-width="400"
                        />
                    </div>
                    <div className="text-center space-y-1">
                        <h3 className="font-serif uppercase tracking-widest text-xs group-hover:text-velmora-accent transition-colors">{p.name}</h3>
                        <p className="text-sm font-light">{formatPrice(p.price)}</p>
                    </div>
                </Link>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;
