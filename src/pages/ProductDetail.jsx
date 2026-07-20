import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../context/CartContext';

const allProducts = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    imgId1: 'prod-vivid-1',
    imgId2: 'prod-vivid-2',
    imgId3: 'prod-vivid-3',
    desc: 'gold ear cuff with crystal accent',
    fullDesc: 'The Vivid Aura ear cuff brings a touch of modern romance to your everyday look. Crafted in 18k gold vermeil over sterling silver with a delicate crystal accent, it requires no piercing and slides perfectly onto your cartilage. Stack it for maximum impact.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    imgId1: 'prod-majestic-1',
    imgId2: 'prod-majestic-2',
    imgId3: 'prod-majestic-3',
    desc: 'multicolor floral crystal necklace',
    fullDesc: 'A statement piece that truly captures the light. The Majestic Flora Nectar necklace features a centerpiece of carefully arranged cubic zirconia crystals in a floral motif on an adjustable 16-18 inch delicate gold vermeil chain. Perfect for layering.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    imgId1: 'prod-golden-1',
    imgId2: 'prod-golden-2',
    imgId3: 'prod-golden-3',
    desc: 'chunky gold dome huggie earrings',
    fullDesc: 'Our bestselling everyday earring. The Golden Sphere Huggies feature a perfect chunky dome shape that hugs the earlobe perfectly. Hollowed for incredibly lightweight wear despite their bold look. 18k gold plated over sterling silver.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    imgId1: 'prod-amber-1',
    imgId2: 'prod-amber-2',
    imgId3: 'prod-amber-3',
    desc: 'textured gold filigree drop earrings',
    fullDesc: 'Inspired by vintage lace, these textured gold filigree drop earrings add instant elegance to any outfit. The intricate cut-out design catches the light beautifully and makes them surprisingly lightweight for all-day wear. Secured with a comfortable butterfly back.',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Reset state on id change
    setActiveImage(0);
    setQuantity(1);
    
    // Load images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, tone]);

  const images = [
    { id: product.imgId1, query: `[prod-desc] [prod-title] primary ${tone}` },
    { id: product.imgId2, query: `[prod-desc] [prod-title] model worn ${tone}` },
    { id: product.imgId3, query: `[prod-desc] [prod-title] close up detail ${tone}` }
  ];

  const handleQuantity = (type) => {
    if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'inc') setQuantity(quantity + 1);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="text-xs tracking-widest uppercase text-muted mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/collections?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-24 flex-shrink-0 relative overflow-hidden transition-all ${activeImage === idx ? 'ring-1 ring-foreground opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-surface-alt relative overflow-hidden">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  data-strk-img-id={`${img.id}-main`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-start pt-4">
            <h1 id="prod-title" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-2">{product.name}</h1>
            <p className="text-xl mb-6">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm text-muted">(128 Reviews)</span>
            </div>

            <p id="prod-desc" className="text-muted tracking-wide mb-8 leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-sm tracking-widest uppercase font-medium block mb-3">
                Tone: <span className="text-muted capitalize">{tone}</span>
              </span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTone('gold')}
                  className={`w-10 h-10 rounded-full bg-[#E5D08F] shadow-sm relative transition-all ${tone === 'gold' ? 'ring-2 ring-foreground ring-offset-2' : 'hover:scale-110'}`}
                  aria-label="Gold Tone"
                ></button>
                <button 
                  onClick={() => setTone('silver')}
                  className={`w-10 h-10 rounded-full bg-[#E3E4E5] shadow-sm relative transition-all ${tone === 'silver' ? 'ring-2 ring-foreground ring-offset-2' : 'hover:scale-110'}`}
                  aria-label="Silver Tone"
                ></button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-gray-300 h-14">
                <button onClick={() => handleQuantity('dec')} className="w-12 h-full flex items-center justify-center text-muted hover:text-foreground transition-colors" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => handleQuantity('inc')} className="w-12 h-full flex items-center justify-center text-muted hover:text-foreground transition-colors" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
              <button 
                className="flex-1 bg-foreground text-white hover:bg-accent hover:text-white h-14 tracking-widest uppercase font-medium text-sm transition-colors"
                onClick={() => console.log('Added to cart')}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {/* Description */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion('description')}
                >
                  <span className="text-sm tracking-widest uppercase font-medium">Description</span>
                  {openAccordion === 'description' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm text-muted leading-relaxed">
                    {product.fullDesc} The perfect addition to your curated jewelry collection, designed to be worn effortlessly from day to night.
                  </p>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion('materials')}
                >
                  <span className="text-sm tracking-widest uppercase font-medium">Materials & Care</span>
                  {openAccordion === 'materials' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <ul className="text-sm text-muted leading-relaxed list-disc pl-4 space-y-2">
                    <li>18k gold vermeil over 925 sterling silver base</li>
                    <li>AAA-grade cubic zirconia crystals</li>
                    <li>Hypoallergenic and nickel-free</li>
                    <li>To maintain shine, avoid direct contact with water, perfumes, and lotions. Store in the provided pouch.</li>
                  </ul>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full py-5 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion('shipping')}
                >
                  <span className="text-sm tracking-widest uppercase font-medium">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    Enjoy free worldwide standard shipping on all orders over $100.
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    We accept returns within 30 days of delivery. Pieces must be unworn and in their original packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div>
          <h2 className="text-2xl font-serif text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {allProducts.filter(p => p.id !== id).slice(0, 4).map(item => (
              <div key={item.id} className="group relative">
                <Link to={`/product/${item.id}`} className="block aspect-[4/5] bg-surface-alt relative overflow-hidden mb-4">
                  <img
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    data-strk-img-id={`${item.imgId1}-related`}
                    data-strk-img={`[related-desc-${item.id}] [related-title-${item.id}] [prod-title] related`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <img
                    alt={`${item.name} related`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    data-strk-img-id={`${item.imgId2}-related`}
                    data-strk-img={`[related-desc-${item.id}] [related-title-${item.id}] [prod-title] related model worn`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </Link>
                <Link to={`/product/${item.id}`} className="block">
                  <h3 id={`related-title-${item.id}`} className="font-serif text-lg uppercase tracking-widest mb-1">{item.name}</h3>
                  <p className="text-muted mb-2">${item.price}</p>
                </Link>
                <span id={`related-desc-${item.id}`} className="hidden">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;