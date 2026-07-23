import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { PLACEHOLDER_IMG } from '@/data/products';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} className="relative flex min-h-[92vh] items-end overflow-hidden md:min-h-screen md:items-center">
      <div className="absolute inset-0 hero-ken-burns">
        <img
          data-strk-img-id="hero-main-h1"
          data-strk-img="[hero-sub] [hero-title] warm-lit close-up of gold jewelry on a model editorial photography"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={PLACEHOLDER_IMG}
          alt="Warm-lit close-up of gold jewelry worn by a model"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/35 to-noir/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-10 md:pb-0 md:pt-24">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] font-sans font-medium uppercase tracking-[0.32em] text-goldlight"
          >
            Demi-Fine Jewelry · Est. 2019
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-light leading-[1.05] text-ivory md:text-7xl"
          >
            Crafted to be
            <span className="block italic text-goldlight">Treasured</span>
          </h1>
          <p
            id="hero-sub"
            className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/85 md:text-base"
          >
            Warm-lit gold jewelry photographed on a model — demi-fine pieces plated in
            18K gold, designed for everyday rituals and the moments you keep forever.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-gold px-10 py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.24em] text-noir transition-all duration-300 hover:bg-goldlight"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center justify-center border border-ivory/30 px-10 py-4 text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold/60 to-gold" />
      </div>
    </section>
  );
}
