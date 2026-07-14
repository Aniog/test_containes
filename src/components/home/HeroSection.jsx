import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-velmora"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-black/60 via-velmora-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center section-pad">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-4 animate-fade-in">
            Demi-Fine 18K Gold Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-ivory font-light leading-[1.1] tracking-[0.02em] animate-slide-up"
          >
            Crafted to be
            <br />
            <em className="italic text-velmora-gold-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-5 text-sm md:text-base text-velmora-ivory/70 leading-relaxed max-w-md animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Premium demi-fine jewelry designed for everyday elegance and the moments that matter.
            Hypoallergenic, 18K gold-plated, made to last.
          </p>
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop" className="btn-gold inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
