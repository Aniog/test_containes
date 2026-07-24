import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink md:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-v1m0ra"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            Demi-Fine · 18K Gold Plated
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            id="hero-headline"
            className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl"
          >
            Crafted to be{" "}
            <em className="font-normal italic text-cream">Treasured</em>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            id="hero-subhead"
            className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 md:text-base"
          >
            Warm-lit gold jewelry on skin — demi-fine earrings, necklaces and huggies
            designed for every day, made to last for years. Premium, never precious about it.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2.5 rounded-sm border border-gold bg-gold px-9 py-4 text-xs font-medium uppercase tracking-widest2 text-cream transition-all duration-300 hover:border-gold-deep hover:bg-gold-deep"
            >
              Shop the Collection <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center rounded-sm border border-cream/60 px-9 py-4 text-xs font-medium uppercase tracking-widest2 text-cream transition-all duration-300 hover:bg-cream hover:text-ink"
            >
              Our Story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
