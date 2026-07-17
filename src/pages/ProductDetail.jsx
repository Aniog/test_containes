import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { ChevronRight, Star, Minus, Plus, Heart, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = seedProducts.find(p => p.id === productId);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId, variant, activeAccordion]);

  if (!product) return <div className="pt-32 px-6 text-center">Product not found.</div>;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.details },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $75. 30-day effortless returns for store credit or refund.' },
  ];

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-velmora-bg min-h-screen">
      <div className="container-custom max-w-[1440px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-velmora-muted mb-12">
          <Link to="/" className="hover:text-velmora-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-accent transition-colors">Collection</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={cn(
                    "w-16 h-20 md:w-20 md:h-24 bg-velmora-beige overflow-hidden border transition-all",
                    selectedImageIdx === idx ? "border-velmora-accent opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                   <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={img.dataStrkImg}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={`${product.name} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-velmora-beige aspect-[4/5] overflow-hidden order-1 md:order-2 shadow-sm">
                <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={product.images[selectedImageIdx].dataStrkImg}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-1 text-velmora-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
                <span className="text-[10px] uppercase tracking-widest text-velmora-muted ml-2">24 Reviews</span>
              </div>
              <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif text-velmora-text uppercase tracking-[0.1em]">
                {product.name}
              </h1>
              <p className="text-2xl font-serif text-velmora-text">${product.price}</p>
              <p className="text-sm text-velmora-muted leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-velmora-muted block">Finish: <span className="text-velmora-text">{variant === 'gold' ? '18K Gold' : 'Sterling Silver'}</span></label>
              <div className="flex space-x-4">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-8 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      variant === v ? "bg-velmora-text text-white border-velmora-text" : "border-velmora-text/10 hover:border-velmora-text/40"
                    )}
                  >
                    {v === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-velmora-text/10 w-full sm:w-fit bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-velmora-beige transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm tabular-nums">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-velmora-beige transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => {
                  addToCart(product, quantity);
                  toast.success(`${product.name} added to bag`);
                }}
                className="flex-1 btn-primary py-4 flex items-center justify-center space-x-2"
              >
                <span>Add to Cart</span>
              </button>
              <button className="p-4 border border-velmora-text/10 hover:bg-velmora-beige transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-[9px] uppercase tracking-widest text-velmora-muted">
              <div className="flex flex-col items-center space-y-2">
                <ShieldCheck className="w-5 h-5 opacity-40 text-velmora-accent" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Truck className="w-5 h-5 opacity-40 text-velmora-accent" />
                <span>Global Delivery</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <RotateCcw className="w-5 h-5 opacity-40 text-velmora-accent" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-text/10 pt-10 mt-10">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-text/10 last:border-b-0">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full py-5 flex items-center justify-between group"
                  >
                    <span className="font-serif uppercase tracking-widest text-sm group-hover:text-velmora-accent transition-colors">{acc.title}</span>
                    <Plus className={cn("w-4 h-4 transition-transform duration-300", activeAccordion === acc.id && "rotate-45")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    activeAccordion === acc.id ? "max-h-96 pb-8" : "max-h-0"
                  )}>
                    <p className="text-sm text-velmora-muted leading-relaxed italic">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40">
          <h2 className="text-2xl font-serif uppercase tracking-[0.2em] mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group">
                <Link to={`/product/${p.id}`} className="block aspect-[3/4] bg-velmora-beige overflow-hidden mb-4 relative" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={p.images[0].dataStrkImg}
                    data-strk-img-ratio="4/5"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-full bg-white/9 text-[10px] uppercase tracking-widest py-2 hover:bg-velmora-accent hover:text-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </Link>
                <Link to={`/product/${p.id}`} className="font-serif text-sm uppercase tracking-widest hover:text-velmora-accent transition-colors">
                  {p.name}
                </Link>
                <p className="text-sm text-velmora-muted mt-1 font-light">${p.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
