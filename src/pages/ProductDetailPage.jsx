import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown } from 'lucide-react';
import { SEED_PRODUCTS } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { ImageHelper } from '@strikingly/sdk';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = SEED_PRODUCTS.find(p => p.id === id);
  const { addItem, openCart } = useCartStore();
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/collections" className="text-secondary border-b border-secondary pb-1 uppercase tracking-widest text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, variant, quantity });
    openCart();
  };

  const relatedProducts = SEED_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (relatedProducts.length < 4) {
    const more = SEED_PRODUCTS.filter(p => p.id !== product.id && !relatedProducts.includes(p));
    relatedProducts.push(...more.slice(0, 4 - relatedProducts.length));
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      // Create a dummy config if one doesn't exist to satisfy the API
      const dummyConfig = { images: {}, backgrounds: {} };
      if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        window.ImageHelper.loadImages({}, containerRef.current);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [id, product]);

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 max-w-7xl" ref={containerRef}>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-24">
        {/* Images */}
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0 hide-scrollbar">
            {product.images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 md:w-full aspect-[3/4] flex-shrink-0 border-2 transition-colors ${
                  selectedImageIndex === index ? 'border-primary' : 'border-transparent hover:border-border'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-${product.id}-thumb-${index}`}
                  data-strk-img={`[pdp-name] jewelry thumbnail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                />
              </button>
            ))}
          </div>
          <div className="w-full aspect-[3/4] bg-muted relative">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
              data-strk-img-id={`pdp-${product.id}-main`}
              data-strk-img={`[pdp-name] jewelry detailed view`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4 text-primary">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl">${product.price.toFixed(2)}</span>
            <div className="flex gap-1 items-center text-accent">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              <span className="text-muted-foreground text-sm ml-2">(128)</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest font-medium mb-3">Color: <span className="text-muted-foreground">{variant}</span></p>
            <div className="flex gap-3">
              <button 
                onClick={() => setVariant('Gold')}
                className={`px-6 py-2 border ${variant === 'Gold' ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'} uppercase tracking-widest text-sm transition-colors`}
              >
                Gold
              </button>
              <button 
                onClick={() => setVariant('Silver')}
                className={`px-6 py-2 border ${variant === 'Silver' ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'} uppercase tracking-widest text-sm transition-colors`}
              >
                Silver
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-border h-12 w-full sm:w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex-1 flex justify-center items-center hover:bg-muted transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="flex-1 flex justify-center items-center hover:bg-muted transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 h-12 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-auto">
            {[
              { id: 'description', title: 'Description', content: product.description },
              { id: 'materials', title: 'Materials & Care', content: "Our pieces are made to last forever. Handcrafted using responsibly sourced 18k solid gold vermeil over sterling silver. To maintain the shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use." },
              { id: 'shipping', title: 'Shipping & Returns', content: "Free worldwide shipping on all orders. Returns are accepted within 30 days of delivery. Custom or engraved items are final sale." }
            ].map((section) => (
              <div key={section.id} className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full py-4 flex justify-between items-center text-left hover:text-muted-foreground transition-colors"
                >
                  <span className="uppercase tracking-widest text-sm font-medium">{section.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === section.id ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === section.id ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Related Products */}
      <div className="pt-16 border-t border-border">
        <h2 className="font-serif text-3xl mb-10 text-center text-primary">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {relatedProducts.map((p) => (
             <div key={p.id} className="group flex flex-col">
             <Link to={`/product/${p.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted">
               <img 
                 src={p.image} 
                 alt={p.name}
                 className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                 data-strk-img-id={`related-${p.id}-img1`}
                 data-strk-img={`[related-name-${p.id}] jewelry isolated`}
                 data-strk-img-ratio="3x4"
                 data-strk-img-width="400"
               />
               <img 
                 src={p.images[1]} 
                 alt={`${p.name} alternate`}
                 className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                 data-strk-img-id={`related-${p.id}-img2`}
                 data-strk-img={`[related-name-${p.id}] jewelry worn model`}
                 data-strk-img-ratio="3x4"
                 data-strk-img-width="400"
               />
             </Link>
             <div className="flex flex-col flex-1">
               <Link to={`/product/${p.id}`} id={`related-name-${p.id}`} className="font-serif text-base tracking-wide uppercase hover:text-muted-foreground transition-colors mb-1">
                 {p.name}
               </Link>
               <span className="text-muted-foreground text-sm">${p.price.toFixed(2)}</span>
             </div>
           </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;