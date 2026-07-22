import React from "react";
import { ArrowRight } from "lucide-react";
import { StrkBackground } from "@/components/ui/StrkMedia";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen">
      <StrkBackground
        bgId="hero-bg-6d34fa"
        query="warm-lit close-up of gold jewelry on a model, luxury editorial photography, dark background"
        ratio="16x9"
        width={1600}
        className="absolute inset-0"
      />
      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] md:min-h-screen max-w-7xl items-end px-5 pb-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-5 inline-block font-sans text-xs font-semibold uppercase tracking-overline text-goldSoft">
            Demi-Fine Jewelry · 18k Gold
          </span>
          <h1 className="font-display text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Quiet luxury for every day. Demi-fine earrings, necklaces and
            huggies in warm 18k gold — designed to be worn, gifted, and kept.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="solid" size="lg" to="/shop">
              Shop the Collection <ArrowRight size={16} />
            </Button>
            <Button variant="light" size="lg" to="/about">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-cream/60 to-transparent" />
      </div>
    </section>
  );
}
