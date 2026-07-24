import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center group"
      >
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase font-bold text-charcoal group-hover:text-gold transition-colors">
          {title}
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-charcoal/40" /> : <ChevronDown className="w-4 h-4 text-charcoal/40" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 font-sans text-sm text-charcoal/60 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const containerRef = useRef(null);

  const product = useMemo(() => products.find(p => p.id === id), [id]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, activeImgIdx]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="font-serif text-3xl mb-8">Treasure not found</h2>
        <Link to="/shop" className="font-sans text-xs tracking-widest uppercase font-bold underline">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-12 font-sans text-[10px] tracking-widest uppercase text-charcoal/40 font-bold">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4">
              {[0, 1, 2].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-20 md:w-24 aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImgIdx === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img 
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] jewelry view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`View ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden relative shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  data-strk-img-id={`pdp-main-${product.id}-${activeImgIdx}`}
                  data-strk-img={`[pdp-title] jewelry detailed view ${activeImgIdx}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="border-b border-charcoal/5 pb-10 mb-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
                <span className="font-sans text-[10px] tracking-widest text-charcoal/40 uppercase font-bold ml-2">(48 Reviews)</span>
              </div>
              
              <h1 id="pdp-title" className="font-serif text-4xl md:text-5xl uppercase tracking-widest-editorial text-charcoal mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-3xl text-charcoal">${product.price}</span>
                <span className="font-sans text-xs text-charcoal/40 tracking-widest uppercase font-bold">Free Shipping</span>
              </div>

              <p className="font-sans text-charcoal/60 text-md leading-relaxed mb-10 italic">
                A masterpiece of understated elegance. Designed to capture light and attention, this piece elevates your daily ritual with effortless sophistication.
              </p>

              {/* Variant Selector */}
              <div className="mb-10">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-charcoal font-bold mb-4 block">Select Tone: {selectedVariant}</span>
                <div className="flex gap-4">
                  {['gold', 'silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-8 py-3 font-sans text-[10px] tracking-widest uppercase font-bold border rounded-sm transition-all shadow-sm ${
                        selectedVariant === variant 
                          ? 'border-charcoal bg-charcoal text-white' 
                          : 'border-charcoal/10 bg-white text-charcoal hover:border-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center border border-charcoal/10 bg-white rounded-sm h-14 w-full md:w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 hover:text-gold transition-colors"
                  >
                    <Minus className="w-4 h-4 mx-auto" strokeWidth={1.5} />
                  </button>
                  <span className="font-sans text-sm font-bold w-6 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 hover:text-gold transition-colors"
                  >
                    <Plus className="w-4 h-4 mx-auto" strokeWidth={1.5} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 h-14 bg-charcoal text-white font-sans text-xs tracking-[0.3em] uppercase font-bold hover:bg-gold transition-all duration-500 rounded-sm shadow-xl flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                  Add to Cart
                </button>
              </div>
              
              <div className="flex gap-6 mt-8">
                <button className="flex items-center gap-2 font-sans text-[10px] tracking-widest text-charcoal/60 uppercase font-bold hover:text-gold transition-all">
                  <Heart className="w-4 h-4" /> Add to Wishlist
                </button>
                <button className="flex items-center gap-2 font-sans text-[10px] tracking-widest text-charcoal/60 uppercase font-bold hover:text-gold transition-all">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="flex flex-col">
              <Accordion title="Description">
                Hand-finished and polished to a brilliant shine, this piece features our signature Velmora textures. Inspired by the organic shapes found in nature, it's designed to be comfortable for all-day wear while making a refined statement.
              </Accordion>
              <Accordion title="Materials & Care">
                Recycled 18K Gold plating over demi-fine brass base. Water-resistant and tarnish-free under normal wear. Every piece is hypoallergenic, nickel-free, and lead-free. Store in your Velmora pouch when not in use to maintain brilliant shine.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Complimentary worldwide shipping on all orders. Each order arrives in our signature eco-luxury gift packaging. Returns are accepted within 30 days of delivery for a full refund or exchange.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 pt-24 border-t border-charcoal/5">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12 text-center">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
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
