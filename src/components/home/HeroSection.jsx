import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-[#e8d5a3]">
          Demi-Fine Jewelry
        </p>
        <h1 className="velmora-heading-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-white/80 mb-8 max-w-lg mx-auto leading-relaxed">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="inline-block bg-white text-[#2c2825] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#d4a853] hover:text-white transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
