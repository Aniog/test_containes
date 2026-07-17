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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <p
          id="hero-eyebrow"
          className="font-manrope text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards]"
        >
          New Collection 2026
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05] max-w-3xl opacity-0 animate-[fadeInUp_0.8s_0.4s_ease-out_forwards]"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-manrope text-sm md:text-base text-cream/70 mt-6 max-w-md leading-relaxed opacity-0 animate-[fadeInUp_0.8s_0.6s_ease-out_forwards]"
        >
          Demi-fine gold jewelry for the woman who knows what she loves.
          Hypoallergenic. 18K gold plated. Made to last.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.8s_0.8s_ease-out_forwards]">
          <Link
            to="/shop"
            className="bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/shop"
            className="border border-cream/50 text-cream font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-300"
          >
            Explore Gifts
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-cream/40 animate-pulse" />
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
