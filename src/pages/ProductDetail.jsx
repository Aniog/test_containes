import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { seedProducts } from '../lib/data';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Top of page on load
    window.scrollTo(0, 0);
    
    // Find product
    const found = seedProducts.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setQuantity(1);
      setActiveImageIndex(0);
    } else {
      navigate('/collections/all');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (product && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, activeImageIndex]);

  if (!product) return <div className="min-h-screen pt-32 text-center relative z-10 bg-background text-foreground">Loading...</div>;

  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, { color: selectedColor });
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-background text-foreground relative z-10" ref={containerRef}>
      
      {/* Breadcrumbs */}
      <div className="flex items-center text-xs text-muted-foreground uppercase tracking-wider mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/collections/all" className="hover:text-foreground">Shop</Link>
        <ChevronRight size={14} className="mx-2" />
        <span>{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Images Column */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          
          {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 shrink-0 px-1 md:px-0">
            {[0, 1, 2, 3].map((idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[4/5] w-20 md:w-full shrink-0 bg-secondary ${
                  activeImageIndex === idx ? 'ring-1 ring-foreground ring-offset-1' : 'opacity-70 hover:opacity-100'
                } transition-all`}
              >
                <img
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`pdp-thumb-slot-${idx}`}
                  data-strk-img={`[pdp-title] ${idx === 0 ? 'isolated neutral background' : idx === 1 ? 'worn by model' : idx === 2 ? 'detail macro shot' : 'lifestyle context'} warm light`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="150"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative aspect-[4/5] w-full bg-secondary grow">
            {/* Render 4 main images but only show the active one to keep static ids */}
            {[0, 1, 2, 3].map((idx) => (
              <img
                key={idx}
                alt={`${product.name} main view ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeImageIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                data-strk-img-id={`pdp-main-slot-${idx}`}
                data-strk-img={`[pdp-title] ${idx === 0 ? 'isolated neutral background' : idx === 1 ? 'worn by model' : idx === 2 ? 'detail macro shot' : 'lifestyle context'} warm light`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">
          
          <div className="mb-8">
            <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-accent">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" strokeWidth={0} />)}
                <span className="text-xs text-muted-foreground ml-2 uppercase tracking-wide">(4.8 / 125 Reviews)</span>
              </div>
            </div>

            <p id="pdp-desc" className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t border-border pt-8 mb-8 space-y-8">
            
            {/* Tone Selection */}
            <div>
              <div className="flex justify-between items-center mb-3 text-sm uppercase tracking-wide">
                <span>Tone</span>
                <span className="text-muted-foreground">{selectedColor}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedColor('Gold')}
                  className={`w-12 h-12 rounded-full bg-[#E5C158] ring-offset-2 transition-all ${
                    selectedColor === 'Gold' ? 'ring-1 ring-foreground opacity-100' : 'ring-0 opacity-50 hover:opacity-80'
                  }`}
                  aria-label="Select Gold tone"
                />
                <button
                  onClick={() => setSelectedColor('Silver')}
                  className={`w-12 h-12 rounded-full bg-[#E0E2E5] ring-offset-2 transition-all ${
                    selectedColor === 'Silver' ? 'ring-1 ring-foreground opacity-100' : 'ring-0 opacity-50 hover:opacity-80'
                  }`}
                  aria-label="Select Silver tone"
                />
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 h-14">
              <div className="flex items-center justify-between border border-border px-4 w-1/3 min-w-[100px]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-sm font-medium transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Trust Mini */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs text-muted-foreground uppercase tracking-widest">
              <div className="flex items-center gap-2"><Truck size={16} /> Free Shipping</div>
              <div className="flex items-center gap-2"><RotateCcw size={16} /> 30-Day Returns</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16} /> 1 Year Warranty</div>
            </div>

          </div>

          {/* Accordions */}
          <div className="border-t border-border divide-y divide-border">
            
            <div className="py-4">
              <button 
                className="flex justify-between items-center w-full uppercase tracking-wider text-sm hover:text-accent transition-colors"
                onClick={() => toggleAccordion('description')}
              >
                <span>Description</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${openAccordion === 'description' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description} Designed in our studio and crafted with intention. This piece is perfect for building your everyday jewelry wardrobe. Includes a branded pouch and gift box.
                </p>
              </div>
            </div>

            <div className="py-4">
              <button 
                className="flex justify-between items-center w-full uppercase tracking-wider text-sm hover:text-accent transition-colors"
                onClick={() => toggleAccordion('materials')}
              >
                <span>Materials & Care</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${openAccordion === 'materials' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc pl-4">
                  <li>Thick 18k gold plating over sterling silver or brass core.</li>
                  <li>Hypoallergenic, nickel-free and lead-free.</li>
                  <li>Avoid contact with perfumes, lotions, and harsh chemicals.</li>
                  <li>To clean, wipe gently with the included soft cloth.</li>
                </ul>
              </div>
            </div>

            <div className="py-4">
              <button 
                className="flex justify-between items-center w-full uppercase tracking-wider text-sm hover:text-accent transition-colors"
                onClick={() => toggleAccordion('shipping')}
              >
                <span>Shipping & Returns</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <p><strong>Standard Shipping:</strong> Free on all orders (3-5 business days).</p>
                  <p><strong>Express Shipping:</strong> $15 (1-2 business days).</p>
                  <p><strong>Returns:</strong> We accept returns on unworn items within 30 days of delivery. Excludes pierced earrings for hygiene reasons unless faulty.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32 border-t border-border pt-16">
        <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider mb-10 text-center">You May Also Like</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group flex flex-col relative w-full">
              <Link to={`/product/${p.id}`} className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4 block w-full">
                <img
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`rel-img1-${p.id}`}
                  data-strk-img={`[prod-title-rel-${p.id}] isolated neutral jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                {/* Desktop hover quick add */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hidden md:block">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(p, 1, { color: 'Gold' });
                    }}
                    className="w-full bg-white text-black py-3 uppercase tracking-widest text-xs font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="mt-auto">
                <h3 id={`prod-title-rel-${p.id}`} className="font-serif uppercase tracking-wider text-sm mb-1 leading-tight line-clamp-1">
                  <Link to={`/product/${p.id}`}>{p.name}</Link>
                </h3>
                <p className="text-muted-foreground text-sm">${p.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
