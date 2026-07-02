import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in">
          <p className="text-gold-light text-sm md:text-base uppercase tracking-[0.2em] font-sans font-medium mb-4">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Crafted to be{' '}
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Demi-fine gold jewelry, designed for the woman who values quiet elegance — every piece a reflection of your own radiant story.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-3.5 text-sm uppercase tracking-[0.15em] font-sans font-medium transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        'absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce',
      )}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}