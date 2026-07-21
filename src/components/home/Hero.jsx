import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Full-bleed editorial hero. The headline and CTA sit over a warm, golden
 * jewelry image. The headline tone shifts to ivory once the navbar becomes
 * solid (handled in CSS by virtue of the navbar turning dark-on-ivory).
 */
export default function Hero() {
  return (
    <section
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-espresso"
      aria-label="Velmora fine jewelry — Crafted to be Treasured"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="A model wearing 18K gold-plated jewelry against a warm, low-light backdrop"
          data-strk-img-id="hero-main-7d12aa"
          data-strk-img="[hero-caption] [velmora-tagline]"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Warm, vignette gradient to keep text legible without a flat overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-transparent to-transparent" />
      </div>

      <div className="relative h-full max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-xl animate-fade-up">
          <p
            id="velmora-tagline"
            className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest3 text-ivory-100/80"
          >
            Velmora Fine Jewelry — Spring Edit
          </p>
          <h1
            id="hero-caption"
            className="mt-5 font-serif text-ivory-50 text-[44px] leading-[1.02] sm:text-6xl lg:text-[80px] text-balance"
          >
            Crafted to be <em className="italic font-light">Treasured</em>.
          </h1>
          <p className="mt-5 max-w-md text-sm sm:text-base text-ivory-100/80 leading-relaxed">
            Demi-fine pieces in 18K gold plating. Designed in Brooklyn, made to
            be worn — and kept — for years to come.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-primary !bg-ivory-50 !text-espresso hover:!bg-ivory-100">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?category=sets"
              className="font-sans text-[11px] uppercase tracking-widest2 text-ivory-50 border-b border-ivory-50/40 hover:border-ivory-50 pb-1 transition-colors"
            >
              Shop Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom hairline marker */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-ivory-100/10" />
    </section>
  );
}
