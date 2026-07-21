import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-end md:items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model close-up warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-velmora-obsidian/80 via-velmora-obsidian/30 to-transparent md:bg-gradient-to-r md:from-velmora-obsidian/70 md:via-velmora-obsidian/30 md:to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-0 w-full">
        <div className="max-w-xl animate-fadeIn">
          <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-4">
            New Collection — Summer 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl font-light text-velmora-cream leading-[1.05] tracking-wide"
          >
            Crafted to be<br />
            <em className="not-italic text-velmora-gold-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-manrope text-sm text-velmora-cream/80 mt-5 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated, hypoallergenic, made to last.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-200"
            >
              Shop the Collection
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <Link
              to="/#story"
              className="font-manrope text-xs uppercase tracking-widest text-velmora-cream/70 hover:text-velmora-gold transition-colors duration-200 flex items-center gap-1.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-velmora-cream/30 animate-pulse" />
        <span className="font-manrope text-[9px] uppercase tracking-widest text-velmora-cream/40">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
