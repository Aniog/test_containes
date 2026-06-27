import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105 animate-[ken-burns_20s_ease-out_infinite]"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-[1]" />
      
      <div className="relative z-[2] text-center text-white px-4 max-w-4xl opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight tracking-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 max-w-2xl mx-auto border-t border-b border-white/20 py-4">
          Timeless demi-fine jewelry for the modern spirit.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-obsidian px-10 py-4 text-xs tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all duration-500 transform hover:scale-105 shadow-xl"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <div className="w-full h-full bg-white animate-[scroll-indicator_2s_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
