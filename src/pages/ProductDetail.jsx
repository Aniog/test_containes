import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { cn } from '../lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full py-4 text-sm tracking-wide uppercase hover:text-primary transition-colors font-medium"
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-muted-foreground leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [mainImageIdx, setMainImageIdx] = useState(0);
  
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
    window.scrollTo(0, 0);
  }, [product, navigate, id]);

  useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, id]);

  if (!product) return null;

  return (
    <div ref={containerRef} className="pt-24 pb-24 w-full">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex gap-2 text-xs text-muted-foreground tracking-widest uppercase">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="truncate">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
        {/* Gallery */}
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 aspect-[3/4] bg-secondary relative">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover object-center absolute inset-0 z-10"
              data-strk-img-id={`pdp-${product.id}-main-${mainImageIdx}`}
              data-strk-img={`[pdp-title] ${mainImageIdx === 0 ? 'solid background close up' : 'lifestyle worn model'}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible shrink-0 md:w-24 pb-2 md:pb-0 scrollbar-hide">
            {[0, 1].map(idx => (
              <button 
                key={idx}
                onClick={() => setMainImageIdx(idx)}
                className={cn(
                  "w-20 md:w-full aspect-[3/4] shrink-0 border transition-all",
                  mainImageIdx === idx ? "border-foreground p-0.5" : "border-transparent hover:border-border p-0"
                )}
              >
                <div className="w-full h-full bg-secondary relative overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-img={`[pdp-title] ${idx === 0 ? 'solid background close up' : 'lifestyle worn model'}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col pt-4 md:pt-10">
          <div className="flex gap-1 text-[#FFD700] mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={14} />)}
            <span className="text-muted-foreground text-xs ml-2 uppercase tracking-widest leading-none mt-0.5">(28 Reviews)</span>
          </div>
          
          <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif uppercase tracking-wider mb-4 leading-tight">{product.name}</h1>
          <p className="text-2xl mb-8">${product.price}</p>
          
          <p className="text-muted-foreground leading-relaxed mb-10 font-light text-lg">
            {product.description}
          </p>
          
          {/* Variant Selection */}
          <div className="mb-8">
            <span className="block text-sm uppercase tracking-widest font-medium mb-3">Metal Finish: {variant}</span>
            <div className="flex gap-3">
              <button 
                onClick={() => setVariant('Gold')}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border transition-all",
                  variant === 'Gold' ? "border-foreground p-1" : "border-transparent hover:border-border"
                )}
                aria-label="Select Gold"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F5D76E] to-[#C59B27]" />
              </button>
              <button 
                onClick={() => setVariant('Silver')}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border transition-all",
                  variant === 'Silver' ? "border-foreground p-1" : "border-transparent hover:border-border"
                )}
                aria-label="Select Silver"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E0E0E0] to-[#999999]" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-border sm:w-1/3">
              <button 
                className="p-4 hover:bg-secondary transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={16} />
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button 
                className="p-4 hover:bg-secondary transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <button 
              className="flex-1 bg-primary text-primary-foreground py-4 tracking-widest text-sm uppercase hover:bg-black transition-colors font-medium border border-primary hover:border-black"
              onClick={() => addItem(product, quantity, variant)}
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
          
          <div className="mt-auto border-t border-border">
            <Accordion title="Description" defaultOpen={true}>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
              <p>Our jewelry is crafted in thick 18k gold vermeil over a solid sterling silver base, designed to last. To preserve its shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not worn.</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">Free standard shipping on all orders. Express shipping available at checkout.</p>
              <p>We accept returns within 30 days of delivery for a full refund. Items must be unworn and in original packaging. Pierced earrings must remain in their sealed hygienic wrapper.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-border pt-24">
          <h2 id="related-title" className="text-3xl text-center mb-16">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <Link to={`/product/${rp.id}`} className="block w-full h-full">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover object-center absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`related-${rp.id}-img`}
                      data-strk-img={`[related-${rp.id}-title] [related-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                    />
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Link to={`/product/${rp.id}`}>
                    <h3 id={`related-${rp.id}-title`} className="font-serif text-lg uppercase tracking-wider mb-2">{rp.name}</h3>
                  </Link>
                  <p className="text-muted-foreground">${rp.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
