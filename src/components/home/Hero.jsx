import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image using generic placeholder with strk-bg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-sub] [hero-head]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundColor: '#2D2A26', // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for text readability */}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 
          id="hero-head"
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-sub"
          className="font-sans text-lg md:text-xl text-[#FAF9F5]/90 mb-10 max-w-2xl font-light tracking-wide"
        >
          Discover demi-fine solid gold layers designed for the subtle art of quiet luxury. Warm, editorial, and timeless.
        </p>
        <Link 
          to="/shop" 
          className="inline-flex items-center space-x-2 bg-[#A68D47] hover:bg-[#Cbb26A] text-white px-8 py-4 tracking-widest uppercase text-sm font-semibold transition-all duration-300"
        >
          <span>Shop the Collection</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-white text-xs font-sans tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
}