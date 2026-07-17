import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Minus, Plus, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Product() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const containerRef = useRef(null);

  const product = products.find((p) => p.slug === slug);
  const relatedProducts = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    // Reset state when navigating to a new product
    setQuantity(1);
    setVariant('Gold');
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    try {
       const timer = setTimeout(() => {
         if (containerRef.current && strkImgConfig) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
         }
       }, 50);
       return () => clearTimeout(timer);
    } catch {
       // ignore
    }
  }, [slug]);

  if (!product) {
    return <div className="pt-32 text-center font-serif text-2xl h-screen">Product not found.</div>;
  }

  const handleAdd = () => {
    addItem(product, quantity, variant);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24 max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
        
        {/* Left: Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[4/5] bg-secondary relative">
             <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] [pdp-category-name]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[4/5] bg-secondary relative">
                <img
                  data-strk-img-id={`pdp-${product.id}-sub1`}
                  data-strk-img={`[${product.titleId}] detail shot texture`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="aspect-[4/5] bg-secondary relative">
                <img
                  data-strk-img-id={`pdp-${product.id}-sub2`}
                  data-strk-img={`[${product.titleId}] worn on model candid aesthetic`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} on model`}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 md:py-10 sticky top-24 h-fit">
          <div className="mb-8">
            <span id="pdp-category-name" className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              {product.category}
            </span>
            <h1 id={product.titleId} className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-primary pl-4 border-l border-border">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current stroke-transparent" />)}
                <span className="text-foreground ml-2 text-xs">(42 Reviews)</span>
              </div>
            </div>
            <p id={product.descId} className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm uppercase tracking-widest mb-4">
              <span>Tone</span>
              <span className="text-muted-foreground">{variant}</span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setVariant('Gold')}
                className={`w-12 h-12 rounded-full border-2 transition-colors ${variant === 'Gold' ? 'border-primary' : 'border-transparent'}`}
                style={{ backgroundColor: '#D4AF37' }}
                aria-label="Gold"
              />
              <button 
                onClick={() => setVariant('Silver')}
                className={`w-12 h-12 rounded-full border-2 transition-colors ${variant === 'Silver' ? 'border-primary' : 'border-transparent'}`}
                style={{ backgroundColor: '#C0C0C0' }}
                aria-label="Silver"
              />
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button 
              onClick={handleAdd}
              className="flex-1 rounded-none h-12 uppercase tracking-widest text-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Add to Cart
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-border">
            <AccordionItem value="description" className="border-border">
              <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline py-6">Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Elevate your everyday with the {product.name}. Designed to be layered or worn alone, this piece brings a touch of editorial elegance to your collection. The perfect balance of bold design and quiet luxury.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials" className="border-border">
              <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline py-6">Materials & Care</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Crafted from {product.material}. Hypoallergenic and nickel-free. To maintain the finish, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-border">
              <AccordionTrigger className="uppercase tracking-widest text-sm font-medium hover:no-underline py-6">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Free standard shipping worldwide on all orders. We accept returns within 30 days of delivery in original, unworn condition with tags attached.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      <div className="pt-24 border-t border-border">
        <h2 id="related-title" className="font-serif text-3xl tracking-wider mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group relative flex flex-col">
              <Link to={`/product/${p.slug}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`related-${p.id}-img`}
                  data-strk-img={`[${p.titleId}] [related-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <Link to={`/product/${p.slug}`}>
                <h3 id={p.titleId} className="font-serif text-sm tracking-wider uppercase mb-1">{p.name}</h3>
                <span className="text-sm font-medium text-muted-foreground">${p.price}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
