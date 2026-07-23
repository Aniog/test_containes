import React from "react";
import { Link } from "react-router-dom";
import StrkBg from "@/components/ui/StrkBg";
import AccentButton from "@/components/ui/AccentButton";

export default function Hero() {
  return (
    <section className="relative">
      <StrkBg
        bgId="hero-bg"
        query="warm-lit close-up of gold jewelry on a model, elegant editorial photography, dark moody background, luxury demi-fine necklace and earrings"
        ratio="16x9"
        width={1800}
        className="relative flex min-h-[88vh] items-end md:min-h-[94vh]"
      >
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 md:pb-28 lg:px-12">
          <div className="max-w-2xl">
            <span className="mb-5 inline-block animate-fade-up font-body text-[11px] font-semibold uppercase tracking-mega text-gold">
              Demi-Fine · 18K Gold Plated
            </span>
            <h1
              className="animate-fade-up font-display text-5xl leading-[1.04] text-ivory md:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Crafted to be
              <span className="italic text-gold"> Treasured</span>
            </h1>
            <p
              className="mt-6 max-w-xl animate-fade-up font-body text-base leading-relaxed text-ivory/80 md:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              Quietly luxurious earrings, necklaces and huggies — designed for the
              everyday and the unforgettable, without the heirloom price.
            </p>
            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <AccentButton as={Link} to="/shop">
                Shop the Collection
              </AccentButton>
              <AccentButton as={Link} to="/about" variant="outlineLight">
                Our Story
              </AccentButton>
            </div>
          </div>
        </div>
      </StrkBg>
    </section>
  );
}
