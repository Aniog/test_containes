import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_COPY } from '@/data/products';

export default function Hero() {
  const ref = useRef(null);

  // Trigger ImageHelper.loadImages isn't needed — vite plugin handles strk-img at build time.
  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink text-cream"
    >
      {/* Background image — full bleed, editorial close-up of warm gold jewelry */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-eyebrow]"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(26,22,20,0.35) 0%, rgba(26,22,20,0.55) 60%, rgba(26,22,20,0.75) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40 pointer-events-none" />

      {/* Content */}
      <div className="relative h-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-3xl reveal">
          <p id="hero-eyebrow" className="label-light text-cream/80 mb-6">
            {HERO_COPY.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream font-light leading-[1.02] tracking-[-0.01em] text-[3.2rem] sm:text-[4.4rem] md:text-[5.6rem] lg:text-[6.5rem]"
          >
            {HERO_COPY.title}
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 text-base md:text-lg text-cream/80 max-w-xl leading-relaxed font-light"
          >
            {HERO_COPY.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={HERO_COPY.primaryCta.href} className="btn-gold">
              {HERO_COPY.primaryCta.label}
            </Link>
            <Link
              to={HERO_COPY.secondaryCta.href}
              className="btn-ghost btn-ghost-rev text-cream"
              style={{ color: '#FAF7F2' }}
            >
              <span className="after:bg-cream">{HERO_COPY.secondaryCta.label}</span>
            </Link>
          </div>
        </div>

        {/* Bottom corner scroll hint */}
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-10 lg:right-16 hidden md:flex items-center gap-3 text-cream/60 text-xs uppercase tracking-[0.24em]">
          <span className="block w-10 h-px bg-cream/40" />
          Scroll
        </div>
      </div>
    </section>
  );
}