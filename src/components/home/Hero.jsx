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
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/75 via-velmora-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeInUp">
            {/* Eyebrow */}
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-velmora-gold mb-6">
              New Collection 2026
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-velmora-cream mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="text-sm md:text-base text-velmora-cream/70 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. Hypoallergenic. Enduring. Yours.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-velmora-gold text-velmora-obsidian px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-velmora-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-velmora-cream/40 text-velmora-cream px-8 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.2em] uppercase text-velmora-cream">Scroll</span>
        <div className="w-px h-8 bg-velmora-cream/50 animate-pulse" />
      </div>
    </section>
  );
}
