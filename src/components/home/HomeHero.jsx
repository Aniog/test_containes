import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";

export default function HomeHero() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-ink-900 text-ivory-50">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1f3e8"
        data-strk-bg="Crafted to be Treasured hero gold jewelry on model"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/10 to-ink-900/70" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-ivory-50/85">Velmora Fine Jewelry</p>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-ivory-50 text-balance">
            Crafted to be
            <br className="hidden sm:block" /> <span className="italic font-light">Treasured</span>
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-ivory-50/85 text-pretty">
            Demi-fine gold jewelry, hand-finished in small batches. Designed for
            the every day, the ceremony, and everything in between.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/collections/earrings"
              className="inline-flex items-center gap-2 border border-ivory-50/40 px-7 py-4 font-sans uppercase tracking-widest2 text-[11px] text-ivory-50 transition-colors duration-300 hover:bg-ivory-50 hover:text-ink-900"
            >
              Explore Earrings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
