import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group"
      >
        <span className="font-sans text-[11px] uppercase tracking-super-wide font-bold group-hover:text-primary transition-colors">{title}</span>
        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
      </button>
      {isOpen && (
        <div className="mt-4 font-sans text-sm text-stone-500 leading-relaxed pr-8 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-4 md:px-12 lg:px-20 bg-background animate-fade-in">
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-[10px] md:text-[11px] font-sans uppercase tracking-widest text-stone-400">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-stone-950 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-950 truncate max-w-[150px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-grow aspect-[3/4] bg-stone-100 overflow-hidden relative">
              <img 
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] ${activeImage === 0 ? 'main view' : 'detail view'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </div>
            
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "min-w-[80px] md:min-w-0 aspect-[3/4] bg-stone-100 border transition-all",
                    activeImage === idx ? "border-primary" : "border-transparent opacity-60 grayscale-[50%] hover:opacity-100 hover:grayscale-0"
                  )}
                >
                  <img 
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] thumbnail ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                    alt={`${product.name} thumb ${idx}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="font-sans text-[10px] uppercase font-bold tracking-super-wide text-primary">{product.category}</p>
              <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] uppercase tracking-[0.1em]">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="font-serif text-3xl font-light text-stone-900">${product.price}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />)}
                  <span className="text-[10px] font-sans font-bold text-stone-400 ml-2">(24 REVIEWS)</span>
                </div>
              </div>
              <p className="font-sans text-sm text-stone-500 leading-loose max-w-lg italic">
                {product.description}
              </p>
            </div>

            <div className="space-y-8">
              {/* Variant Selector */}
              <div className="space-y-4">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-stone-400">Finish: {variant}</span>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-6 py-2.5 text-[10px] font-sans font-bold tracking-widest border transition-all",
                        variant === v ? "bg-stone-950 text-white border-stone-950" : "bg-transparent text-stone-400 border-stone-200 hover:border-stone-400"
                      )}
                    >
                      {v.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-stone-200 h-14 min-w-[120px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 h-full flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-sans font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-full flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow h-14"
                >
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-10">
              <Accordion title="Description">
                {product.description} Our pieces are designed to be worn every day and cherished forever.
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Materials: {product.details.materials}</p>
                <p className="mt-2">{product.details.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders over $75. 30-day returns on all items except final sale. Items must be returned in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-serif italic mb-4">You May Also Like</h2>
              <div className="h-px bg-stone-200 w-24 mx-auto" />
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
