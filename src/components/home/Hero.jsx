import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative -mt-16 md:-mt-20 flex min-h-[92vh] items-end md:items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-espresso bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subhead] [hero-headline] warm-lit close-up of gold jewelry worn on model neck and ear, dark moody editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-espresso/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:py-48">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold-light">
              Demi-Fine Jewelry
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              id="hero-headline"
              className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl"
            >
              Crafted to be Treasured
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p
              id="hero-subhead"
              className="mt-6 max-w-md text-base leading-relaxed text-sand md:text-lg"
            >
              18K gold plated essentials, made to be worn every day and kept
              for a lifetime — honest pricing, from $38.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="bg-gold px-10 py-4 text-xs font-semibold tracking-[0.3em] uppercase text-ivory transition-all duration-300 hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="border border-ivory/40 px-10 py-4 text-xs tracking-[0.3em] uppercase text-ivory transition-all duration-300 hover:border-gold-light hover:text-gold-light"
              >
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
