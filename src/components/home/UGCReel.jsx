import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const UGCReel = () => {
    const containerRef = useRef(null);
    const reviews = [
        { id: 'ugc-1', imgSearch: "woman wearing delicate gold necklace smiling", text: "My everyday staple.", author: "Sarah M.", stars: 5 },
        { id: 'ugc-2', imgSearch: "close up earrings profile aesthetic", text: "Absolutely stunning quality.", author: "Elena R.", stars: 5 },
        { id: 'ugc-3', imgSearch: "layered gold necklaces on woman", text: "Better than expected.", author: "Chloe T.", stars: 5 },
        { id: 'ugc-4', imgSearch: "gold hoops worn by model", text: "I never take these off.", author: "Aisha V.", stars: 5 },
        { id: 'ugc-5', imgSearch: "gold rings stacked", text: "The perfect gift to myself.", author: "Mia L.", stars: 5 },
    ]

    useEffect(() => {
        if(strkImgConfig) {
             return ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-[var(--color-brand-white)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                 <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Spotted In Velmora</h2>
                 <p className="text-[var(--color-brand-clay)] font-light">Tag @velmorajewelry to be featured.</p>
            </div>

            {/* Scroll Container */}
            <div className="flex overflow-x-auto gap-4 pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
                {reviews.map((item) => (
                    <div key={item.id} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] bg-[var(--color-brand-stone)] snap-center group rounded-sm overflow-hidden">
                        
                        <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            data-strk-img-id={`ugc-img-${item.id}`}
                            data-strk-img={`${item.imgSearch} [ugc-title]`}
                            data-strk-img-ratio="9x16"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Customer photo"
                        />
                        
                        {/* Gradient Overlay for Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
                            <div className="flex text-[var(--color-brand-gold)] mb-3">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <p className="font-serif text-lg text-white mb-2 italic">"{item.text}"</p>
                            <p className="text-white/80 text-xs tracking-widest uppercase">{item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Custom CSS for hiding scrollbar while keeping functionality */}
            <style dangerouslySetContent={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
};

export default UGCReel;