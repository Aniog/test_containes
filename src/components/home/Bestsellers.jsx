import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { INITIAL_PRODUCTS } from '../../lib/data';
import { useCart } from '../../lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
    const { addToCart } = useCart();
    const containerRef = useRef(null);
    const bestsellers = INITIAL_PRODUCTS.filter(p => p.isBestseller).slice(0, 5);

    useEffect(() => {
        if(strkImgConfig) {
             return ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    }, [bestsellers]);

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12 border-b border-[var(--color-brand-stone)] pb-6">
                <div>
                    <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Editor's Picks</h2>
                    <p id="bestsellers-desc" className="text-[var(--color-brand-clay)] font-light">Our most loved demi-fine pieces.</p>
                </div>
                <Link to="/shop" className="hidden sm:inline-block text-sm uppercase tracking-widest hover:text-[var(--color-brand-gold-dark)] transition-colors border-b border-transparent hover:border-[var(--color-brand-gold-dark)] pb-1">
                    Shop All
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                {bestsellers.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                        <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-[var(--color-brand-stone)] mb-4 overflow-hidden">
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`bestseller-primary-${product.imgId}`}
                                data-strk-img={`[product-name-${product.id}] [bestsellers-title]`}
                                data-strk-img-ratio="4x5"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                alt={product.name}
                            />
                            {/* Hover Image */}
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`bestseller-secondary-${product.imgId}`}
                                data-strk-img={`woman wearing [product-name-${product.id}] [bestsellers-title]`}
                                data-strk-img-ratio="4x5"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                alt={`${product.name} worn`}
                            />
                            
                            {/* Quick Add Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(product, 1, '18k Gold');
                                    }}
                                    className="w-full bg-[var(--color-brand-white)]/90 backdrop-blur text-[var(--color-brand-charcoal)] py-3 text-xs uppercase tracking-widest hover:bg-[var(--color-brand-charcoal)] hover:text-white transition-colors flex justify-center items-center gap-2 font-medium"
                                >
                                    <ShoppingBag size={14} /> Quick Add
                                </button>
                            </div>
                        </Link>
                        
                        <div className="flex flex-col flex-grow">
                            <h3 id={`product-name-${product.id}`} className="font-serif text-lg leading-tight mb-1 uppercase tracking-wider text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-gold-dark)] transition-colors">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h3>
                            <p className="text-sm text-[var(--color-brand-clay)] mb-2">{product.category}</p>
                            <div className="mt-auto">
                                <p className="font-medium">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 sm:hidden text-center">
                 <Link to="/shop" className="inline-block border border-[var(--color-brand-charcoal)] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[var(--color-brand-charcoal)] hover:text-white transition-colors">
                    Shop All
                </Link>
            </div>
        </section>
    );
};

export default Bestsellers;