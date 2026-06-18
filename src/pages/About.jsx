import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream text-ink pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] text-cream overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-2c8e4d"
          data-strk-bg="[about-hero-title] artisan jewelry workshop warm editorial gold demi-fine"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative h-full max-w-5xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16">
          <p className="font-sans uppercase tracking-widest2 text-[11px] text-cream/70 mb-4">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl"
          >
            A quieter kind of fine jewelry.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 prose-velmora">
          <p className="font-serif italic text-2xl md:text-3xl text-mocha leading-snug">
            "We started Velmora because we couldn't find demi-fine pieces that
            actually felt fine."
          </p>
          <p className="mt-8 text-base md:text-lg text-mocha leading-relaxed">
            Velmora is a small atelier-led brand making 18k gold-plated jewelry
            for women who want quietly considered pieces — without the fine-jewelry
            price tag, and without the fast-fashion compromises.
          </p>
          <p className="mt-5 text-base md:text-lg text-mocha leading-relaxed">
            Every piece is hand-finished, hypoallergenic, and made to last. We
            choose recycled brass cores, plate generously, and quality-check by
            hand. No drops, no theatrics — just a slowly growing collection of
            forever pieces.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-3xl md:text-4xl">Made to be treasured.</h2>
          <p className="mt-4 text-mocha/85">
            Discover the collection — quietly, considered, and made for everyday.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/shop" variant="primary" size="lg">
              Shop the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
