import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Star, ChevronDown, ChevronUp, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../lib/CartContext';

const PRODUCTS = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    type: 'Ear Cuff',
    desc: 'Gold ear cuff with crystal accent. An effortless addition to any ear stack, requiring no piercing.',
    imgId: 'product-1-vivid-aura',
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    type: 'Necklace',
    desc: 'Multicolor floral crystal necklace. A vibrant yet delicate piece that catches light beautifully.',
    imgId: 'product-2-majestic-flora',
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    type: 'Huggies',
    desc: 'Chunky gold dome huggie earrings. Lightweight enough for daily wear but bold enough to make a statement.',
    imgId: 'product-3-golden-sphere',
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    type: 'Earrings',
    desc: 'Textured gold filigree drop earrings. Vintage-inspired design with a modern, warm gold finish.',
    imgId: 'product-4-amber-lace',
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    type: 'Set',
    desc: 'Gift-boxed earring + necklace set. The perfect matching parure for special occasions or gifting.',
    imgId: 'product-5-royal-heirloom',
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    let cleanup = () => {};
    try {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not ready or config missing', e);
    }
    return () => cleanup && typeof cleanup === 'function' && cleanup();
  }, [id, activeImage]);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const images = Array(4).fill(null).map((_, i) => ({
    id: `${product.imgId}-img-${i}`,
    ratio: "3x4"
  }));

  const recommendedItems = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      {/* Breadcrumbs */}
      <nav className="flex text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground/50 mb-8 md:mb-12">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/collection" className="hover:text-foreground transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="lg:w-1/2 flex flex-col md:flex-row-reverse gap-4 md:gap-6">
          <div className="w-full md:w-5/6 aspect-[3/4] bg-secondary relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={`${product.name} view ${activeImage + 1}`}
              data-strk-img-id={images[activeImage].id}
              data-strk-img={`[product-name] [product-type] detail view ${activeImage}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="w-full md:w-1/6 flex flex-row md:flex-col gap-4 overflow-x-auto hide-scrollbars">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 aspect-[3/4] w-20 md:w-full bg-secondary relative overflow-hidden transition-all ${
                  activeImage === idx ? 'ring-1 ring-offset-2 ring-foreground/20' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  data-strk-img-id={`thumb-${img.id}`}
                  data-strk-img={`[product-name] [product-type] detail view ${idx}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 flex flex-col">
          <p id="product-type" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground/50 mb-3">{product.type}</p>
          <h1 id="product-name" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.1em] mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-medium">${product.price}</p>
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs text-foreground/50 ml-2 font-sans tracking-wide">(128)</span>
            </div>
          </div>

          <p className="text-sm text-foreground/80 leading-relaxed mb-8 font-light max-w-lg">
            {product.desc}
          </p>

          <hr className="border-border/50 mb-8" />

          {/* Variants */}
          <div className="mb-8">
            <span className="block text-xs uppercase tracking-[0.2em] font-semibold mb-3">Tone: <span className="text-foreground/60">{variant}</span></span>
            <div className="flex gap-3">
              <button 
                onClick={() => setVariant('Gold')}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  variant === 'Gold' ? 'border-foreground p-1' : 'border-transparent'
                }`}
              >
                <span className="block w-full h-full rounded-full bg-[#E5C784]"></span>
              </button>
              <button 
                onClick={() => setVariant('Silver')}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  variant === 'Silver' ? 'border-foreground p-1' : 'border-transparent'
                }`}
              >
                <span className="block w-full h-full rounded-full bg-[#E0E0E0]"></span>
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-foreground/20">
              <button 
                className="px-4 py-4 hover:bg-foreground/5 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button 
                className="px-4 py-4 hover:bg-foreground/5 transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-[0.2em] text-xs font-semibold transition-colors"
              onClick={() => addToCart(product, quantity, variant)}
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border/50">
            {/* Description */}
            <div className="border-b border-border/50">
              <button 
                className="w-full py-5 flex justify-between items-center text-xs uppercase tracking-[0.2em] font-semibold"
                onClick={() => toggleAccordion('description')}
              >
                Description
                {openAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                  Every Velmora piece is thoughtfully designed to be layered and loved. This item features a high-polish finish and comes beautifully packaged in our signature box, perfect for gifting or keeping securely.
                </p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="border-b border-border/50">
              <button 
                className="w-full py-5 flex justify-between items-center text-xs uppercase tracking-[0.2em] font-semibold"
                onClick={() => toggleAccordion('materials')}
              >
                Materials & Care
                {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <ul className="text-sm text-foreground/70 font-light leading-relaxed list-disc list-inside ml-4">
                  <li>18K Gold Plated over brass</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Avoid direct contact with perfumes and lotions</li>
                  <li>Store in the provided pouch when not in use</li>
                </ul>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-b border-border/50">
              <button 
                className="w-full py-5 flex justify-between items-center text-xs uppercase tracking-[0.2em] font-semibold"
                onClick={() => toggleAccordion('shipping')}
              >
                Shipping & Returns
                {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                  Complimentary worldwide shipping on all orders over $50. We accept returns within 30 days of delivery in unworn condition. See our full return policy for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 mt-12">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 id="related-title" className="text-2xl md:text-3xl font-serif uppercase tracking-[0.1em]">You May Also Like</h2>
          <Link to="/collection" className="text-xs font-semibold uppercase tracking-[0.2em] hover:text-accent transition-colors flex items-center gap-2 hidden md:flex">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {recommendedItems.map((rec) => (
            <Link key={rec.id} to={`/product/${rec.id}`} className="group group/card block cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="relative aspect-[3/4] bg-secondary/30 mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={rec.name}
                  data-strk-img-id={rec.imgId}
                  data-strk-img={`[rec-type-${rec.id}] [rec-name-${rec.id}] [related-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <button className="w-full bg-background text-foreground py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-accent-foreground transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 opacity-0 group-hover:opacity-100 border border-transparent">
                    View Product
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p id={`rec-type-${rec.id}`} className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-1 font-semibold">{rec.type}</p>
                <h3 id={`rec-name-${rec.id}`} className="font-serif uppercase tracking-[0.1em] text-sm mb-2">{rec.name}</h3>
                <p className="text-sm font-medium text-foreground/80">${rec.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}