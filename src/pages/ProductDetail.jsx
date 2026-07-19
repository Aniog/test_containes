import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Minus, Plus, Star, Heart, Share2, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

const products = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", desc: "A delicate yet statement-making gold ear cuff adorned with a single radiant crystal accent. Designed to hug the ear comfortably without needing a piercing.", materials: "18K Gold Plated Brass, Cubic Zirconia", care: "Avoid contact with water, perfumes, and lotions. Clean with a soft, dry cloth." },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", desc: "Our signature chunky gold dome huggie earrings. A modern classic that adds immediate polish to any look.", materials: "18K Gold Plated Brass", care: "Store in your Velmora pouch when not in use." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('gold');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    toast.success("Added to your treasury", {
      description: `${product.name} has been added to your bag.`,
    });
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
        {/* Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
          <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex-shrink-0 w-20 aspect-[3/4] bg-[#F5F2EA] cursor-pointer border border-transparent hover:border-[#1A1A1A] transition-colors overflow-hidden">
                <img
                  data-strk-img-id={`gallery-thumb-${i}`}
                  data-strk-img={`[prod-title] gold jewelry model editorial detail ${i}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`Thumbnail ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-[#F5F2EA] relative overflow-hidden">
             <img
                data-strk-img-id="main-product-img"
                data-strk-img="[prod-title] [prod-desc] gold jewelry editorial lifestyle close up"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-6 left-6 rounded-none bg-white text-black border-none uppercase tracking-widest text-[8px]">New Arrival</Badge>
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <header className="mb-8">
            <h1 id="prod-title" className="text-3xl md:text-4xl font-serif tracking-[0.1em] uppercase mb-4">{product.name}</h1>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-light text-gray-700">${product.price}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-black text-black" />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">22 Reviews</span>
              </div>
            </div>
            <p id="prod-desc" className="text-gray-500 font-light leading-relaxed mb-8">
              {product.desc}
            </p>
          </header>

          <div className="space-y-8 mb-12">
            <div>
              <p className="uppercase tracking-widest text-[10px] font-bold mb-4">Select Tone: <span className="font-normal text-gray-500 ml-2">{selectedTone === 'gold' ? '18K Gold Plated' : '925 Silver'}</span></p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedTone('gold')}
                  className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center p-1 transition-all",
                    selectedTone === 'gold' ? "border-black" : "border-transparent"
                  )}
                >
                  <div className="w-full h-full rounded-full bg-[#E5B80B]" />
                </button>
                <button 
                  onClick={() => setSelectedTone('silver')}
                  className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center p-1 transition-all",
                    selectedTone === 'silver' ? "border-black" : "border-transparent"
                  )}
                >
                  <div className="w-full h-full rounded-full bg-[#C0C0C0]" />
                </button>
              </div>
            </div>

            <div>
              <p className="uppercase tracking-widest text-[10px] font-bold mb-4">Quantity</p>
              <div className="flex items-center w-32 border border-[#E5E2D9]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-grow text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <Button 
              onClick={handleAddToCart}
              className="flex-grow py-8 bg-[#1A1A1A] hover:bg-[#C5A059] text-white rounded-none uppercase tracking-[0.2em] text-xs transition-all duration-300"
            >
              Add to Bag
            </Button>
            <Button 
              variant="outline" 
              className="py-8 px-6 rounded-none border-[#E5E2D9] hover:bg-gray-50 transition-all"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="py-8 px-6 rounded-none border-[#E5E2D9] hover:bg-gray-50 transition-all"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-[#E5E2D9]">
            <AccordionItem value="description" className="border-[#E5E2D9]">
              <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold py-6 hover:no-underline">Description</AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light leading-relaxed pb-6">
                The {product.name} is a testament to Velmora's commitment to quiet luxury. Every curve is considerately designed to echo the movement of the body, creating a piece that feels like a second skin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials" className="border-[#E5E2D9]">
              <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold py-6 hover:no-underline">Materials & Care</AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light leading-relaxed pb-6">
                <p className="mb-4"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-[#E5E2D9]">
              <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold py-6 hover:no-underline">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light leading-relaxed pb-6">
                We offer free standard shipping on all orders. Express shipping is available at checkout. Returns are accepted within 30 days of receipt, provided pieces are unworn and in original packaging.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="grid grid-cols-3 gap-4 mt-12 py-8 border-t border-b border-[#E5E2D9]">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-5 h-5 text-gray-400" />
              <span className="text-[8px] uppercase tracking-widest text-gray-500">Free Ship</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RefreshCw className="w-5 h-5 text-gray-400" />
              <span className="text-[8px] uppercase tracking-widest text-gray-500">30 Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <span className="text-[8px] uppercase tracking-widest text-gray-500">2 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 border-t border-[#E5E2D9]">
        <h2 className="text-3xl font-serif mb-12">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map(i => (
             <Link to={`/product/${i}`} key={i} className="group">
                <div className="aspect-[3/4] bg-[#F5F2EA] mb-6 overflow-hidden">
                  <img
                    data-strk-img-id={`related-img-${i}`}
                    data-strk-img="gold jewelry editorial close up piece"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt="Related"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-[10px] mb-2 tracking-[0.15em]">Similar Treasure</h3>
                <p className="text-xs text-gray-500 font-light">$45</p>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
