import { useEffect, useRef } from 'react';
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
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#fdf6f0]/95 via-[#fdf6f0]/80 to-[#fdf6f0]/30" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-block bg-[#fce4ec] text-[#c2185b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Handcrafted with Love
          </span>
          <h1
            id="hero-title"
            className="font-playfair text-5xl md:text-7xl font-bold text-[#2d1b0e] leading-tight mb-6"
          >
            Cakes That Make Every Moment Sweet
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-[#5c3d2e] leading-relaxed mb-10"
          >
            Artisan cakes baked fresh to order — from elegant wedding tiers to
            indulgent birthday showstoppers. Every slice tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cakes"
              className="bg-[#c2185b] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#ad1457] transition-colors text-center"
            >
              Explore Our Cakes
            </a>
            <a
              href="#contact"
              className="border-2 border-[#c2185b] text-[#c2185b] px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#c2185b] hover:text-white transition-colors text-center"
            >
              Custom Order
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold text-[#2d1b0e]">500+</p>
              <p className="text-xs text-[#9e7b6b] uppercase tracking-wide mt-1">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-[#f0ddd4]" />
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold text-[#2d1b0e]">30+</p>
              <p className="text-xs text-[#9e7b6b] uppercase tracking-wide mt-1">Cake Flavors</p>
            </div>
            <div className="w-px h-10 bg-[#f0ddd4]" />
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold text-[#2d1b0e]">5★</p>
              <p className="text-xs text-[#9e7b6b] uppercase tracking-wide mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
