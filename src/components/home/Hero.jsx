import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Velmora Fine Jewelry hero — gold jewelry on model"
          data-strk-img-id="velmora-hero-bg-9k2f"
          data-strk-img={`[hero-title] [hero-sub] luxury gold jewelry close up neck ear warm light dark moody editorial cinematic`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="hero-drift absolute inset-0 h-full w-full object-cover"
        />
        {/* Cinematic gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <p
          className="fade-up text-[11px] uppercase tracking-[0.4em] text-champagne"
          style={{ animationDelay: '120ms' }}
        >
          The Spring Edition
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl lg:text-[88px]"
          style={{ animationDelay: '220ms' }}
        >
          Crafted to be<br />
          <em className="font-serif italic text-champagne">Treasured.</em>
        </h1>
        <p
          id="hero-sub"
          className="fade-up mt-7 max-w-md text-base leading-relaxed text-cream/80 md:text-lg"
          style={{ animationDelay: '340ms' }}
        >
          Demi-fine gold jewelry, quietly made in small batches. For the pieces
          you reach for every day — and the ones you pass down.
        </p>
        <div
          className="fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '460ms' }}
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 bg-champagne px-9 py-4 text-[11px] uppercase tracking-[0.3em] text-ink transition-colors hover:bg-champagne-deep"
          >
            Shop the Collection
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 border border-cream/50 px-9 py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-cream/15" />
    </section>
  );
}
