import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { products } from '@/lib/data';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-platinum">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-widest hover:text-accent transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <p className="text-sm text-foreground/60 leading-relaxed font-sans">{children}</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-40 text-center font-serif py-20">Product not found.</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground mb-12 transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Shop</span>
        </Link>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible scrollbar-hide">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={cn(
                      "w-20 md:w-24 aspect-[3/4] flex-shrink-0 bg-platinum transition-opacity duration-300",
                      activeThumb === idx ? "opacity-100 ring-1 ring-foreground/20" : "opacity-40 hover:opacity-100"
                    )}
                  >
                    <img
                       data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                       data-strk-img={`[pdp-title] gold jewelry detail shot ${idx === 0 ? 'lifestyle' : 'studio'}`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="200"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                       className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 aspect-[3/4] bg-platinum relative overflow-hidden">
                <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-title] luxury gold jewelry close up high-end editorial ${activeThumb === 0 ? 'lifestyle' : 'studio'}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-2/5 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">{product.category}</span>
              <h1 id="pdp-title" className="text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <p className="text-xl font-sans tracking-wide text-foreground">${product.price.toFixed(2)}</p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                  <span className="text-[10px] text-foreground/40 font-medium">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground/60 leading-relaxed font-sans max-w-md">
              {product.description}
            </p>

            {/* Variants */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-accent">Tone: {selectedVariant}</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      selectedVariant === variant
                        ? "bg-foreground text-white border-foreground"
                        : "border-platinum text-foreground/40 hover:border-foreground/40 hover:text-foreground"
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-platinum">
                  <button
                    className="p-3 hover:bg-black/5"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-6 text-sm w-12 text-center">{quantity}</span>
                  <button
                    className="p-3 hover:bg-black/5"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <Button
                className="w-full py-5 text-base"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product, selectedVariant);
                  }
                }}
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion title="Description">
                {product.description} This piece is designed to be worn independently or stacked with our other essentials. Each item comes in our signature sustainable packaging.
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To keep your jewelry looking its best, avoid contact with perfumes, lotions, and moisture. Store in a dry place when not in use.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders over $100. We offer a 30-day return policy for unused items in their original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 pt-24 border-t border-platinum">
            <h2 className="text-2xl mb-16 italic text-center opacity-60">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
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
