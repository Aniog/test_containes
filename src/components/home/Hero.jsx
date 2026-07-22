import React from 'react';
import { Link } from 'react-router-dom';
import { StrkBackground } from '@/components/product/ProductImage';

export default function Hero() {
  return (
    <section className="relative">
      <StrkBackground
        bgId="hero-bg-velmora-01"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="relative flex min-h-[92vh] items-end md:min-h-screen md:items-center"
      >
        {/* Warm gradient veil for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/35 to-espresso/20 md:bg-gradient-to-r md:from-espresso/70 md:via-espresso/30 md:to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:py-40">
          <div className="max-w-2xl animate-fade-up">
            <p
              id="hero-eyebrow"
              className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold"
            >
              Demi-Fine Jewelry · 18K Gold
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-serif text-5xl font-light leading-[1.05] tracking-tight text-cream md:text-7xl"
            >
              Crafted to be <span className="italic">Treasured</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
            >
              Warm-lit 18k gold earrings, necklaces and huggies worn close — a
              model adorned in golden light. Everyday heirlooms from $30,
              hypoallergenic and made to be lived in.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="bg-gold px-9 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="border border-cream/40 px-9 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </StrkBackground>
    </section>
  );
}
