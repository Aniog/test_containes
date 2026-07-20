import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { productsDb } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = productsDb.find(p => p.id === Number(id)) || productsDb[0]; // fallback to 1
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const { addItem } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
        let frameId = requestAnimationFrame(() => {
            try {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            } catch (e) {
                console.log('ImageHelper not available yet or strkImgConfig missing', e);
            }
        });
        return () => cancelAnimationFrame(frameId);
    }
  }, [id, variant]); // Reload images when product or variant changes

  const handleAddToCart = () => {
    addItem(
      { 
        id: product.id, 
        name: product.name, 
        price: product.price,
        imageId: product.imageId,
        desc: product.desc
      },
      quantity,
      variant
    );
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  // Mock related products (excluding current)
  const relatedProducts = productsDb.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        
        {/* Breadcrumb */}
        <div className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections/all" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Left: Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-[60vh] lg:h-[80vh]">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-auto scrollbar-hide md:w-20 flex-shrink-0">
               {productsDb.map(p => p.id === product.id && (
                  <React.Fragment key={p.id}>
                    {[1, 2, 3].map((num) => (
                      <button key={num} className="w-20 h-24 bg-muted relative overflow-hidden flex-shrink-0 border transition-all hover:border-primary border-transparent">
                         <img
                           data-strk-img-id={`product-${p.id}-thumb-${num}`}
                           data-strk-img={`${p.name} jewelry detail view ${num}`}
                           data-strk-img-ratio="4x5"
                           data-strk-img-width="150"
                           src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                           alt={`Thumbnail ${num}`}
                           className="w-full h-full object-cover"
                         />
                      </button>
                    ))}
                  </React.Fragment>
               ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-muted relative overflow-hidden h-full">
              {productsDb.map(p => p.id === product.id && (
                 <img
                   key={p.id}
                   data-strk-img-id={`product-${p.id}-main`}
                   data-strk-img={`${p.name} pristine lighting luxury`}
                   data-strk-img-ratio="3x4"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   alt={p.name}
                   className="w-full h-full object-cover"
                 />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-10">
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl">${product.price}</span>
              <div className="flex items-center text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(128)</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-10 text-lg leading-relaxed text-balance">
              {product.desc}
            </p>

            {/* Variants */}
            <div className="mb-8 border-t border-border pt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest font-medium">Metal Finish</span>
                <span className="text-sm text-muted-foreground">{variant}</span>
              </div>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-3 border text-sm uppercase tracking-widest transition-all",
                      variant === v 
                        ? "border-primary bg-primary text-primary-foreground" 
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border sm:w-32 h-14 justify-between px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-primary text-muted-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-primary text-muted-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors editorial-shadow"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {/* Description */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-6 flex justify-between items-center"
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Description</span>
                  {activeAccordion === 'description' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === 'description' ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed">{product.details}</p>
                </div>
              </div>

              {/* Materials */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-6 flex justify-between items-center"
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Materials & Care</span>
                  {activeAccordion === 'materials' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === 'materials' ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside pl-4 space-y-2">
                    <li>18k Gold Plated Brass</li>
                    <li>Hypoallergenic & Nickel-Free</li>
                    <li>Store in provided pouch when not worn</li>
                    <li>Avoid direct contact with perfumes and lotions</li>
                  </ul>
                </div>
              </div>

              {/* Shipping */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-6 flex justify-between items-center"
                >
                  <span className="uppercase tracking-widest text-sm font-medium">Shipping & Returns</span>
                  {activeAccordion === 'shipping' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === 'shipping' ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Enjoy free worldwide shipping on orders over $150. Standard delivery takes 3-5 business days. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Not completely in love? We accept returns within 30 days of purchase for a full refund or exchange.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <section className="py-24 border-t border-border">
          <h2 className="text-3xl font-serif text-center mb-16 tracking-wide">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
             <Link key={p.id} to={`/product/${p.id}`} className="group relative flex flex-col cursor-pointer">
                <div className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                  {productsDb.map(allP => allP.id === p.id && (
                     <img
                       key={allP.id}
                       data-strk-img-id={`product-${allP.id}-related`}
                       data-strk-img={`${allP.desc} ${allP.name}`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="400"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       alt={allP.name}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                  ))}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <h3 className="font-serif text-base tracking-wider uppercase mb-1 truncate">
                    {p.name}
                  </h3>
                  <span className="font-medium text-primary">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}