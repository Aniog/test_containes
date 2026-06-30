import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl lg:text-7xl text-ivory font-light leading-tight opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm lg:text-base text-ivory/80 mt-6 leading-relaxed max-w-sm opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]"
            >
              Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="mt-10 flex items-center gap-5 opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
              <Link
                to="/shop"
                className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="font-sans text-xs tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors duration-300 flex items-center gap-2"
              >
                Our Story
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
