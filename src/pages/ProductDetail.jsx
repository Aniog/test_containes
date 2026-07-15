import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Star, Minus, Plus, Share2, Heart } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedVariant(found.variants[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
      if (product) {
          const frameId = window.requestAnimationFrame(() => {
              ImageHelper.loadImages(strkImgConfig, containerRef.current);
          });
          return () => window.cancelAnimationFrame(frameId);
      }
  }, [product, activeImage]);

  if (!product) return <div className="pt-32 p-12 text-center font-serif">Loading piece...</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Info */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
          {/* Left: Gallery */}
          <div className="w-full lg:w-[60%] flex gap-4 flex-col-reverse md:flex-row">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-[600px] scrollbar-hide">
              <button
                onClick={() => setActiveImage(0)}
                className={cn(
                  "w-20 md:w-24 aspect-[3/4] flex-shrink-0 border bg-secondary overflow-hidden transition-all duration-300",
                  activeImage === 0 ? "border-primary" : "border-transparent"
                )}
              >
                <img
                  data-strk-img-id={product.strkImg1}
                  data-strk-img="[prod-name] jewelry view 1"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} thumb 0`}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage(1)}
                className={cn(
                  "w-20 md:w-24 aspect-[3/4] flex-shrink-0 border bg-secondary overflow-hidden transition-all duration-300",
                  activeImage === 1 ? "border-primary" : "border-transparent"
                )}
              >
                <img
                  data-strk-img-id={product.strkImg2}
                  data-strk-img="[prod-name] jewelry view 2"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} thumb 1`}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden relative group">
              <img
                data-strk-img-id={product.strkImg1}
                data-strk-img="[prod-name] [prod-desc] high-end jewelry editorial"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={cn(
                  "w-full h-full object-cover transition-all duration-1000",
                  activeImage === 0 ? "opacity-100 scale-100 group-hover:scale-110" : "opacity-0 scale-105 absolute inset-0 pointer-events-none"
                )}
              />
              <img
                data-strk-img-id={product.strkImg2}
                data-strk-img="[prod-name] [prod-desc] high-end jewelry editorial"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={cn(
                  "w-full h-full object-cover transition-all duration-1000",
                  activeImage === 1 ? "opacity-100 scale-100 group-hover:scale-110" : "opacity-0 scale-105 absolute inset-0 pointer-events-none"
                )}
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors z-10">
                <Heart size={20} className="text-primary/70" />
              </button>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="space-y-4">
              <h1 id="prod-name" className="text-3xl md:text-4xl font-serif uppercase tracking-widestest font-bold">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-medium">${product.price}</span>
                <div className="flex items-center space-x-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-current" : "text-border"} />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <p id="prod-desc" className="text-muted-foreground leading-relaxed font-light">
              {product.description}
            </p>

            <div className="space-y-6">
              {/* Variant Selector */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widestest font-bold text-muted-foreground">Select Finish: {selectedVariant}</span>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-6 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                        selectedVariant === v ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center border border-border w-fit">
                  <button
                    className="p-3 hover:bg-secondary transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                  <button
                    className="p-3 hover:bg-secondary transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <Button
                  className="w-full h-14 uppercase tracking-widestest font-bold text-xs"
                  onClick={() => addToCart({ ...product, variant: selectedVariant, quantity })}
                >
                  Add to Bag — ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 pt-4 text-[10px] uppercase tracking-widestest text-muted-foreground font-bold border-t border-border/50">
                <div className="flex items-center"><Share2 size={14} className="mr-2"/> Share</div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center">Care Guide</div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center">Free Shipping</div>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border-b-border/30">
                  <AccordionTrigger className="text-[10px] uppercase tracking-widestest font-bold">Details & Description</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                    {product.details}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-border/30">
                  <AccordionTrigger className="text-[10px] uppercase tracking-widestest font-bold">Materials & Care</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                    {product.materials} Our jewelry is gold plated using a high-quality process that ensures longevity. To maintain its shine, avoid direct contact with water, perfumes, and lotions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="text-[10px] uppercase tracking-widestest font-bold">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light">
                    {product.shipping} We offer a 30-day return policy for all unworn jewelry. Pieces must be returned in their original packaging.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h2 className="text-2xl font-serif italic mb-12 text-center">Complete the Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
