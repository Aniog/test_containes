import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';
import { Minus, Plus, Star, ChevronLeft, ChevronRight, Ruler, Droplets, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useStore();
  
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);
  
  const [quantity, setQuantity] = useState(1);
  const [activeTone, setActiveTone] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, activeImage]);

  const handleAddToCart = () => {
    addToCart(product, quantity, activeTone);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (Desktop) */}
            <div className="hidden md:flex flex-col gap-4 w-20">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative aspect-[4/5] bg-muted overflow-hidden border-2 transition-colors",
                    activeImage === idx ? "border-foreground" : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    data-strk-img-id={`prod-${product.id}-thumb-${idx}`}
                    data-strk-img={`[pd-desc] [pd-name] close up detail ${idx}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-[4/5] bg-muted overflow-hidden group">
              <img
                data-strk-img-id={`prod-${product.id}-main-${activeImage}`}
                data-strk-img={`[pd-desc] [pd-name] main view ${activeImage}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity md:hidden"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity md:hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Mobile Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-y-1/2 flex gap-2 md:hidden">
                 {[0, 1, 2].map((idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "w-2 h-2 rounded-full bg-background transition-opacity", 
                        activeImage === idx ? "opacity-100" : "opacity-40"
                      )} 
                    />
                 ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < Math.floor(product.rating) ? "fill-primary" : "fill-transparent")} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.reviews} Reviews</span>
            </div>

            <h1 id="pd-name" className="font-serif text-3xl md:text-5xl mb-4 tracking-wide uppercase">{product.name}</h1>
            <p className="text-2xl font-light mb-8">${product.price.toFixed(2)}</p>
            
            <p id="pd-desc" className="text-muted-foreground leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest font-medium">Tone: {activeTone}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTone('Gold')}
                  className={cn(
                    "px-8 py-3 text-sm tracking-wider uppercase border transition-all",
                    activeTone === 'Gold' 
                      ? "border-foreground bg-primary/10" 
                      : "border-border hover:border-foreground/50 bg-background"
                  )}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#D4AF37] mr-2 shadow-sm align-baseline" />
                  Gold
                </button>
                <button
                  onClick={() => setActiveTone('Silver')}
                  className={cn(
                    "px-8 py-3 text-sm tracking-wider uppercase border transition-all",
                    activeTone === 'Silver' 
                      ? "border-foreground bg-secondary" 
                      : "border-border hover:border-foreground/50 bg-background"
                  )}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#C0C0C0] mr-2 shadow-sm align-baseline" />
                  Silver
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border sm:w-32 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex justify-center items-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground h-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex justify-center items-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground h-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                className="flex-1 h-14 uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 rounded-none border-none"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-widest font-medium hover:no-underline py-6">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  <p className="mb-4">{product.materials}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Droplets className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span>Water resistant but we recommend removing before swimming or showering to maintain the plating.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span>Store in the provided pouch. Avoid direct contact with perfumes and lotions.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-widest font-medium hover:no-underline py-6">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  <p className="mb-2"><strong>Free Worldwide Shipping</strong> on all orders.</p>
                  <p className="mb-4">Orders are processed within 1-2 business days. Delivery typically takes 3-5 business days for domestic orders and 7-14 for international.</p>
                  <p>We accept returns within 30 days of receipt in unworn condition with original packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex justify-between items-end mb-10">
            <h2 id="related-title" className="font-serif text-3xl">You May Also Like</h2>
            <Link to="/shop" className="text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors hidden md:block">
              Shop All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((relProduct) => (
              <div key={relProduct.id} className="group flex flex-col relative">
                <Link to={`/product/${relProduct.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`rel-${relProduct.id}`}
                    data-strk-img={`[rel-prod-${relProduct.id}-name] [related-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relProduct.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(relProduct);
                      }}
                      className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-[80%] uppercase tracking-widest text-xs"
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <Link to={`/product/${relProduct.id}`} className="flex flex-col flex-1">
                  <h3 id={`rel-prod-${relProduct.id}-name`} className="font-medium text-sm md:text-base uppercase tracking-wider mb-1 line-clamp-2">
                    {relProduct.name}
                  </h3>
                  <p className="text-muted-foreground mt-auto">${relProduct.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}