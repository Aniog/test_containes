import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Plus, Minus, Gem, Truck, RotateCcw, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    let frameId;
    if (containerRef.current) {
        frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
    }
    return () => {
        if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="btn-primary">Return to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  // Mock related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // If not enough in category, just grab some
  if (relatedProducts.length < 4) {
    const more = products.filter(p => p.id !== product.id && !relatedProducts.includes(p));
    relatedProducts.push(...more.slice(0, 4 - relatedProducts.length));
  }

  // Generate 4 mock image IDs for the gallery
  const galleryImages = [
    { id: `${product.imgId}-gal`, query: `[${product.descId}] [${product.titleId}] jewelry front` },
    { id: `${product.imgHoverId}-gal`, query: `[${product.descId}] [${product.titleId}] jewelry worn on model` },
    { id: `${product.id}-detail`, query: `[${product.descId}] [${product.titleId}] jewelry detail close up` },
    { id: `${product.id}-packaging`, query: `[${product.titleId}] jewelry beautiful packaging box` },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex gap-2 text-xs uppercase tracking-widest text-velmora-500 mb-8 mt-4">
          <Link to="/" className="hover:text-velmora-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-900 transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-velmora-900 transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-velmora-900">{product.name}</span>
        </div>

        {/* Product Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 w-full md:w-24 overflow-x-auto md:overflow-visible hide-scrollbar snap-x">
              {galleryImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "flex-shrink-0 w-20 md:w-full aspect-[3/4] border transition-all snap-center",
                    activeImage === idx ? "border-velmora-900 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    key={`${img.id}-thumb`}
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-velmora-50 aspect-[3/4] relative">
              <img
                key={`${galleryImages[activeImage].id}-main`}
                alt={product.name}
                data-strk-img-id={`${galleryImages[activeImage].id}-main`}
                data-strk-img={galleryImages[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-2/5">
            <h1 id={product.titleId} className="text-3xl md:text-5xl font-serif uppercase tracking-widest text-velmora-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-velmora-900 font-light">${product.price}</span>
              <div className="flex items-center gap-2">
                <div className="flex text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Gem 
                      key={i} 
                      size={14} 
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                      className={i >= Math.floor(product.rating) ? "text-velmora-300" : ""}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-500 underline underline-offset-4 cursor-pointer">{product.reviews} reviews</span>
              </div>
            </div>

            <p id={product.descId} className="text-velmora-600 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm uppercase tracking-widest font-medium">Metal: <span className="font-light text-velmora-600 ml-1">{variant}</span></span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={cn(
                    "w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center",
                    variant === 'Gold' ? "border-velmora-900" : "border-transparent"
                  )}
                  aria-label="Select Gold"
                >
                  <span className="w-9 h-9 rounded-full bg-gold inline-block shadow-inner"></span>
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={cn(
                    "w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center",
                    variant === 'Silver' ? "border-velmora-900" : "border-transparent"
                  )}
                  aria-label="Select Silver"
                >
                  <span className="w-9 h-9 rounded-full bg-[#E5E4E2] inline-block shadow-inner"></span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-10 h-14">
              <div className="flex items-center border border-velmora-300 px-2 w-32 py-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-velmora-500 hover:text-velmora-900 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-velmora-500 hover:text-velmora-900 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex-1 !py-0"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Mini Trust Bar */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-velmora-200 mb-8">
              <div className="flex items-center gap-3 text-sm text-velmora-700">
                <Truck size={18} className="text-velmora-400" /> Free Shipping
              </div>
              <div className="flex items-center gap-3 text-sm text-velmora-700">
                <RotateCcw size={18} className="text-velmora-400" /> Easy Returns
              </div>
              <div className="flex items-center gap-3 text-sm text-velmora-700">
                <ShieldCheck size={18} className="text-velmora-400" /> 1-Year Warranty
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-200">
              
              {/* Desc Accordion */}
              <div className="border-b border-velmora-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Description</span>
                  {openAccordion === 'description' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'description' ? "max-h-96 pb-5" : "max-h-0"
                )}>
                  <p className="text-velmora-600 font-light leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Materials Accordion */}
              <div className="border-b border-velmora-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Materials & Care</span>
                  {openAccordion === 'materials' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'materials' ? "max-h-96 pb-5" : "max-h-0"
                )}>
                  <ul className="list-disc pl-5 text-velmora-600 font-light mb-4 space-y-1">
                    {product.materials.map((mat, i) => <li key={i}>{mat}</li>)}
                  </ul>
                  <p className="text-velmora-600 font-light text-sm italic">{product.care}</p>
                </div>
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-velmora-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'shipping' ? "max-h-96 pb-5" : "max-h-0"
                )}>
                  <p className="text-velmora-600 font-light leading-relaxed mb-3">
                    Enjoy free worldwide shipping on orders over $100. Orders are processed within 1-2 business days.
                  </p>
                  <p className="text-velmora-600 font-light leading-relaxed">
                    We accept returns within 30 days of receipt. Items must be in their original condition and packaging.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="pt-24 border-t border-velmora-200">
          <div className="text-center mb-16">
            <h2 id="related-title" className="text-3xl md:text-4xl font-serif">You May Also Like</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-velmora-100 mb-4 overflow-hidden">
                  <Link to={`/product/${p.id}`} className="block h-full w-full">
                    <img
                      key={`${p.imgId}-related`}
                      alt={p.name}
                      data-strk-img-id={`${p.imgId}-related`}
                      data-strk-img={`[${p.descId}] [${p.titleId}] [related-title] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="400"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <img
                      key={`${p.imgHoverId}-related`}
                      alt={`${p.name} hover`}
                      data-strk-img-id={`${p.imgHoverId}-related`}
                      data-strk-img={`[${p.descId}] [${p.titleId}] jewelry worn on model`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="400"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </Link>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(p);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-900 font-serif tracking-widest uppercase text-xs py-3 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-900 hover:text-white"
                  >
                    Quick Add
                  </button>
                </div>
                <div className="text-center">
                  <h3 id={p.titleId} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">
                    <Link to={`/product/${p.id}`}>{p.name}</Link>
                  </h3>
                  <p className="text-velmora-600 font-light">${p.price}</p>
                  <p id={p.descId} className="sr-only">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}