import React, { useEffect, useRef } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const bestsellerProducts = products.slice(0, 5);

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 id="bs-title" className="text-3xl md:text-4xl mb-4 font-serif">Bestsellers</h2>
                <p id="bs-subtitle" className="text-velmora-stone text-xs uppercase tracking-widest leading-relaxed">
                    Most loved pieces, designed for your everyday.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
                {bestsellerProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Bestsellers;
