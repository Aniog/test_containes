import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <div
      data-strk-bg-id="hero-bg-velmora-01"
      data-strk-bg="[hero-headline] [hero-subhead] [hero-eyebrow]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1920"
      className="relative flex min-h-[100svh] items-center justify-center bg-espresso bg-cover bg-center"
    >
      {/* Warm overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-36 text-center">
        <Reveal>
          <p
            id="hero-eyebrow"
            className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-soft"
          >
            Demi-Fine Gold Jewelry
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            id="hero-headline"
            className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          >
            Crafted to be
            <br />
            <em className="italic text-gold-soft">Treasured</em>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            id="hero-subhead"
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg"
          >
            Warm-lit 18k gold pieces, worn close and kept forever — earrings,
            necklaces, and huggies made for the moments that matter.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/shop">
              <Button variant="primary" className="w-full sm:w-auto">
                Shop the Collection <ArrowRight size={14} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="dark" className="w-full sm:w-auto">
                Our Story
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-ivory/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold-soft to-transparent" />
        </div>
      </div>
    </div>
  );
}
