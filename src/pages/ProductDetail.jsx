import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-accent transition-colors">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="text-sm text-muted-foreground leading-relaxed font-light">
          {children}
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('');
  const [activeImg, setActiveImg] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedTone(foundProduct.tones[0]);
      setActiveImg(foundProduct.gallery[0]);
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, id, activeImg]);

  if (!product) return (
    <div className="h-screen flex items-center justify-center">
      <p className="font-serif italic text-2xl animate-pulse">Loading collection...</p>
    </div>
  );

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, tone: selectedTone }, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1">
            {product.gallery.map((imgId, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(imgId)}
                className={cn(
                  "w-20 aspect-[3/4] bg-muted overflow-hidden transition-all duration-300 border-2",
                  activeImg === imgId ? "border-accent" : "border-transparent"
                )}
              >
                <img
                  data-strk-img-id={`thumb-${imgId}`}
                  data-strk-img={`[product-name] jewelry product detail view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Display */}
          <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden order-1 md:order-2">
            <img
               data-strk-img-id={`main-${activeImg}`}
               data-strk-img={`[product-name] gold jewelry macro high resolution detail`}
               data-strk-img-ratio="3x4"
               data-strk-img-width="1200"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
               alt={product.name}
               className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 id="product-name" className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-widest leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center space-x-6">
              <span className="text-2xl font-light text-foreground">${product.price}</span>
              <div className="flex items-center text-accent/80 space-x-1 border-l border-border pl-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-3 h-3 fill-current", i >= Math.floor(product.rating) && "opacity-30")} />
                ))}
                <span className="text-[10px] uppercase tracking-widest ml-2 text-muted-foreground font-bold">
                  ({product.rating})
                </span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-10 py-8 border-y border-border">
            {/* Tone Selector */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Select Tone</h3>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2.5 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      selectedTone === tone ? "border-foreground bg-foreground text-background font-bold shadow-md" : "border-border hover:border-foreground/50"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Quantity</h3>
              <div className="flex items-center w-fit border border-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                   className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
               onClick={handleAddToCart}
               className="btn-premium w-full py-5 text-xs font-bold shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Details Accordion */}
          <div className="pt-4">
            <Accordion title="Description">
              {product.description} Velmora pieces are designed for longevity and timeless style. Each detail is considered, from the weight of the metal to the clarity of the accents.
            </Accordion>
            <Accordion title="Materials & Care">
              {product.materials}. To maintain the shine of your pieces, we recommend avoiding contact with perfume, lotions, and chlorine. Wipe clean with a soft polishing cloth after each wear.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on all orders over $100. Delivered in our signature gold-stamped luxury box. We offer returns or exchanges within 30 days of delivery.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-40">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif uppercase tracking-widest mb-4">You May Also Like</h2>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
