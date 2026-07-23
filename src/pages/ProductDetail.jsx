import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PRODUCTS } from './Shop';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, ChevronRight, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const containerRef = useRef(null);
  const { id } = useParams();
  const addItem = useCart(state => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');

  // Find product or use first one as fallback
  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant: selectedVariant });
  };

  const images = [
    product.imgId || 'placeholder-1',
    product.imgAltId || 'placeholder-2',
    'placeholder-3',
    'placeholder-4'
  ];
  
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImage, selectedVariant]);

  return (
    <div ref={containerRef} className="flex-1 w-full pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-foreground transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-[600px] md:h-[800px]">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
            {images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 bg-secondary overflow-hidden ${activeImage === img ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'opacity-70 hover:opacity-100'} transition-all`}
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1599643478524 + i * 100}?q=80&w=400&auto=format&fit=crop`}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative bg-secondary overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1599643478524-fb66f7f3bc75?q=80&w=1200&auto=format&fit=crop"
              alt={product.name}
              data-strk-img-id={activeImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col py-0 md:py-8 lg:pr-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-medium">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary" />
              ))}
              <span className="text-sm text-foreground ml-2">(124 Reviews)</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Experience quiet luxury with the {product.name}. Delicately crafted for the modern romantic, it is perfect for everyday elegance or layered for a statement look. 18k gold vermeil over sterling silver ensures lasting shine and hypoallergenic wear.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }} className="space-y-8 mb-12">
            {/* Variant Switcher */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm uppercase tracking-widest font-medium">Metal Finish</label>
                <span className="text-sm text-muted-foreground">{selectedVariant}</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedVariant('Gold')}
                  className={`px-8 py-3 text-sm uppercase tracking-widest border transition-all ${
                    selectedVariant === 'Gold' 
                      ? 'border-primary ring-1 ring-primary bg-secondary/20 font-medium' 
                      : 'border-border hover:border-foreground/50'
                  }`}
                >
                  Gold
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVariant('Silver')}
                  className={`px-8 py-3 text-sm uppercase tracking-widest border transition-all ${
                    selectedVariant === 'Silver' 
                      ? 'border-primary ring-1 ring-primary bg-secondary/20 font-medium' 
                      : 'border-border hover:border-foreground/50'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-border h-14 w-32 shrink-0">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full flex justify-center items-center hover:bg-secondary/50 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full h-full text-center bg-transparent border-none p-0 focus:ring-0 text-sm font-medium"
                />
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-full flex justify-center items-center hover:bg-secondary/50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button type="submit" className="flex-1 h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-medium tracking-[0.2em] uppercase text-sm">
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>
          </form>

          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full border-t border-border">
            <AccordionItem value="description" className="border-border">
              <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                The {product.name} brings an element of effortless sophistication to any outfit. Designed to be a staple in your collection, it marries classic design with a modern edge. Perfect for gifting or a self-purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="details" className="border-border">
              <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Materials & Details</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Base Metal: Recycled 925 Sterling Silver</li>
                  <li>Plating: Extra thick 3 microns 18K Gold</li>
                  <li>Hypoallergenic, nickel-free, lead-free</li>
                  <li>Length: Adjustable 16" - 18" (Necklaces)</li>
                  <li>Weight: Lightweight for comfortable everyday wear</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-border">
              <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                <p className="mb-2"><strong>Free Worldwide Shipping</strong> on orders over $100. Standard shipping takes 3-5 business days within the US, and 7-14 days internationally.</p>
                <p><strong>Returns:</strong> We accept returns in unworn condition within 30 days of receipt. Custom or engraved styles are final sale.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-32 pt-16 border-t border-border/40">
        <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
            <div key={related.id} className="group cursor-pointer flex flex-col">
              <Link to={`/product/${related.id}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                <img 
                  src="https://images.unsplash.com/photo-1599643478524-fb66f7f3bc75?q=80&w=800&auto=format&fit=crop"
                  alt={related.name}
                  data-strk-img-id={`related-${related.imgId}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <Link to={`/product/${related.id}`} className="block">
                <h3 className="font-serif text-base tracking-wide uppercase group-hover:text-primary transition-colors truncate">{related.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{formatPrice(related.price)}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}