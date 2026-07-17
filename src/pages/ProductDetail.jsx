import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';
import { products, formatPrice } from '../data/products';
import { useCartStore } from '../lib/store';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem, openCart } = useCartStore();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  const [mainImage, setMainImage] = useState(1);

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setMainImage(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, mainImage]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center mt-12">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="inline-block border-b border-primary text-primary font-medium uppercase tracking-widest text-sm pb-1">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="container mx-auto px-4 lg:px-8 py-24 mt-12">
      {/* Breadcrumbs */}
      <nav className="text-xs uppercase tracking-widest mb-8 text-muted-foreground font-medium">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 flex-shrink-0">
            {[1, 2].map((num) => {
              if (num === 2 && !product.image2Id) return null;
              
              return (
                <button 
                  key={num}
                  onClick={() => setMainImage(num)}
                  className={`w-20 h-28 flex-shrink-0 relative overflow-hidden transition-all ${
                    mainImage === num ? 'ring-1 ring-primary ring-offset-2' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${num}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`prod-thumb-${product.id}-${num}`}
                    data-strk-img={`[prod-title] ${num === 2 ? 'detail' : ''}`}
                    data-strk-img-ratio="3x4"
                  />
                </button>
              );
            })}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-secondary relative aspect-[3/4] overflow-hidden">
             <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id={`prod-main-${product.id}-${mainImage}`}
                data-strk-img={`[prod-title] ${mainImage === 2 ? 'detail' : ''}`}
                data-strk-img-ratio="3x4"
              />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col pt-4">
          <h1 id="prod-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-primary mb-4">
            {product.name}
          </h1>
          <p className="text-xl font-medium mb-8">{formatPrice(product.price)}</p>
          
          <div className="h-[1px] bg-border mb-8" />
          
          {product.material && (
            <p className="text-sm font-medium mb-8">
              <span className="uppercase tracking-widest text-muted-foreground mr-2">Material:</span> 
              {product.material}
            </p>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <span className="block text-xs uppercase tracking-widest font-medium mb-3">Quantity</span>
            <div className="inline-flex items-center border border-border">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-secondary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-secondary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors shadow-sm mb-12"
          >
            Add to Cart - {formatPrice(product.price * quantity)}
          </button>

          {/* Accordions */}
          <div className="divide-y divide-border border-t border-b border-border">
            {/* Description */}
            <div className="py-2">
              <button 
                onClick={() => toggleAccordion('description')}
                className="w-full py-4 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
              >
                Description
                {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeAccordion === 'description' ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                {product.details && <p className="text-muted-foreground text-sm leading-relaxed mt-4">{product.details}</p>}
              </div>
            </div>

            {/* Materials & Care */}
            <div className="py-2">
              <button 
                onClick={() => toggleAccordion('care')}
                className="w-full py-4 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
              >
                Materials & Care
                {activeAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeAccordion === 'care' ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our pieces are consciously crafted in 18k gold vermeil or thick 18k gold plating. 
                  To maintain the finish, avoid contact with liquids, perfumes, and lotions. 
                  Store in the provided pouch when not in use.
                </p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="py-2">
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex justify-between items-center text-left uppercase tracking-widest text-sm font-medium"
              >
                Shipping & Returns
                {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeAccordion === 'shipping' ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Complimentary worldwide shipping on all orders over $50. 
                  Returns are accepted within 30 days of delivery in original, unworn condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border pt-16 mt-16">
          <h2 className="text-2xl font-serif text-primary text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}