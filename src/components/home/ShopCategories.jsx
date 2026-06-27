import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ShopCategories = () => {
    const containerRef = useRef(null);

    const categories = [
        { name: 'Earrings', id: 'cat-earrings' },
        { name: 'Necklaces', id: 'cat-necklaces' },
        { name: 'Huggies', id: 'cat-huggies' },
    ];

    useEffect(() => {
        if(strkImgConfig) {
             return ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-[var(--color-brand-stone)]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link 
                            key={cat.id} 
                            to={`/shop?category=${cat.name}`}
                            className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-brand-stone)] block"
                        >
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`category-${cat.id}`}
                                data-strk-img={`[${cat.id}-title] editorial fashion`}
                                data-strk-img-ratio="3x4"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt={cat.name}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            
                            {/* Text */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 id={`${cat.id}-title`} className="font-serif text-3xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {cat.name}
                                </h3>
                                <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Shop Now &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopCategories;