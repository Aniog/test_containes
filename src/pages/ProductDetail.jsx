import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../lib/CartContext';
import { products } from '../lib/data';
import { cn } from '../lib/utils';

const strkImgConfig = {};

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    // Reset state on route change
    setQuantity(1);
    setActiveAccordion('description');
    setActiveImageIndex(0);
    
    // Load images
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="underline underline-offset-4 hover:text-accent">Return to Shop</Link>
      </div>
    );
  }

  // Simulate multiple images based on the IDs we have
  const images = [
    { id: `${product.id}-img-1`, query: `[product-title] close up jewelry on subtle background` },
    { id: `${product.id}-img-2`, query: `[product-title] worn on model jewelry` },
    { id: `${product.id}-img-3`, query: `[product-title] detail shot jewelry packaging` },
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (name) => {
    if (activeAccordion === name) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(name);
    }
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-28">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "relative aspect-[4/5] bg-secondary w-20 flex-shrink-0 transition-opacity",
                  activeImageIndex === idx ? "opacity-100 ring-1 ring-foreground ring-offset-2" : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.title} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`thumb-${img.id}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="w-full relative aspect-[4/5] bg-secondary flex-grow">
            {images.map((img, idx) => (
              <img
                key={idx}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.title} main view ${idx + 1}`}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  activeImageIndex === idx ? "opacity-100 relative z-10" : "opacity-0 z-0"
                )}
                data-strk-img-id={`main-${img.id}`}
                data-strk-img={img.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 id="product-title" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest mb-4">
            {product.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl">${product.price}</p>
            <div className="flex text-accent">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">(12 Reviews)</span>
          </div>
          
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>
          
          {/* Variants */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4 text-sm uppercase tracking-wider">
              <span>Finish: <span className="text-muted-foreground">{selectedVariant}</span></span>
            </div>
            <div className="flex gap-4">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                    variant === 'Gold' ? "bg-amber-200" : "bg-zinc-300",
                    selectedVariant === variant ? "ring-2 ring-offset-4 ring-foreground" : "hover:scale-105 opacity-80"
                  )}
                  aria-label={`Select ${variant} finish`}
                />
              ))}
            </div>
          </div>
          
          {/* Add to Cart Group */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-border shrink-0">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-secondary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-secondary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-foreground text-background uppercase tracking-widest text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
          
          {/* Accordions */}
          <div className="border-t border-border border-b">
            {/* Description Accordion */}
            <div className="border-b border-border last:border-b-0">
              <button 
                className="w-full py-6 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                onClick={() => toggleAccordion('description')}
              >
                Description
                {activeAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                activeAccordion === 'description' ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              )}>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Materials & Care Accordion */}
            <div className="border-b border-border last:border-b-0">
              <button 
                className="w-full py-6 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                onClick={() => toggleAccordion('materials')}
              >
                Materials & Care
                {activeAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                activeAccordion === 'materials' ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              )}>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.details}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">To preserve the life of your jewelry, prevent it from coming into contact with water, perfume, lotion and sweat.</p>
              </div>
            </div>

            {/* Shipping Accordion */}
            <div className="border-b border-border last:border-b-0">
              <button 
                className="w-full py-6 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                onClick={() => toggleAccordion('shipping')}
              >
                Shipping & Returns
                {activeAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                activeAccordion === 'shipping' ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              )}>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">We offer free worldwide shipping on orders over $100. Standard shipping takes 3-5 business days.</p>
                <p className="text-muted-foreground text-sm leading-relaxed">We accept returns in unworn condition within 30 days of receipt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 id="related-title" className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={`related-${p.id}`} className="group cursor-pointer">
                <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={`related-pri-${p.id}`}
                    data-strk-img={`[related-product-title-${p.id}] close up jewelry on subtle background`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${p.title} worn`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    data-strk-img-id={`related-sec-${p.id}`}
                    data-strk-img={`[related-product-title-${p.id}] worn on model jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(p);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-background/95 text-foreground py-3 uppercase tracking-widest text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    Quick Add — ${p.price}
                  </button>
                </Link>
                <Link to={`/product/${p.id}`} className="block text-center">
                  <h3 id={`related-product-title-${p.id}`} className="font-serif text-lg mb-1">{p.title}</h3>
                  <p className="text-muted-foreground">${p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}