import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const categories = [
        { name: 'Earrings', path: '/shop/earrings', id: 'cat-earrings' },
        { name: 'Necklaces', path: '/shop/necklaces', id: 'cat-necklaces' },
        { name: 'Huggies', path: '/shop/huggies', id: 'cat-huggies' },
    ];

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
            <h2 id="cat-title" className="text-3xl font-serif text-center mb-16 uppercase tracking-widest">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link key={cat.id} to={cat.path} className="relative group overflow-hidden aspect-square bg-velmora-sand">
                        <img
                            data-strk-img-id={`cat-img-${cat.id}`}
                            data-strk-img={`[cat-title] [cat-name-${cat.id}] gold jewelry editorial`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="800"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <h3 id={`cat-name-${cat.id}`} className="text-white text-2xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {cat.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryTiles;
