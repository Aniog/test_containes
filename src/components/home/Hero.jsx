import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] md:min-h-screen w-full flex items-end overflow-hidden bg-petal"
    >
      {/* Background image (model + jewelry, warm-lit) */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-1"
        data-strk-bg="[velmora-hero-subhead] [velmora-hero-headline] editorial gold jewelry on warm skin close-up"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Soft warm overlay so headline reads on the lighter side */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-editorial mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-widest2 text-canvas/80 mb-5">
            New · Summer Edit
          </p>
          <h1
            id="velmora-hero-headline"
            className="font-serif text-canvas font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
          >
            Crafted to be
            <br className="hidden sm:block" /> <em className="not-italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="velmora-hero-subhead"
            className="mt-6 text-canvas/85 text-base md:text-lg leading-relaxed max-w-md"
          >
            Demi-fine jewelry in 18K gold plating — quiet, layered, and made for the everyday
            heirloom years.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 bg-canvas text-espresso h-12 px-8 text-[11px] uppercase tracking-widest2 font-medium hover:bg-canvas/90 transition-colors"
            >
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center gap-2 border border-canvas/70 text-canvas h-12 px-8 text-[11px] uppercase tracking-widest2 font-medium hover:bg-canvas hover:text-espresso transition-colors"
            >
              Discover the Edit
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-8 right-10 z-10 items-center gap-3 text-canvas/70 text-[10px] uppercase tracking-widest2">
        <span className="block w-10 h-px bg-canvas/50" />
        Scroll
      </div>
    </section>
  );
}
