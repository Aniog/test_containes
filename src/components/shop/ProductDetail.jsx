import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Minus, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCartStore } from '@/lib/store';
import { products as homeProducts } from '../home/Home';

const products = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, type: 'earrings', imageQuery: '[product-1-name] gold ear cuff with crystal accent', imageRatio: '1x1' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, type: 'necklaces', imageQuery: '[product-2-name] multicolor floral crystal necklace', imageRatio: '1x1' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, type: 'huggies', imageQuery: '[product-3-name] chunky gold dome huggie earrings', imageRatio: '1x1' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, type: 'earrings', imageQuery: '[product-4-name] textured gold filigree drop earrings', imageRatio: '1x1' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, type: 'sets', imageQuery: '[product-5-name] gift-boxed earring + necklace set', imageRatio: '1x1' },
];
import Layout from '../layout/Layout';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [variant, setVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAddToCart = () => {
    // Add multiple if quantity > 1
    for (let i = 0; i < quantity; i++) {
        addItem(product, variant);
    }
    // Only visual feedback could go here, drawer opens automatically from store state
  };

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Image Gallery (Simplified for demo) */}
          <div className="flex flex-col-reverse md:flex-row gap-4 min-w-0">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar scroll-smooth">
              {[1, 2, 3].map((num) => (
                <button key={num} className="relative aspect-[4/5] w-20 md:w-full bg-secondary/30 flex-shrink-0 border border-transparent hover:border-primary/50 transition-colors focus:outline-none">
                  <img 
                    data-strk-img-id={`pdp-${product.id}-thumb-${num}`}
                    data-strk-img={`${product.imageQuery} detail shot ${num}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${num}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="flex-1 relative aspect-[4/5] bg-secondary/30 min-w-0">
              <img 
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`${product.imageQuery} high quality editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col min-w-0">
            <div className="mb-8">
              <h1 id={`pdp-${product.id}-name`} className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-xl">${product.price}</p>
                <div className="flex items-center text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                  <span className="text-muted-foreground text-sm ml-2 font-sans tracking-wide uppercase">(128 Reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Elevate your everyday look with this stunning demi-fine piece. Crafted from premium materials designed to catch the light and add an elegant touch to any ensemble. Wear alone for a minimalist statement or layered for maximalist impact.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {/* Variant Selection */}
              <div>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">Color: <span className="text-foreground">{variant}</span></span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setVariant('Gold Tone')}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border transition-all",
                      variant === 'Gold Tone' ? 'border-primary p-[2px]' : 'border-transparent'
                    )}
                    aria-label="Gold Tone"
                  >
                    <span className="block w-full h-full rounded-full bg-[#E5C158] border border-black/10"></span>
                  </button>
                  <button 
                    onClick={() => setVariant('Silver Tone')}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border transition-all",
                      variant === 'Silver Tone' ? 'border-primary p-[2px]' : 'border-transparent'
                    )}
                    aria-label="Silver Tone"
                  >
                    <span className="block w-full h-full rounded-full bg-[#E3E4E5] border border-black/10"></span>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">Quantity</span>
                <div className="inline-flex items-center border border-border h-12">
                  <button 
                    className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button 
                    className="px-4 h-full text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button 
                onClick={handleAddToCart}
                className="w-full h-14 rounded-none uppercase tracking-widest text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <div className="flex items-center justify-center gap-6 py-4 text-xs tracking-wider uppercase text-muted-foreground border-b border-border">
                <span>Free Shipping</span>
                <span>Returns</span>
                <span>Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-auto">
               <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-border">
                  <AccordionTrigger className="text-sm tracking-widest uppercase font-normal font-sans hover:no-underline hover:text-primary">Description</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    A timeless addition to your jewelry collection. This versatile piece effortlessly transitions from day to night. Designed in-house and ethically crafted by master jewelers using traditional techniques.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-border">
                  <AccordionTrigger className="text-sm tracking-widest uppercase font-normal font-sans hover:no-underline hover:text-primary">Materials & Care</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                    <p><strong>Gold Vermeil:</strong> A thick 18k gold layer on sterling silver. Our vermeil is 5x thicker than regular gold plating, ensuring longevity.</p>
                    <p><strong>Care:</strong> To maintain the luster, avoid contact with harsh chemicals, perfumes, and prolonged water exposure. Store in the provided pouch.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-border border-b-0">
                  <AccordionTrigger className="text-sm tracking-widest uppercase font-normal font-sans hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                    <p>Free standard shipping on all orders. Express options available at checkout.</p>
                    <p>We accept returns in unworn condition within 30 days of delivery. For hygiene reasons, earrings must remain sealed in their original protective packaging.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 id="related-title" className="text-2xl md:text-3xl font-serif">You May Also Like</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group relative flex flex-col group/card cursor-pointer">
                <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                  <img 
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={p.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 md:block hidden">
                    <Button 
                      className="w-full rounded-none tracking-widest uppercase text-xs shadow-md"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(p, 'Gold Tone');
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <h3 id={`related-${p.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;