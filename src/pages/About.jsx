import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Hero */}
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden text-cream">
        <img
          alt="The Velmora atelier"
          data-strk-img-id="about-hero-7m4k"
          data-strk-img="jewelry artisan hands workshop tools warm light cinematic editorial"
          data-strk-img-ratio="16x9"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="hero-drift absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-champagne">
            About Velmora
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.05] md:text-7xl">
            A small atelier.<br />
            <em className="italic text-champagne">A long love affair with gold.</em>
          </h1>
        </div>
      </section>

      {/* Long copy */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
          We started Velmora in 2021 with a single, stubborn idea: fine-feeling
          jewelry should not be reserved for special occasions, and it should
          not cost a month's rent.
        </p>
        <div className="mt-12 space-y-6 text-base leading-relaxed text-mocha md:text-lg">
          <p>
            Today, we design every piece in our studio in Lisbon, and produce in
            small batches in a family-run atelier we visit twice a year. We
            work with 18K gold plating over recycled brass, hand-set crystal,
            and freshwater pearl — materials chosen because they feel good
            against skin and age beautifully with wear.
          </p>
          <p>
            Velmora is not a fashion brand. We don't drop fifty things a month.
            We release small, considered editions, and we restock what our
            community returns to. The pieces are designed to be layered, mixed,
            forgotten about — and then, in some warm light, noticed again.
          </p>
          <p>
            Thank you for being here. We hope you find something that feels
            like yours.
          </p>
          <p className="font-serif italic">— The Velmora Team</p>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-ink-soft"
          >
            Shop the Collection
          </Link>
          <Link
            to="/journal"
            className="border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ink hover:bg-ink hover:text-cream"
          >
            Read the Journal
          </Link>
        </div>
      </section>
    </div>
  );
}
