import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '../lib/data';
import { useCart } from '../components/CartProvider';
import { Star, ChevronDown, ChevronUp, Plus, Minus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { cn } from '../lib/utils';

export function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  
  const product = seedProducts.find(p => p.id === id);
  const relatedProducts = seedProducts.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reload images when page changes
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on navigation here
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen pt-32 text-center text-foreground font-serif text-2xl">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
  };

  const toggleAccordion = (name) => {
      setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24 bg-background w-full">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb / Back */}
        <Link to="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
           {/* Image Gallery */}
           <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
               {/* Main Image */}
               <div className="w-full bg-secondary aspect-[4/5] relative overflow-hidden flex-shrink-0">
                  <img 
                    alt={product.name}
                    data-strk-img={`[product-detail-desc] [product-detail-name] on model editorial`}
                    data-strk-img-id={`pdp-main-${product.id}-${activeImageIndex}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
               </div>
               
               {/* Thumbnails */}
               <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible snap-x md:w-24 flex-shrink-0 scrollbar-hide">
                  {[0, 1, 2].map((idx) => (
                      <button 
                         key={idx}
                         onClick={() => setActiveImageIndex(idx)}
                         className={cn(
                             "relative w-20 md:w-full aspect-[4/5] bg-secondary flex-shrink-0 snap-start overflow-hidden border-2 transition-colors",
                             activeImageIndex === idx ? "border-primary" : "border-transparent"
                         )}
                      >
                         <img 
                            alt={`${product.name} thumbnail ${idx + 1}`}
                            data-strk-img={`[product-detail-name] detail view ${idx}`}
                            data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="200"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover"
                        />
                      </button>
                  ))}
               </div>
           </div>

           {/* Product Info */}
           <div className="w-full lg:w-1/2 flex flex-col">
              <h1 id="product-detail-name" className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-2 text-foreground">
                  {product.name}
              </h1>
              <p id="product-detail-desc" className="hidden">{product.description}</p>
              
              <div className="flex items-center gap-1 mb-6 text-primary">
                 {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
                 <span className="text-muted-foreground text-sm ml-2 font-medium">{product.reviews} Reviews</span>
              </div>
              
              <div className="text-2xl font-serif mb-8 text-foreground">${product.price.toFixed(2)}</div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 text-balance">
                  {product.description}
              </p>

              {/* Variants */}
              <div className="mb-8">
                 <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-foreground">Color / Material</h3>
                 <div className="flex gap-4">
                    {['Gold', 'Silver'].map(variant => (
                       <button 
                          key={variant}
                          onClick={() => setSelectedVariant(variant)}
                          className={cn(
                             "px-6 py-2 border uppercase tracking-widest text-xs font-medium transition-colors",
                             selectedVariant === variant 
                               ? "border-primary bg-primary text-primary-foreground" 
                               : "border-border text-foreground hover:border-primary/50"
                          )}
                       >
                           {variant}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                 <div className="flex items-center justify-between border border-border h-12 w-full sm:w-32 flex-shrink-0 text-foreground">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                 </div>
                 
                 <button 
                   onClick={handleAddToCart}
                   className="flex-grow h-12 bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest text-sm font-medium transition-colors"
                 >
                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                 </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-border mt-auto">
                 {/* Item 1 */}
                 <div className="border-b border-border">
                    <button 
                      onClick={() => toggleAccordion('description')} 
                      className="w-full flex items-center justify-between py-5 uppercase tracking-widest text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                        Description
                        {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        activeAccordion === 'description' ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}>
                        <p className="text-sm text-foreground/80 leading-relaxed text-balance">
                           {product.description} This piece embodies the Velmora aesthetic—quiet luxury designed for everyday wear. Style it alone for a minimalist look or layer it to create your own unique stack.
                        </p>
                    </div>
                 </div>
                 
                 {/* Item 2 */}
                 <div className="border-b border-border">
                    <button 
                      onClick={() => toggleAccordion('materials')} 
                      className="w-full flex items-center justify-between py-5 uppercase tracking-widest text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                        Materials & Care
                        {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        activeAccordion === 'materials' ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                           <strong>Materials:</strong> {product.materials}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed text-balance">
                           <strong>Care:</strong> To maintain the brilliant finish, avoid contact with water, perfumes, and lotions. Store in the complimentary Velmora pouch when not in use.
                        </p>
                    </div>
                 </div>

                 {/* Item 3 */}
                 <div className="border-b border-border">
                    <button 
                      onClick={() => toggleAccordion('shipping')} 
                      className="w-full flex items-center justify-between py-5 uppercase tracking-widest text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                        Shipping & Returns
                        {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        activeAccordion === 'shipping' ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}>
                        <p className="text-sm text-foreground/80 leading-relaxed text-balance">
                           We offer free worldwide shipping on all orders. If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund or exchange.
                        </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
            <div className="mt-24 pt-12 border-t border-border">
               <h2 id="related-title" className="font-serif text-3xl mb-12 text-center text-foreground">You May Also Like</h2>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-foreground">
                  {relatedProducts.map((relProduct) => (
                     <div key={relProduct.id} className="group flex flex-col">
                        <Link to={`/product/${relProduct.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                        <img 
                            alt={relProduct.name}
                            data-strk-img={`[related-desc-${relProduct.id}] [related-name-${relProduct.id}]`}
                            data-strk-img-id={`related-item-${relProduct.id}-1`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                        />
                        <img 
                            alt={`${relProduct.name} alternate view`}
                            data-strk-img={`[related-name-${relProduct.id}] detail view`}
                            data-strk-img-id={`related-item-${relProduct.id}-2`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        />
                        </Link>
                        <div className="flex flex-col flex-grow">
                            <Link to={`/product/${relProduct.id}`} className="hover:opacity-70 group-hover:underline underline-offset-4 decoration-primary/30">
                                <h3 id={`related-name-${relProduct.id}`} className="font-serif uppercase tracking-widest text-sm mb-1">{relProduct.name}</h3>
                            </Link>
                            <p id={`related-desc-${relProduct.id}`} className="hidden">{relProduct.description}</p>
                            <span className="text-muted-foreground text-sm">${relProduct.price.toFixed(2)}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
        )}
      </div>
    </div>
  );
}