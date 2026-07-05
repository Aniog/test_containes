import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">Demi-Fine Gold Jewelry</p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light opacity-90">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="inline-block bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[var(--color-gold-dark)] hover:shadow-xl">
          Shop the Collection
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
