import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset state on id change
    setQuantity(1);
    setVariant('Gold');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Slight delay to ensure DOM is ready for strk-img
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-sm uppercase tracking-widest text-velmora-accent underline underline-offset-4">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getProducts().filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <div className="pt-24 pb-24 bg-velmora-bg" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-text/50 mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Link to="/" className="hover:text-velmora-text transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-text transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-text transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-text">{product.name}</span>
        </div>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 flex-shrink-0">
              {[1, 2, 3].map(i => (
                <div key={i} className={`aspect-[4/5] md:aspect-auto md:h-32 bg-velmora-light cursor-pointer border ${i === 1 ? 'border-velmora-accent' : 'border-transparent hover:border-velmora-text/30'} transition-colors overflow-hidden rounded-sm flex-shrink-0 w-20 md:w-full`}>
                  <img 
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[product-title] detail side ${i}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-velmora-light overflow-hidden rounded-sm relative">
              <img 
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[product-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 id="product-title" className="font-serif text-3xl lg:text-4xl uppercase tracking-widest leading-tight mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1 text-velmora-accent border-l border-border pl-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-velmora-text/60 text-xs ml-1 font-sans mt-0.5">(24)</span>
              </div>
            </div>
            
            <p id="product-short-desc" className="text-velmora-text/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="uppercase tracking-widest text-xs font-medium">Metal Tone</span>
                <span className="text-xs text-velmora-text/60">{variant}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={`flex-1 py-3 border uppercase tracking-widest text-sm transition-all rounded-sm ${variant === 'Gold' ? 'border-velmora-text bg-velmora-text text-velmora-bg' : 'border-border bg-transparent text-velmora-text hover:border-velmora-text/50'}`}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={`flex-1 py-3 border uppercase tracking-widest text-sm transition-all rounded-sm ${variant === 'Silver' ? 'border-velmora-text bg-velmora-text text-velmora-bg' : 'border-border bg-transparent text-velmora-text hover:border-velmora-text/50'}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity and Add */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border sm:w-32 h-14 rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full text-velmora-text/60 hover:text-velmora-text hover:bg-velmora-light transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium leading-none">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full text-velmora-text/60 hover:text-velmora-text hover:bg-velmora-light transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-velmora-accent hover:bg-velmora-accent-hover text-white uppercase tracking-widest font-medium transition-all shadow-md rounded-sm"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {/* Description Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-6 flex justify-between items-center group uppercase tracking-widest text-sm"
                >
                  <span>Description</span>
                  {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" /> : <ChevronDown className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'description' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-velmora-text/80 leading-relaxed text-sm">
                    {product.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Materials & Care Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-6 flex justify-between items-center group uppercase tracking-widest text-sm"
                >
                  <span>Materials & Care</span>
                  {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" /> : <ChevronDown className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'materials' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-velmora-text/80 leading-relaxed text-sm mb-4">
                    <strong>Materials:</strong> Crafted with a solid brass base and thickly layered with genuine 18K gold. Hypoallergenic, nickel-free, and carefully sealed for durability.
                  </p>
                  <p className="text-velmora-text/80 leading-relaxed text-sm">
                    <strong>Care:</strong> To maintain the luster of your Velmora pieces, avoid direct contact with perfumes, lotions, and harsh chemicals. Remove before showering or swimming. Store in your provided Velmora pouch when not in wear.
                  </p>
                </div>
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-6 flex justify-between items-center group uppercase tracking-widest text-sm"
                >
                  <span>Shipping & Returns</span>
                  {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" /> : <ChevronDown className="w-4 h-4 text-velmora-text/50 group-hover:text-velmora-text" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'shipping' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-velmora-text/80 leading-relaxed text-sm mb-4">
                    Enjoy complimentary express shipping on all orders over $100. Standard shipping ($5) takes 3-5 business days. 
                  </p>
                  <p className="text-velmora-text/80 leading-relaxed text-sm">
                    We accept returns within 30 days of delivery. Items must be unworn and in their original packaging. Custom or engraved pieces are final sale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <div className="flex justify-between items-end mb-10">
            <h2 id="related-title" className="text-3xl font-serif">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(relProduct => (
              <div key={relProduct.id} className="group flex flex-col">
                <Link to={`/product/${relProduct.id}`} className="block relative aspect-[4/5] bg-velmora-light overflow-hidden mb-4 rounded-sm">
                  <img 
                    data-strk-img-id={`${relProduct.imgId}-related`}
                    data-strk-img={`[related-name-${relProduct.id}] [related-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(relProduct);
                        }}
                        className="w-full py-2 bg-velmora-bg/90 hover:bg-velmora-bg text-velmora-text uppercase tracking-widest text-[10px] sm:text-xs font-medium backdrop-blur-sm transition-all shadow-md"
                      >
                        Quick Add
                      </button>
                    </div>
                </Link>
                
                <div className="flex flex-col text-center mt-2 flex-grow">
                  <Link to={`/product/${relProduct.id}`} className="hover:text-velmora-accent transition-colors">
                    <h3 id={`related-name-${relProduct.id}`} className="text-sm lg:text-base uppercase tracking-wider mb-2 leading-tight">{relProduct.name}</h3>
                  </Link>
                  <p className="text-velmora-text/70 mt-auto">${relProduct.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}