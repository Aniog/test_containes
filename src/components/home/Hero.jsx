import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#0F0E0C]">
      {/* Background image - warm editorial jewelry shot */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
          alt="Velmora Fine Jewelry - Editorial close-up of gold jewelry on model"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-serif text-[52px] md:text-[68px] leading-[1.05] tracking-[-1px] text-white mb-4">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-[#E8E4DC] text-lg md:text-xl tracking-wide mb-8 max-w-md mx-auto">
          Demi-fine gold jewelry, made for the moments that matter.
        </p>
        <Link to="/shop">
          <Button variant="solid" size="lg" className="tracking-[2.5px]">
            SHOP THE COLLECTION
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;