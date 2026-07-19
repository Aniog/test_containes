import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-velmora-sand">
            <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        data-strk-img-id="story-img"
                        data-strk-img="[story-title] [story-desc] woman wearing gold jewelry editorial"
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="1000"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt="Our Story"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Authentic. Timeless. Yours.</h2>
                    <p id="story-desc" className="text-velmora-stone text-sm leading-relaxed max-w-lg">
                        Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We craft demi-fine pieces using high-quality gold plating and responsibly sourced crystals, designed to be layered, lived in, and loved forever.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block text-xs uppercase tracking-[0.2em] border-b border-velmora-black pb-2 hover:opacity-60 transition-opacity"
                    >
                        Our Story
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
