import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '@/components/home/Bestsellers';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-800"
      >
        {title}
        {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-zinc-500 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    window.scrollTo(0, 0);
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImg]);

  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found.</div>;

  const images = [
    { id: `main`, query: `[pdp-name] gold jewelry high end studio shot` },
    { id: `alt1`, query: `[pdp-name] jewelry detail close up macro` },
    { id: `alt2`, query: `[pdp-name] jewelry worn on model lifestyle` },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={cn(
                  "w-20 aspect-[4/5] bg-zinc-100 overflow-hidden border transition-all",
                  activeImg === idx ? "border-[#1C1C1C]" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img 
                  data-strk-img-id={`pdp-thumb-${img.id}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[4/5] bg-zinc-100 overflow-hidden order-1 md:order-2">
            <img 
              data-strk-img-id={product[`imgIdPdp${activeImg}`]}
              data-strk-img={`[pdp-desc] [pdp-name]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest text-zinc-400 mb-8">
            <Link to="/" className="hover:text-zinc-800">Home</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-zinc-800">{product.category}</Link>
            <span>/</span>
            <span className="text-zinc-800">{product.name}</span>
          </nav>

          <h1 id="pdp-name" className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl font-sans tracking-wide text-zinc-900">${product.price}</span>
            <div className="flex items-center gap-1 border-l border-zinc-200 pl-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />)}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold ml-1">(24 Reviews)</span>
            </div>
          </div>

          <p id="pdp-desc" className="text-zinc-600 leading-relaxed mb-10 max-w-md">
            {product.description}. Each piece is meticulously handcrafted with a focus on durability and timeless elegance.
          </p>

          <div className="space-y-8 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block text-zinc-400">Finish: {variant}</span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold border transition-all",
                      variant === v ? "bg-[#1C1C1C] border-[#1C1C1C] text-white" : "border-zinc-200 text-zinc-500 hover:border-zinc-800"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-4">
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block text-zinc-400">Quantity</span>
                <div className="flex items-center justify-between border border-zinc-200 px-4 py-3.5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4" /></button>
                  <span className="text-sm font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></button>
                </div>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-[2] bg-[#1C1C1C] text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-800 transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Accordion title="Description">
               Elevate your everyday attire with the {product.name}. A perfect blend of modern minimalism and classic sophistication. 
               Handmade with 18K gold vermeil or recycled sterling silver.
            </Accordion>
            <Accordion title="Materials & Care">
              Our pieces are crafted using 18k gold vermeil—a thick layer of solid 18k gold on sterling silver. 
              To maintain its shine, avoid contact with perfumes, lotions, and chlorine. Gently polish with a microfiber cloth.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free standard shipping on all orders over $75. 30-day returns on unworn items in original packaging. 
              Gift boxes included with every purchase.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Trust bar for PDP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-zinc-100 mb-24">
        <div className="flex flex-col items-center text-center gap-4">
          <Truck className="w-6 h-6 text-zinc-400" />
          <h4 className="text-[10px] uppercase tracking-widest font-bold">Fast Delivery</h4>
          <p className="text-xs text-zinc-500">2-4 business days worldwide</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <ShieldCheck className="w-6 h-6 text-zinc-400" />
          <h4 className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</h4>
          <p className="text-xs text-zinc-500">PCI compliant payments</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <RotateCcw className="w-6 h-6 text-zinc-400" />
          <h4 className="text-[10px] uppercase tracking-widest font-bold">Easy Returns</h4>
          <p className="text-xs text-zinc-500">Hassle-free 30 day window</p>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <h2 className="font-serif text-3xl mb-12">You may also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.id !== id).slice(0, 4).map(p => (
            <div key={p.id} className="group flex flex-col">
              <div className="aspect-[3/4] bg-zinc-100 overflow-hidden relative mb-4">
                <Link to={`/product/${p.id}`}>
                  <img
                    data-strk-img-id={`rel-${p.id}`}
                    data-strk-img={`[rel-${p.id}-name] gold jewelry high end`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
              </div>
              <h3 id={`rel-${p.id}-name`} className="font-serif text-sm tracking-widest uppercase mb-1">
                <Link to={`/product/${p.id}`}>{p.name}</Link>
              </h3>
              <p className="text-zinc-400 text-xs">${p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
