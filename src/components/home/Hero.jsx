import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model close-up warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] mb-6"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-base md:text-lg text-ivory/70 leading-relaxed mb-10 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-all duration-300 group"
            >
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/#about"
              className="inline-flex items-center justify-center gap-2 border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-ivory/0 to-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
