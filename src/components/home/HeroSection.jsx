import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundImage } from '@/components/ProductImage';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <BackgroundImage
        bgId="hero-bg-velmora"
        query="[hero-subtitle] [hero-title] gold jewelry model"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 bg-ink-light"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream-50">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-cream-200 mb-5 animate-fade-in"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] max-w-4xl animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md text-base md:text-lg text-cream-100/90 font-light animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Quiet luxury for everyday moments. Designed for layering, gifting, and lasting shine.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block px-10 py-4 bg-gold text-white text-sm font-medium tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
