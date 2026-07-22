import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/mockProducts';
import { useStore } from '../store';
import { Button } from '@/components/ui/button.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx';
import { Separator } from '@/components/ui/separator.jsx';
import { Star, Minus, Plus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart, openCart } = useStore();
  const product = products.find((p) => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('18k Gold Vermeil');

  useEffect(() => {
    // Scroll to top on mount or id change
    window.scrollTo(0, 0);
    setQuantity(1); // Reset quantity on product change
    
    // Load images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-heading mb-4">Product Not Found</h1>
        <Link to="/collection" className="text-sm uppercase tracking-widest border-b border-foreground pb-1">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    // Let global state open the cart drawer, which is already handled in store if we keep it there, or we can explicitly call openCart if we modified the store
    // The store addToCart implicitly opens it, we don't strictly need to do it twice.
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        
        {/* Product Split */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-24">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-[4/5] bg-muted relative w-full overflow-hidden">
                <img
                    alt={product.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pd-main-${product.id}`}
                    data-strk-img={`[pd-title] main product image close up`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                        alt={`${product.name} lifestyle`}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`pd-sub1-${product.id}`}
                        data-strk-img={`[pd-title] worn on model lifestyle`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                </div>
                <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                        alt={`${product.name} detail`}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`pd-sub2-${product.id}`}
                        data-strk-img={`[pd-title] styled in box`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 md:py-10">
            <div className="md:sticky md:top-32">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{product.category}</p>
                <h1 id="pd-title" className="text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase mb-4 leading-tight">
                {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                    <p className="text-xl font-medium">${product.price}</p>
                    <div className="flex items-center gap-1">
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-primary' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                </div>

                <p className="text-foreground/80 font-sans leading-relaxed mb-8">
                {product.description}
                </p>

                <Separator className="mb-8" />

                <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium tracking-wide">Finish</span>
                    <span className="text-xs text-muted-foreground">{variant}</span>
                </div>
                <div className="flex gap-3">
                    <button 
                        onClick={() => setVariant('18k Gold Vermeil')}
                        className={`w-full py-3 text-sm font-medium border transition-colors ${variant === '18k Gold Vermeil' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                    >
                    18K Gold
                    </button>
                    <button 
                        onClick={() => setVariant('Sterling Silver')}
                        className={`w-full py-3 text-sm font-medium border transition-colors ${variant === 'Sterling Silver' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                    >
                    Silver
                    </button>
                </div>
                </div>

                <div className="flex gap-4 mb-10">
                    <div className="flex items-center border border-border">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-muted/50 transition-colors">
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-muted/50 transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                    <Button 
                        onClick={handleAddToCart}
                        className="flex-1 rounded-none h-14 bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest text-sm"
                    >
                        Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </Button>
                </div>

                {/* Accordions */}
                <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-widest hover:no-underline hover:text-primary">Description</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                        Every piece in the Velmora collection is designed with intention. {product.description} Pair it with delicate chains or wear it solo as a subtle statement.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-widest hover:no-underline hover:text-primary">Materials & Care</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-sans leading-relaxed space-y-2">
                        <p><strong>Gold Vermeil:</strong> A thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price.</p>
                        <p><strong>Care:</strong> To keep your piece looking its best, gently wipe with a polishing cloth after wear and store in the provided pouch. Avoid contact with perfumes, lotions, and harsh chemicals.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-border">
                    <AccordionTrigger className="text-sm font-medium uppercase tracking-widest hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-sans leading-relaxed space-y-2">
                        <p>We offer free worldwide shipping on all orders over $50.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Standard Shipping: 3-5 business days</li>
                            <li>Express Shipping: 1-2 business days</li>
                        </ul>
                        <p>We gladly accept returns within 30 days of receipt. Pieces must be unworn and in original packaging.</p>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="pt-16 border-t border-border/50">
          <h2 id="related-title" className="text-3xl text-center mb-12 font-heading tracking-wide">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
               <div key={p.id} className="group flex flex-col">
               <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                   <img
                       alt={p.name}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       data-strk-img-id={`rel-img-${p.id}`}
                       data-strk-img={`[rel-title-${p.id}] [related-title]`}
                       data-strk-img-ratio="4x5"
                       data-strk-img-width="400"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   />
               </Link>
               <div className="text-center flex flex-col flex-1">
                   <h3 id={`rel-title-${p.id}`} className="text-sm font-heading tracking-widest mb-1">{p.name}</h3>
                   <p className="text-sm text-muted-foreground mt-auto">${p.price}</p>
               </div>
               </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}