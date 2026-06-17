import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('our-cakes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3d2b1f]/50 via-[#3d2b1f]/30 to-[#fdf6ee]" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-24">
        <span className="inline-block bg-rose-100 text-rose-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Artisan Bakery
        </span>
        <h1 id="hero-title" className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          Cakes Made With<br />
          <span className="italic text-rose-200">Love & Butter</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          Handcrafted celebration cakes, custom designs, and everyday indulgences — baked fresh daily in our family kitchen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMenu}
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-4 px-10 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Our Cakes
          </button>
          <button
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-rose-400 font-semibold py-4 px-10 rounded-full text-base transition-all duration-200"
          >
            Place an Order
          </button>
        </div>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
