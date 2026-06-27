import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-cream"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7c1f"
        data-strk-bg="[hero-velmora-sub] [hero-velmora-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 40%, rgba(184, 148, 95, 0.18), transparent 60%), linear-gradient(180deg, #0F0D0B 0%, #1B1714 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Darkening overlays for legibility */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-20 pt-32 md:px-10 md:pb-24">
        <div className="max-w-2xl velmora-rise">
          <p
            id="hero-velmora-eyebrow"
            className="text-[11px] uppercase tracking-[0.4em] text-gold-light"
          >
            New Collection · Summer 2026
          </p>
          <h1
            id="hero-velmora-title"
            className="mt-5 font-serif text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            Crafted to be
            <span className="block italic text-gold-light">Treasured.</span>
          </h1>
          <p
            id="hero-velmora-sub"
            className="mt-7 max-w-md text-base leading-relaxed text-cream/80 md:text-lg"
          >
            Demi-fine 18K gold-plated jewelry — quietly editorial, honestly
            priced, and made to be passed on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center bg-gold px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center px-2 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80 underline-offset-8 transition-colors duration-300 hover:text-gold-light hover:underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
