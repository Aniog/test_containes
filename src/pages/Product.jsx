import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCartStore();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  // Use dummy images for gallery (they'll be replaced by strk-img)
  const images = Array(4).fill(0);

  useEffect(() => {
    try {
      if (typeof ImageHelper !== 'undefined') {
        const timer = setTimeout(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }, 100);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error("Image loader error", e);
    }
  }, [id, activeImage]); // re-run if image changes to ensure new element is processed

  if (!product) {
    return <div className="pt-32 min-h-screen text-center"><h1 className="text-2xl font-serif">Product not found</h1></div>;
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (relatedProducts.length < 4) {
      const extra = PRODUCTS.filter(p => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length);
      relatedProducts.push(...extra);
  }

  return (
    <div ref={containerRef} className="pt-24 pb-24 animate-in fade-in duration-500">
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 max-w-7xl mb-8 flex text-xs uppercase tracking-widest text-muted-foreground items-center space-x-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)]">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar scroll-smooth">
              {images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 bg-secondary overflow-hidden transition-all ${activeImage === i ? 'ring-1 ring-offset-2 ring-foreground/20' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title] jewelry macro shot detail angle ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="object-cover w-full h-full"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] md:aspect-[4/5] bg-secondary relative overflow-hidden">
                <img
                    key={activeImage} // force re-render for new strk ID
                    alt={product.name}
                    data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                    data-strk-img={`[pdp-title] jewelry premium styling`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1200"
                    className="object-cover w-full h-full animate-in fade-in duration-300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col py-0 lg:py-12">
            
            {/* Title & Price */}
            <div className="mb-8">
              <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xl font-medium tracking-wide">${product.price}</span>
                <span className="text-muted-foreground">|</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-accent">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-4">{product.reviews} Reviews</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-light italic">Pay in 4 interest-free payments of ${(product.price / 4).toFixed(2)}</p>
            </div>

            <div className="w-full h-[1px] bg-border mb-8" />

            {/* Variants */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Metal Type</span>
                <span className="text-xs uppercase tracking-widest">{variant}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-12 h-12 rounded-full border bg-gradient-to-tr from-yellow-500 to-yellow-200 transition-all ${variant === 'gold' ? 'ring-2 ring-offset-2 ring-foreground/20 border-transparent' : 'border-border/50 hover:scale-105'}`}
                  aria-label="Gold variant"
                />
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-12 h-12 rounded-full border bg-gradient-to-tr from-gray-300 to-gray-100 transition-all ${variant === 'silver' ? 'ring-2 ring-offset-2 ring-foreground/20 border-transparent' : 'border-border/50 hover:scale-105'}`}
                  aria-label="Silver variant"
                />
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-12 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  readOnly
                  className="w-full text-center bg-transparent border-none focus:ring-0 text-sm font-medium"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest text-sm shadow-sm transition-all"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-muted-foreground">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {product.longDescription || product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-muted-foreground">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm space-y-4">
                  <p><strong className="text-foreground font-medium block mb-1">Materials</strong> {product.material}</p>
                  <p><strong className="text-foreground font-medium block mb-1">Jewelry Care</strong> To preserve the integrity of your piece, avoid contact with perfumes, lotions, and harsh chemicals. We recommend removing your jewelry before swimming, showering, or exercising.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-muted-foreground">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm space-y-4">
                  <p><strong className="text-foreground font-medium block mb-1">Shipping</strong> Free standard shipping worldwide. Express options available at checkout. Orders process within 1-2 business days.</p>
                  <p><strong className="text-foreground font-medium block mb-1">Returns</strong> We accept returns for unworn pieces in their original condition within 30 days of delivery.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 max-w-7xl mt-32">
        <h2 className="text-2xl font-serif uppercase tracking-widest text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((relProduct) => (
              <div key={relProduct.id} className="group flex flex-col">
                <Link to={`/product/${relProduct.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                  <img
                    alt={relProduct.name}
                    data-strk-img-id={`pdp-related-${relProduct.id}`}
                    data-strk-img={`[pdp-rel-title-${relProduct.id}] jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm font-sans uppercase tracking-widest text-xs h-10"
                    >
                      View Details
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 text-center">
                  <h3 id={`pdp-rel-title-${relProduct.id}`} className="font-serif uppercase tracking-wider text-sm leading-snug">
                    <Link to={`/product/${relProduct.id}`} onClick={() => window.scrollTo(0,0)}>{relProduct.name}</Link>
                  </h3>
                  <span className="font-medium text-sm tracking-wide mt-1">${relProduct.price}</span>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Product;