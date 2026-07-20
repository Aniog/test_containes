import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="elegant gold jewelry on model warm lighting editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/60 via-charcoal-800/40 to-charcoal-800/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-400 mb-4">
            Fine Jewelry Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-ivory-200 max-w-xl mx-auto mb-10 leading-relaxed">
            Discover our collection of demi-fine gold jewelry, designed for the
            modern woman who appreciates quiet luxury and timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-600 transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
          <p className="text-[10px] tracking-widest uppercase text-white/50">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
