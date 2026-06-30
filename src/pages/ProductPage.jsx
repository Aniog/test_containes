import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronRight, Truck, ShieldCheck, Heart, Share2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductPage = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('Description');

  const product = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-40 bg-white">
      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-12 flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="w-4 h-[1px] bg-muted-foreground/30" />
        <Link to="/shop" className="hover:text-foreground transition-colors">Collection</Link>
        <span className="w-4 h-[1px] bg-muted-foreground/30" />
        <span className="text-foreground tracking-[0.4em]">{product.name}</span>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        {/* Left: Gallery */}
        <div className="space-y-8">
          <motion.div 
            key={`${id}-${selectedImage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-[#F9F8F6] overflow-hidden relative"
          >
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              data-strk-img-id={`prod-detail-main-${id}-${selectedImage}`}
              data-strk-img={product.imageQueries[selectedImage]}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="grid grid-cols-4 gap-6">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={cn(
                  "aspect-[4/5] bg-[#F9F8F6] overflow-hidden border transition-all duration-500",
                  selectedImage === idx ? "border-primary grayscale-0 shadow-lg" : "border-transparent grayscale-[30%] opacity-50 hover:opacity-100"
                )}
              >
                <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col pt-4">
          <div className="space-y-8 pb-12 border-b border-muted/60">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70">{product.category}</p>
              <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-[1.1]">{product.name}</h1>
              <div className="flex justify-between items-center pt-2">
                <p className="text-2xl font-serif italic text-foreground/90">${product.price}.00</p>
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#D4AF37" strokeWidth={0} />)}
                  <span className="text-[10px] font-bold uppercase tracking-widest ml-3 text-muted-foreground/60">(48)</span>
                </div>
              </div>
            </div>

            <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-md">
              {product.desc} Meticulously crafted with a focus on form and texture, this piece represents the pinnacle of demi-fine jewelry. Designed for the woman who appreciates the beauty in simplicity.
            </p>

            <div className="space-y-10">
              <div className="space-y-5">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em]">Material Finish</label>
                <div className="flex gap-3">
                  <button className="px-8 py-4 bg-foreground text-background text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">18K Gold</button>
                  <button className="px-8 py-4 border border-muted text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all">Sterling Silver</button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="premium" 
                  className="flex-1 h-16 text-[11px] font-bold tracking-[0.3em] uppercase bg-foreground text-background hover:bg-neutral-800"
                  onClick={() => addToCart(product)}
                >
                  Acquire Piece
                </Button>
                <button className="w-16 h-16 border border-muted flex items-center justify-center hover:bg-neutral-50 transition-colors group">
                  <Heart size={20} strokeWidth={1} className="group-hover:fill-primary/20 group-hover:text-primary transition-all" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-y-10 py-12 border-b border-muted/60">
            <div className="flex items-start gap-4">
              <Truck size={18} strokeWidth={1.5} className="text-primary/70 mt-1" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Express Shipping</p>
                <p className="text-[10px] text-muted-foreground lowercase italic font-serif">2-4 Business Days</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck size={18} strokeWidth={1.5} className="text-primary/70 mt-1" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em]">2 Year Guarantee</p>
                <p className="text-[10px] text-muted-foreground lowercase italic font-serif">Luster Protection</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Info size={18} strokeWidth={1.5} className="text-primary/70 mt-1" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Fair Pricing</p>
                <p className="text-[10px] text-muted-foreground lowercase italic font-serif">DTC Transparent Pricing</p>
              </div>
            </div>
            <div className="flex items-start gap-4 cursor-pointer hover:opacity-100 opacity-60 transition-opacity">
              <Share2 size={18} strokeWidth={1.5} className="text-foreground mt-1" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Share Piece</p>
                <p className="text-[10px] text-muted-foreground lowercase italic font-serif">Curate your wishlist</p>
              </div>
            </div>
          </div>

          {/* Details Accordion */}
          <div className="divide-y divide-muted/60">
            {['The Design Details', 'Composition & Origin', 'Packaging & Returns'].map((title) => (
              <div key={title} className="group">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === title ? '' : title)}
                  className="w-full flex justify-between items-center py-8 text-[11px] font-bold uppercase tracking-[0.25em] group-hover:text-primary transition-colors text-left"
                >
                  {title}
                  <span className={cn("text-lg font-light transition-transform duration-500", activeAccordion === title ? "rotate-45" : "rotate-0")}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {activeAccordion === title && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 text-sm text-neutral-500 font-light leading-[1.8] space-y-6">
                        <p>Our commitment to quiet luxury begins with the materials we source. Every Velmora piece underwent twelve months of wear-testing before release to ensure the 18K gold layer maintains its deep color and luster through your daily rituals.</p>
                        <ul className="space-y-4">
                          <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            <span>18K Gold Vermeil over a specialized hypoallergenic base</span>
                          </li>
                          <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            <span>Micro-layered surface for 3x longer tarnish resistance</span>
                          </li>
                          <li className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            <span>Ethically crafted in our certified fair-wage studio</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended for You */}
      <section className="mt-48 pt-32 border-t border-muted px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70 text-center md:text-left">Complement your Look</p>
            <h2 className="text-4xl md:text-6xl font-serif text-center md:text-left">Pairs Effortlessly With</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] mx-auto md:mx-0">
            View Full Atelier
            <span className="w-12 h-[1px] bg-foreground origin-left group-hover:scale-x-150 transition-transform duration-500" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
