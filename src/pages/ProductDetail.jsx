import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_PRODUCTS } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { ChevronRight, Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const containerRef = useRef(null);
    
    // Find product
    const product = INITIAL_PRODUCTS.find(p => p.id === id);
    
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState('18k Gold');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState('description');

    // Reset state when product changes
    useEffect(() => {
        setQuantity(1);
        setSelectedVariant('18k Gold');
        setActiveImageIndex(0);
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
         if(strkImgConfig && product) {
             const frameId = window.requestAnimationFrame(() => {
                 ImageHelper.loadImages(strkImgConfig, containerRef.current);
             });
             return () => window.cancelAnimationFrame(frameId);
         }
    }, [id, product]);

    if (!product) {
        return <div className="py-24 text-center">Product not found</div>;
    }

    // Generate related products (random 4 from same category, excluding current)
    const relatedProducts = INITIAL_PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedVariant);
    };

    const toggleAccordion = (section) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    return (
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 pt-24 md:pt-32">
            
            {/* Breadcrumbs */}
            <nav className="flex items-center text-xs tracking-widest uppercase text-[var(--color-brand-clay)] mb-8">
                <Link to="/" className="hover:text-[var(--color-brand-charcoal)]">Home</Link>
                <ChevronRight size={12} className="mx-2" />
                <Link to="/shop" className="hover:text-[var(--color-brand-charcoal)]">Shop</Link>
                <ChevronRight size={12} className="mx-2" />
                <Link to={`/shop?category=${product.category}`} className="hover:text-[var(--color-brand-charcoal)]">{product.category}</Link>
            </nav>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-24">
                
                {/* Image Gallery */}
                <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 hide-scrollbar">
                        {[1, 2, 3].map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={cn(
                                    "relative w-20 h-24 md:w-full md:h-auto md:aspect-[4/5] bg-[var(--color-brand-stone)] overflow-hidden shrink-0 border-2 transition-colors",
                                    activeImageIndex === idx ? "border-[var(--color-brand-charcoal)]" : "border-transparent"
                                )}
                            >
                                <img 
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    data-strk-img-id={`pdp-thumb-${product.imgId}-${idx}`}
                                    data-strk-img={idx === 0 ? `[pdp-name]` : `woman wearing [pdp-name] angle ${idx}`}
                                    data-strk-img-ratio="4x5"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={`${product.name} thumbnail ${idx + 1}`}
                                />
                            </button>
                        ))}
                    </div>
                    
                    {/* Main Image */}
                    <div className="relative aspect-[4/5] bg-[var(--color-brand-stone)] w-full overflow-hidden">
                        {[1, 2, 3].map((_, idx) => (
                             <img 
                                key={idx}
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`pdp-main-${product.imgId}-${idx}`}
                                data-strk-img={idx === 0 ? `[pdp-name]` : `woman wearing [pdp-name] angle ${idx}`}
                                data-strk-img-ratio="4x5"
                                className={cn(
                                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                                    activeImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                                )}
                                alt={`${product.name} main view ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 id="pdp-name" className="font-serif text-3xl lg:text-4xl uppercase tracking-widest mb-4">
                        {product.name}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--color-brand-stone)]">
                        <span className="text-xl font-medium">${product.price}</span>
                        <div className="flex items-center text-[var(--color-brand-gold)]">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                            ))}
                            <span className="text-[var(--color-brand-clay)] text-xs ml-2 tracking-widest">(24)</span>
                        </div>
                    </div>

                    <p className="text-[var(--color-brand-charcoal)]/80 font-light mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Variant Selector */}
                    <div className="mb-8">
                        <span className="text-xs uppercase tracking-widest mb-3 block text-[var(--color-brand-clay)]">
                            Tone: <span className="font-medium text-[var(--color-brand-charcoal)]">{selectedVariant}</span>
                        </span>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setSelectedVariant('18k Gold')}
                                className={cn(
                                    "px-6 py-2 text-sm uppercase tracking-widest transition-colors",
                                    selectedVariant === '18k Gold' 
                                        ? "bg-[var(--color-brand-charcoal)] text-white" 
                                        : "bg-transparent border border-[var(--color-brand-stone)] hover:border-[var(--color-brand-charcoal)]"
                                )}
                            >
                                18K Gold
                            </button>
                            <button 
                                onClick={() => setSelectedVariant('Silver')}
                                className={cn(
                                    "px-6 py-2 text-sm uppercase tracking-widest transition-colors",
                                    selectedVariant === 'Silver' 
                                        ? "bg-[var(--color-brand-charcoal)] text-white" 
                                        : "bg-transparent border border-[var(--color-brand-stone)] hover:border-[var(--color-brand-charcoal)]"
                                )}
                            >
                                Silver
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mb-12">
                        {/* Quantity */}
                        <div className="flex items-center border border-[var(--color-brand-stone)] w-32">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="flex-1 py-3 flex justify-center text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)]"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="w-10 text-center font-medium">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="flex-1 py-3 flex justify-center text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)]"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-[var(--color-brand-charcoal)] text-white uppercase tracking-widest hover:bg-[var(--color-brand-gold-dark)] transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>

                    {/* Accordions */}
                    <div className="border-t border-[var(--color-brand-stone)]">
                        {/* Description */}
                        <div className="border-b border-[var(--color-brand-stone)]">
                            <button 
                                onClick={() => toggleAccordion('description')}
                                className="w-full py-5 flex justify-between items-center text-left"
                            >
                                <span className="font-serif text-lg tracking-wide">The Details</span>
                                {activeAccordion === 'description' ? <ChevronUp size={20} className="text-[var(--color-brand-clay)]" /> : <ChevronDown size={20} className="text-[var(--color-brand-clay)]"/>}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                activeAccordion === 'description' ? "max-h-96 pb-5" : "max-h-0"
                            )}>
                                <ul className="space-y-2 text-sm text-[var(--color-brand-charcoal)]/80 font-light list-disc list-inside pl-4">
                                   {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                </ul>
                            </div>
                        </div>

                        {/* Materials */}
                        <div className="border-b border-[var(--color-brand-stone)]">
                            <button 
                                onClick={() => toggleAccordion('materials')}
                                className="w-full py-5 flex justify-between items-center text-left"
                            >
                                <span className="font-serif text-lg tracking-wide">Materials & Care</span>
                                {activeAccordion === 'materials' ? <ChevronUp size={20} className="text-[var(--color-brand-clay)]" /> : <ChevronDown size={20} className="text-[var(--color-brand-clay)]"/>}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                activeAccordion === 'materials' ? "max-h-96 pb-5" : "max-h-0"
                            )}>
                                <p className="text-sm text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed">
                                    Our pieces are crafted with a thick layer of 18k gold over a solid sterling silver base, designed for everyday wear. To maintain the shine, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided Velmora pouch when not in use.
                                </p>
                            </div>
                        </div>

                         {/* Shipping */}
                         <div className="border-b border-[var(--color-brand-stone)]">
                            <button 
                                onClick={() => toggleAccordion('shipping')}
                                className="w-full py-5 flex justify-between items-center text-left"
                            >
                                <span className="font-serif text-lg tracking-wide">Shipping & Returns</span>
                                {activeAccordion === 'shipping' ? <ChevronUp size={20} className="text-[var(--color-brand-clay)]" /> : <ChevronDown size={20} className="text-[var(--color-brand-clay)]"/>}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                activeAccordion === 'shipping' ? "max-h-96 pb-5" : "max-h-0"
                            )}>
                                <p className="text-sm text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed">
                                    Enjoy free worldwide shipping on all orders. We gladly accept returns within 30 days of receipt. Items must be unworn and in their original packaging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                 <section className="border-t border-[var(--color-brand-stone)] pt-16">
                     <h2 id="related-title" className="font-serif text-2xl lg:text-3xl text-center mb-10 tracking-wide">Complete The Look</h2>
                     
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
                        {relatedProducts.map((relProduct) => (
                            <div key={relProduct.id} className="group flex flex-col w-full">
                                <Link to={`/product/${relProduct.id}`} className="relative aspect-[4/5] bg-[var(--color-brand-stone)] mb-4 overflow-hidden w-full">
                                    <img 
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        data-strk-img-id={`related-${relProduct.imgId}`}
                                        data-strk-img={`[related-name-${relProduct.id}] [related-title]`}
                                        data-strk-img-ratio="4x5"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={relProduct.name}
                                    />
                                </Link>
                                
                                <div className="flex flex-col flex-grow text-center">
                                    <h3 id={`related-name-${relProduct.id}`} className="font-serif text-base leading-tight mb-1 uppercase tracking-wider text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-gold-dark)] transition-colors">
                                        <Link to={`/product/${relProduct.id}`}>{relProduct.name}</Link>
                                    </h3>
                                    <p className="font-medium">${relProduct.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </section>
            )}

             <style dangerouslySetContent={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    );
}