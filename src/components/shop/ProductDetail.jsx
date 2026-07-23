import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { cn } from '../../lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('18k Gold Plated');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id) || products[0]; // fallback to first product
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setActiveImageIndex(0);
    window.scrollTo(0, 0);

    const frameId = window.requestAnimationFrame(() => {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const hasSilverVariant = product.material.includes('Sterling Silver') || product.material.includes('Brass');

  return (
    <div className="pt-24 pb-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 w-full md:w-20 lg:w-24 shrink-0">
              {[1, 2, 3, 4].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "aspect-[4/5] min-w-[80px] md:min-w-full bg-muted overflow-hidden border-2 transition-colors",
                    activeImageIndex === index ? "border-foreground" : "border-transparent hover:border-border"
                  )}
                >
                   <img 
                      data-strk-img-id={`pdp-thumb-${product.id}-${index}`}
                      data-strk-img={`[pdp-title] detail view ${index + 1}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="aspect-[4/5] bg-muted w-full relative overflow-hidden group">
               {[1, 2, 3, 4].map((_, index) => (
                 <img 
                    key={index}
                    data-strk-img-id={`pdp-main-${product.id}-${index}`}
                    data-strk-img={`[pdp-title] main view ${index + 1}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className={cn(
                      "w-full h-full object-cover absolute inset-0 transition-opacity duration-500",
                      activeImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                 />
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col md:py-10">
            <h1 id="pdp-title" className="text-4xl lg:text-5xl font-serif uppercase tracking-wide mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl">${product.price}</span>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 <span className="text-foreground text-sm ml-2">(42)</span>
              </div>
            </div>

            <p id="pdp-desc" className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {hasSilverVariant && (
              <div className="mb-8">
                <p className="uppercase tracking-wider text-xs font-medium mb-3">Metal Finish</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setVariant('18k Gold Plated')}
                    className={cn(
                      "px-6 py-3 border text-sm transition-colors",
                      variant === '18k Gold Plated' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                    )}
                  >
                    18k Gold Plated
                  </button>
                  <button 
                    onClick={() => setVariant('Sterling Silver Finish')}
                    className={cn(
                      "px-6 py-3 border text-sm transition-colors",
                      variant === 'Sterling Silver Finish' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                    )}
                  >
                    Sterling Silver Finish
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-14 w-full sm:w-32 justify-between px-4 shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="h-14 flex-1 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <Accordion.Root type="single" collapsible className="w-full border-t border-border">
              
              <Accordion.Item value="materials" className="border-b border-border py-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full uppercase tracking-wider text-sm font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                    Materials & Dimensions
                    <ChevronDown size={16} className="transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm text-muted-foreground mt-4 leading-relaxed">
                  <p>Crafted from {product.material}. Our pieces are hypoallergenic, nickel-free, and designed to withstand daily wear. To maintain the plating, avoid contact with perfumes, lotions, and harsh chemicals.</p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="shipping" className="border-b border-border py-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full uppercase tracking-wider text-sm font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                    Shipping & Returns
                    <ChevronDown size={16} className="transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm text-muted-foreground mt-4 leading-relaxed">
                  <p>Free worldwide shipping on all orders. Unworn items in their original packaging can be returned within 30 days of delivery. Custom pieces and earrings are final sale for hygiene reasons.</p>
                </Accordion.Content>
              </Accordion.Item>

            </Accordion.Root>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-24 border-t border-border">
            <h2 id="related-title" className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group relative">
                  <Link to={`/product/${p.id}`} className="block aspect-[4/5] bg-muted mb-4 overflow-hidden relative">
                    <img 
                      data-strk-img-id={`rel-${p.id}-1`}
                      data-strk-img={`[rel-title-${p.id}] [related-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10"
                    />
                    <img 
                      data-strk-img-id={`rel-${p.id}-2`}
                      data-strk-img={`[rel-title-${p.id}] model [related-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${p.name} alternate view`}
                      className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                  </Link>
                  <div className="text-center">
                    <h3 id={`rel-title-${p.id}`} className="font-serif text-lg mb-1 uppercase tracking-wide">
                      <Link to={`/product/${p.id}`}>{p.name}</Link>
                    </h3>
                    <p className="text-muted-foreground">${p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;