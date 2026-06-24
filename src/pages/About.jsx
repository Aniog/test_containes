import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const containerRef = useRef(null);
  useEffect(() => {
    const f = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(f);
  }, []);

  return (
    <div ref={containerRef} className="bg-bone pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60svh] min-h-[420px] text-bone overflow-hidden">
        <div
          className="absolute inset-0 bg-ink"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] [about-hero-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink/80" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-soft">Our Story</p>
          <h1
            id="about-hero-title"
            className="font-serif font-light text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.05]"
          >
            Slow gold,<br />
            <em className="italic text-gold-soft">made by hand.</em>
          </h1>
          <p id="about-hero-sub" className="mt-4 text-bone/80 max-w-md">
            A small atelier in Lisbon, an obsessive eye for proportion, and the
            belief that demi-fine should never feel disposable.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 text-ink/85 text-[16px] leading-[1.8] space-y-8">
        <p>
          Velmora was founded in 2021 around a kitchen table, with a stubborn
          belief: that everyday gold jewelry should feel as considered as a
          piece of fine art. Our pieces are designed in Portugal and finished
          by a small team of artisans who plate, polish and inspect every
          single one before it leaves the studio.
        </p>
        <p>
          We work in 18k gold plating over solid brass — a demi-fine standard
          that is durable, hypoallergenic, and beautifully warm in tone. Our
          gemstones are hand-set, our chains are hand-soldered, and our boxes
          are made of recycled paper and cotton.
        </p>
        <p>
          We believe in making fewer, better things, and pricing them fairly.
          Most demi-fine jewelry is sold at a 6-8x markup. Ours is sold at a
          fraction of that — direct, with no middlemen, so you pay for the
          piece, not the storefront.
        </p>

        <div className="pt-4">
          <Link
            to="/shop"
            className="inline-block bg-ink text-bone hover:bg-gold-deep transition-colors px-10 py-4 text-[11px] tracking-[0.3em] uppercase"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
