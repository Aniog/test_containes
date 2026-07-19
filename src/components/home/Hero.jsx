import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                data-strk-bg-id="hero-bg-velmora"
                data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model editorial"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1920"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h1 id="hero-title" className="text-white text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight">
                    Crafted to be Treasured
                </h1>
                <p id="hero-subtitle" className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] font-light mb-10 max-w-xl">
                    Timeless demi-fine jewelry for the modern spirit.
                </p>
                <Link
                    to="/shop"
                    className="bg-white text-velmora-black px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-velmora-sand transition-colors duration-300"
                >
                    Shop the Collection
                </Link>
            </div>

            {/* Trust Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">Free Worldwide Shipping</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">30-Day Returns</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">18K Gold Plated</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">Hypoallergenic</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
