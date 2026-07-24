import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="font-serif text-lg tracking-wide">{title}</span>
        <ChevronDown 
          size={16} 
          className={cn("transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <div className="font-sans text-muted-foreground text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.slug === slug);
  const relatedProducts = products.filter(p => p.id !== product?.id).slice(0, 4);
  
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const [activeImage, setActiveImage] = useState('main');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, tone);
  };

  return (
    <div ref={containerRef} className="pt-24 min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-4 flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-24">
        
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-24">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-20 shrink-0 hide-scrollbar cursor-pointer">
            <button 
              onClick={() => setActiveImage('main')}
              className={cn(
                "relative aspect-[4/5] w-20 shrink-0 overflow-hidden outline transition-all",
                activeImage === 'main' ? "outline-1 outline-foreground" : "outline-0 outline-transparent hover:outline-border outline-1"
              )}
            >
              <img
                alt={`${product.name} thumbnail 1`}
                data-strk-img-id={`pdp-thumb-${product.id}-main`}
                data-strk-img={`[pdp-product-name]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="150"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
            <button 
              onClick={() => setActiveImage('hover')}
              className={cn(
                "relative aspect-[4/5] w-20 shrink-0 overflow-hidden outline transition-all cursor-pointer",
                activeImage === 'hover' ? "outline-1 outline-foreground" : "outline-0 outline-transparent hover:outline-border outline-1"
              )}
            >
              <img
                alt={`${product.name} thumbnail 2`}
                data-strk-img-id={`pdp-thumb-${product.id}-hover`}
                data-strk-img={`[pdp-product-name] worn model`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="150"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-secondary aspect-[4/5] overflow-hidden relative">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.id}-main`}
              data-strk-img={`[pdp-product-name]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                activeImage === 'main' ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            />
            <img
              alt={`${product.name} worn`}
              data-strk-img-id={`pdp-main-${product.id}-hover`}
              data-strk-img={`[pdp-product-name] worn model`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                activeImage === 'hover' ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col pt-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{product.category}</p>
          <h1 id="pdp-product-name" className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-tight">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="font-sans text-xl">${product.price}</p>
            <div className="flex items-center text-primary">
              <div className="flex mr-1">
                {[1,2,3,4,5].map(star => <Star key={star} size={14} fill={star <= Math.floor(product.rating) ? "currentColor" : "none"} />)}
              </div>
              <span className="text-xs font-sans tracking-wide text-muted-foreground mt-0.5 ml-1">({product.reviews})</span>
            </div>
          </div>

          <p className="font-sans text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          <div className="space-y-6 mb-8">
            {/* Tone Selector */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest mb-3">Tone: <span className="text-muted-foreground capitalize">{tone}</span></p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTone('gold')}
                  className={cn(
                    "flex flex-col items-center gap-2 relative",
                    tone === 'gold' ? "opacity-100" : "opacity-50 hover:opacity-100"
                  )}
                >
                  <span className="w-8 h-8 rounded-full bg-[#E5C158] block outline outline-1 outline-offset-2" style={{ outlineColor: tone === 'gold' ? 'currentColor' : 'transparent' }}></span>
                </button>
                <button 
                  onClick={() => setTone('silver')}
                  className={cn(
                    "flex flex-col items-center gap-2 relative",
                    tone === 'silver' ? "opacity-100" : "opacity-50 hover:opacity-100"
                  )}
                >
                  <span className="w-8 h-8 rounded-full bg-[#E2E8F0] block outline outline-1 outline-offset-2" style={{ outlineColor: tone === 'silver' ? 'currentColor' : 'transparent' }}></span>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit h-12">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full flex items-center hover:bg-secondary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-sm w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full flex items-center hover:bg-secondary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-4 font-sans font-medium uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors mb-12"
          >
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="border-t border-border">
            <Accordion title="Description" defaultOpen={true}>
              {product.description} <br/><br/>
              A perfect addition to your curated collection. Enjoy the balance of minimal design and maximum impact.
            </Accordion>
            <Accordion title="Materials & Care">
              {product.details} <br/><br/>
              To keep your jewelry looking its best, avoid contact with perfumes, lotions, and harsh chemicals. Remove before swimming or showering. Store in the provided pouch.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Enjoy free worldwide shipping on all orders. Returns are accepted within 30 days of delivery for a full refund, provided the items remain unworn and in their original packaging.
            </Accordion>
          </div>

        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <Link to={`/product/${p.slug}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                  <span id={`related-${p.id}-name`} className="hidden">{p.name}</span>
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-${p.id}-name]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col flex-1">
                  <Link to={`/product/${p.slug}`} className="font-serif text-base tracking-wider uppercase mb-1 hover:text-primary transition-colors line-clamp-1">
                    {p.name}
                  </Link>
                  <p className="font-sans text-sm text-muted-foreground">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;