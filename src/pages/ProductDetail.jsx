import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Truck, ShieldCheck, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import ProductCard from '@/components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-[0.5px] border-slate-100 py-6">
      <button 
        className="w-full flex items-center justify-between font-sans text-xs uppercase tracking-[0.15em] text-slate-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 font-sans text-xs text-slate-500 leading-loose animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, id, activeImage]);

  if (!product) return (
    <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
      <p className="font-serif text-2xl">Product not found</p>
      <Link to="/shop" className="font-sans text-xs uppercase tracking-widest underline">Return to Shop</Link>
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="py-12 px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Gallery */}
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-1 aspect-[3/4] bg-slate-50 overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[product-detail-name] luxury gold jewelry detailed hero shot`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24">
              {[0, 1, 2].map((i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "w-20 md:w-full aspect-[3/4] bg-slate-50 border-[1px] transition-colors overflow-hidden flex-shrink-0",
                    activeImage === i ? "border-[#C5A059]" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-detail-name] gold jewelry alt view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col space-y-8 lg:max-w-xl">
            <div className="space-y-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">{product.category}</p>
              <h1 id="product-detail-name" className="font-serif text-3xl md:text-5xl uppercase tracking-[0.1em] text-slate-800 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl text-slate-800">${product.price}</span>
                <div className="flex items-center gap-1 text-[#C5A059]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-sans text-[10px] text-[#A8A29A] ml-2 tracking-widest">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Variants */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#A8A29A]">Tone: {selectedTone}</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 border-[0.5px] font-sans text-[10px] uppercase tracking-widest transition-all",
                      selectedTone === tone ? "bg-[#1A1A1A] text-white border-black" : "border-slate-200 hover:border-black"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center justify-between border-[0.5px] border-slate-200 px-4 py-4 sm:w-32">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus className="w-3.5 h-3.5" /></button>
                <span className="font-sans text-xs">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#1A1A1A] text-white py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-8 space-y-2">
              <Accordion title="Description">
                {product.description} Our demi-fine jewelry is designed for the modern muse.
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-4 list-disc list-inside">
                  <li>Material: {product.materials}</li>
                  <li>Base Metal: Lead-free, high-polish jewelers brass</li>
                  <li>Thickness: 2.5 microns for lasting luster</li>
                  <li>Care: Wipe with a soft cloth after each wear. Avoid direct contact with perfume and lotion.</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping} Returns accepted within 30 days of delivery for a full refund or exchange.
              </Accordion>
            </div>

            {/* PDP Trust */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t-[0.5px] border-slate-100">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-[#C5A059]" />
                <span className="font-sans text-[9px] uppercase tracking-widest text-slate-500">Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span className="font-sans text-[9px] uppercase tracking-widest text-slate-500">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 border-t-[0.5px] border-slate-100 pt-24">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-center text-slate-800">You may also like</h2>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
