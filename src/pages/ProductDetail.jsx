import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
      return;
    }
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`, {
      description: "A piece of luxury is coming your way.",
      className: "rounded-none font-serif",
    });
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
             {/* Desktop Thumbnails */}
             <div className="hidden md:flex flex-col gap-4 w-20">
                {product.images.map((img, idx) => (
                  <button 
                    key={img.id}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "aspect-[3/4] bg-stone-100 border-b-2 transition-all",
                      activeImage === idx ? "border-velmora-gold" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img 
                      data-strk-img-id={`thumb-${img.id}-${id}`}
                      data-strk-img={`[pd-name] jewelry details ${idx}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="100"
                      className="w-full h-full object-cover"
                      alt={`${product.name} thumbnail ${idx}`}
                    />
                  </button>
                ))}
             </div>

             {/* Main Image */}
             <div className="flex-1 bg-stone-100 aspect-[3/4] relative group overflow-hidden">
                <img 
                  data-strk-img-id={`main-img-${product.images[activeImage].id}-${id}`}
                  data-strk-img={`[pd-name] luxury gold jewelry close-up view ${activeImage}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={product.name}
                />
                
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button 
                     onClick={() => setActiveImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                     className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                   >
                     <ChevronLeft size={20} />
                   </button>
                   <button 
                     onClick={() => setActiveImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                     className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                   >
                     <ChevronRight size={20} />
                   </button>
                </div>
             </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 space-y-8">
             <div className="space-y-4">
               <div className="flex items-center gap-4">
                 <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">{product.type}</span>
                 <div className="flex items-center gap-1 text-[10px] text-velmora-gold">
                   <Star size={10} fill="currentColor" />
                   <Star size={10} fill="currentColor" />
                   <Star size={10} fill="currentColor" />
                   <Star size={10} fill="currentColor" />
                   <Star size={10} fill="currentColor" />
                   <span className="text-stone-400 ml-1">(24 Reviews)</span>
                 </div>
               </div>
               
               <h1 id="pd-name" className="text-4xl md:text-5xl font-light tracking-wide uppercase leading-tight">
                 {product.name}
               </h1>
               
               <p className="font-serif text-2xl tracking-widest text-stone-800">${product.price}</p>
             </div>

             <p className="text-stone-600 leading-relaxed font-serif text-lg italic">
               {product.description}
             </p>

             {/* Selectors */}
             <div className="space-y-6 pt-6 border-t border-stone-100">
               <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Finish: {selectedFinish === 'gold' ? '18K Gold' : 'Gold Vermeil'}</span>
                 </div>
                 <div className="flex gap-4">
                   <button 
                     onClick={() => setSelectedFinish('gold')}
                     className={cn(
                       "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all",
                       selectedFinish === 'gold' ? "bg-black text-white border-black" : "border-stone-200 hover:border-black"
                     )}
                   >
                     Gold Finish
                   </button>
                   <button 
                     onClick={() => setSelectedFinish('silver')}
                     className={cn(
                       "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all",
                       selectedFinish === 'silver' ? "bg-black text-white border-black" : "border-stone-200 hover:border-black"
                     )}
                   >
                     Silver Finish
                   </button>
                 </div>
               </div>

               <div className="space-y-4">
                 <span className="text-[10px] uppercase tracking-widest font-bold">Quantity</span>
                 <div className="flex items-center border border-stone-200 w-max">
                   <button 
                     className="px-4 py-3 hover:bg-stone-50 transition-colors"
                     onClick={() => setQuantity(q => Math.max(1, q - 1))}
                   >
                     <Minus size={14} />
                   </button>
                   <span className="px-6 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                   <button 
                     className="px-4 py-3 hover:bg-stone-50 transition-colors"
                     onClick={() => setQuantity(q => q + 1)}
                   >
                     <Plus size={14} />
                   </button>
                 </div>
               </div>
             </div>

             {/* Actions */}
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-velmora-black hover:bg-stone-800 text-white rounded-none py-7 uppercase tracking-[0.2em] text-xs font-bold"
                >
                  Add to Bag — ${product.price * quantity}
                </Button>
                <div className="flex gap-4">
                  <Button variant="outline" className="rounded-none aspect-square p-0 flex items-center justify-center border-stone-200 hover:border-black transition-colors w-14">
                    <Heart size={20} />
                  </Button>
                  <Button variant="outline" className="rounded-none aspect-square p-0 flex items-center justify-center border-stone-200 hover:border-black transition-colors w-14">
                    <Share2 size={20} />
                  </Button>
                </div>
             </div>

             {/* Accordions */}
             <div className="pt-8">
               <Accordion type="single" collapsible className="w-full">
                 <AccordionItem value="description" className="border-stone-200">
                    <AccordionTrigger className="font-serif uppercase tracking-widest text-xs py-5 hover:no-underline">Details</AccordionTrigger>
                    <AccordionContent className="text-stone-500 leading-relaxed text-sm py-4">
                      Carefully curated and designed for longevity, our {product.name} is a versatile piece that complements any attire. Inspired by the soft curves of nature and the golden hour light.
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="materials" className="border-stone-200">
                    <AccordionTrigger className="font-serif uppercase tracking-widest text-xs py-5 hover:no-underline">Materials & Care</AccordionTrigger>
                    <AccordionContent className="text-stone-500 leading-relaxed text-sm py-4 space-y-4">
                      <p><strong>Composition:</strong> {product.materials}</p>
                      <p><strong>Care:</strong> {product.care}</p>
                      <p>To maintain your jewelry's luster, remove when showering, swimming, or exercising. Avoid direct contact with hand sanitizers, perfumes, and lotions which can damage the plating.</p>
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="shipping" className="border-stone-200">
                    <AccordionTrigger className="font-serif uppercase tracking-widest text-xs py-5 hover:no-underline">Shipping & Returns</AccordionTrigger>
                    <AccordionContent className="text-stone-500 leading-relaxed text-sm py-4 space-y-2">
                      <p>• Complimentary standard shipping on all global orders.</p>
                      <p>• We offer carbon-neutral shipping processed within 1-2 business days.</p>
                      <p>• 30-day effortless returns on all unworn jewelry, in original packaging.</p>
                    </AccordionContent>
                 </AccordionItem>
               </Accordion>
             </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-stone-100 pt-24">
            <h2 className="text-3xl font-light text-center mb-16 tracking-tight">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
