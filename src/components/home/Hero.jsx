import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-6 animate-fade-in"
            >
              New Collection · 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-pale leading-[1.1] mb-6 animate-slide-up"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base text-velmora-pale/70 leading-relaxed mb-10 max-w-sm animate-slide-up"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300 font-semibold group"
              >
                Shop the Collection
                <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-velmora-pale/40 text-velmora-pale font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-pale/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-pale/40 to-transparent" />
      </div>
    </section>
  );
}
