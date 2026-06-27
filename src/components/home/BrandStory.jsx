import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if(strkImgConfig) {
             return ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    }, []);

    return (
        <section ref={containerRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/5] bg-[var(--color-brand-stone)] w-full max-w-md mx-auto md:ml-auto">
                        <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            data-strk-img-id="brand-story-image"
                            data-strk-img="[story-title] jewelry artisan aesthetic"
                            data-strk-img-ratio="4x5"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Velmora Jewelry Making"
                        />
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-brand-gold)] rounded-full -z-10 hidden md:block" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                    <span className="text-[var(--color-brand-gold-dark)] text-xs uppercase tracking-[0.3em] font-medium block mb-4">Our Philosophy</span>
                    <h2 id="story-title" className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">Elevating<br/>The Everyday</h2>
                    
                    <div className="space-y-6 text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed">
                        <p>
                            At Velmora, we believe that fine jewelry shouldn't be reserved only for special occasions. It should be lived in, loved, and layered to reflect your personal narrative.
                        </p>
                        <p>
                            Born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fast fashion, our demi-fine collections are crafted with intention. We use premium 18K gold vermeil and ethically sourced accents to create pieces that endure.
                        </p>
                    </div>

                    <Link to="/" className="inline-block mt-10 border-b border-[var(--color-brand-charcoal)] pb-1 text-sm uppercase tracking-widest hover:text-[var(--color-brand-gold-dark)] hover:border-[var(--color-brand-gold-dark)] transition-colors">
                        Discover Our Story
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default BrandStory;