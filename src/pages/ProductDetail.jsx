import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Plus, Minus, ChevronDown, Heart, Share2, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { SEED_PRODUCTS } from '../lib/data.js';
import { useCart } from '../components/cart/CartContext.jsx';
import { cn } from '../lib/utils.js';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = SEED_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-40 text-center uppercase-spaced">Product not found</div>;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description + " Crafted with a focus on durability and timeless aesthetic. This piece is designed to be worn effortlessly from day to night." },
    { id: 'materials', title: 'Materials & Care', content: "Our pieces are crafted in 18K Gold Vermeil—a thick layer of 18K gold over 925 Sterling Silver. To maintain its luster, avoid contact with perfume, lotions, and chlorine. Gently clean with a soft, lint-free cloth." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Free worldwide shipping on all orders over $75. We accept returns within 30 days of receipt, provided the item is in its original condition and packaging." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 mb-12 overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:opacity-100 transition-opacity">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/shop?category=${product.category}`} className="hover:opacity-100 transition-opacity capitalize">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="opacity-100 text-primary">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                data-strk-img-id={`pdp-gallery-${product.id}-${idx}`}
                data-strk-img={`[pdp-title] gold jewelry detail shot view ${idx} editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                alt={`${product.name} view ${idx}`}
              />
            </div>
          ))}
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h1 id="pdp-title" className="text-4xl sm:text-5xl font-serif uppercase tracking-[0.1em] mb-4">{product.name}</h1>
            <div className="flex items-center justify-between mb-8">
              <p className="text-2xl font-serif italic opacity-80">${product.price}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary stroke-none" />)}
                <span className="text-[10px] uppercase-spaced font-bold opacity-40 ml-2">(24 Reviews)</span>
              </div>
            </div>
            <p id="pdp-desc" className="text-primary/70 leading-relaxed text-sm lg:text-base border-t border-border pt-8 mt-4">
              {product.description}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="uppercase-spaced text-[10px] font-bold mb-4 opacity-40">Choose Finish</p>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-8 py-3 border border-border uppercase-spaced text-[10px] font-bold transition-all",
                      selectedVariant === variant ? "bg-primary text-white border-primary" : "hover:bg-secondary"
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-grow bg-primary text-white py-4 px-8 uppercase tracking-[0.35em] text-xs font-bold hover:opacity-95 shadow-xl transition-all"
              >
                Add to Bag
              </button>
              <button className="p-4 border border-border hover:bg-secondary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-8">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex justify-between items-center group"
                >
                  <span className="uppercase-spaced text-[10px] font-bold group-hover:opacity-60 transition-opacity">{acc.title}</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeAccordion === acc.id && "rotate-180")} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === acc.id ? 'auto' : 0, opacity: activeAccordion === acc.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-sm text-primary/60 leading-relaxed font-sans">
                    {acc.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 stroke-[1px] opacity-60" />
              <div className="flex flex-col">
                <span className="uppercase tracking-widest text-[8px] font-bold">Fast Delivery</span>
                <span className="text-[9px] opacity-40">3-5 business days</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 stroke-[1px] opacity-60" />
              <div className="flex flex-col">
                <span className="uppercase tracking-widest text-[8px] font-bold">30 Day Returns</span>
                <span className="text-[9px] opacity-40">Hassle-free exchange</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 stroke-[1px] opacity-60" />
              <div className="flex flex-col">
                <span className="uppercase tracking-widest text-[8px] font-bold">Secure Payment</span>
                <span className="text-[9px] opacity-40">100% data protection</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 stroke-[1px] opacity-60" />
              <button className="uppercase tracking-widest text-[8px] font-bold hover:underline">Share Image</button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 border-t border-border pt-24">
        <h2 id="related-title" className="text-3xl font-serif text-center mb-16 uppercase tracking-wider">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
            <div key={related.id} className="group flex flex-col gap-4">
              <Link to={`/product/${related.id}`} className="relative aspect-[3/4] bg-secondary overflow-hidden block">
                <img
                  data-strk-img-id={`pdp-related-${related.id}`}
                  data-strk-img={`[related-p-title-${related.id}] gold jewelry clean background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={related.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={related.name}
                />
              </Link>
              <div className="text-center">
                <h3 id={`related-p-title-${related.id}`} className="uppercase tracking-[0.15em] text-[10px] font-bold mb-1">{related.name}</h3>
                <p className="text-muted-foreground text-xs italic font-serif">${related.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;