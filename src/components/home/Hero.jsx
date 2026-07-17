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
        className="absolute inset-0 bg-espresso bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-widest3 uppercase text-gold-light mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_ease_forwards]"
            >
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] mb-6 opacity-0 animate-[fadeInUp_0.8s_0.4s_ease_forwards]"
            >
              Crafted to be<br />
              <em className="italic font-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-ivory/75 leading-relaxed mb-10 max-w-sm opacity-0 animate-[fadeInUp_0.8s_0.6s_ease_forwards]"
            >
              Demi-fine gold jewelry for the woman who knows exactly what she wants — and wears it every day.
            </p>
            <div className="opacity-0 animate-[fadeInUp_0.8s_0.8s_ease_forwards]">
              <Link to="/shop" className="btn-gold inline-block">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-ivory/40 animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 0.8; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
