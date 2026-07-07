import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag, Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="title-uppercase text-xs group-hover:text-primary transition-colors">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="mt-4 font-sans font-light text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, activeImage]);

  if (!product) return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-serif mb-8">Piece not found.</h1>
      <Link to="/shop" className="title-uppercase text-xs border-b border-primary pb-1">Return to Archive</Link>
    </div>
  );

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-background min-h-screen pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 pt-12">
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-[10px] title-uppercase text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Archive</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          {/* Left: Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
            <span id="pdp-query" className="hidden">{product.imageQuery}</span>
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 aspect-[3/4] bg-secondary overflow-hidden border ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-query] view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-secondary overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-query] studio high detail view ${activeImage}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-700"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5">
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-sans">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-[10px] title-uppercase text-muted-foreground ml-2">(12 Reviews)</span>
              </div>
            </div>
            
            <p className="font-sans font-light text-muted-foreground leading-relaxed mb-10 text-lg">
              {product.description}
            </p>
            
            <div className="space-y-10 mb-12">
              {/* Variant Selector */}
              <div>
                <span className="title-uppercase text-[10px] block mb-4">Tone: {selectedVariant}</span>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-8 py-3 title-uppercase text-[10px] border transition-editorial ${selectedVariant === variant ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50'}`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <span className="title-uppercase text-[10px] block mb-4">Quantity</span>
                <div className="flex items-center w-32 border border-border">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-primary transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex-grow text-center font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-primary transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="w-full bg-primary text-primary-foreground py-5 title-uppercase text-xs font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-editorial mb-12 shadow-md hover:shadow-lg"
            >
              <ShoppingBag size={18} />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>
            
            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Materials: {product.materials}</p>
                <div className="mt-4 space-y-2">
                  <p>• Avoid contact with water, perfume, and cosmetics.</p>
                  <p>• Store in your Velmora pouch when not in use.</p>
                  <p>• Clean gently with a soft, lint-free cloth.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders over $75. Standard shipping is 3-5 business days.</p>
                <p className="mt-4">We accept returns within 30 days of purchase. Items must be in original condition and packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-border">
          <h2 className="text-3xl font-serif mb-12 italic">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                  <span id={`pdp-rel-query-${p.id}`} className="hidden">{p.imageQuery}</span>
                  <Link to={`/product/${p.id}`} className="block h-full">
                    <img
                      data-strk-img-id={`pdp-rel-main-${p.id}`}
                      data-strk-img={`[pdp-rel-query-${p.id}] studio`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-editorial group-hover:scale-105"
                    />
                  </Link>
                </div>
                <h3 className="title-uppercase text-[10px] mb-1">
                  <Link to={`/product/${p.id}`}>{p.name}</Link>
                </h3>
                <p className="font-sans font-medium text-sm">${p.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
