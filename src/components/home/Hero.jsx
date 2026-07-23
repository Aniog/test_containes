import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden md:min-h-screen md:items-center">
      <div
        className="absolute inset-0 bg-espresso bg-cover bg-center"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-subhead] [hero-headline] warm-lit close-up of gold jewelry on a model editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/40 to-espresso/30 md:bg-gradient-to-r md:from-espresso/80 md:via-espresso/35 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-0">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-champagne">
              Demi-Fine Jewelry · Est. 2019
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              id="hero-headline"
              className="mt-5 font-display text-5xl font-medium leading-[1.05] text-cream md:text-7xl"
            >
              Crafted to be <em className="italic text-champagne">Treasured</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p
              id="hero-subhead"
              className="mt-6 max-w-md text-base leading-relaxed text-cream/85 md:text-lg"
            >
              18k gold demi-fine pieces, designed to move with you — from
              morning coffee to candlelit evenings. Hypoallergenic, made to
              last, priced to love.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-gold-deep"
              >
                Shop the Collection
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/about"
                className="border border-cream/40 px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-espresso"
              >
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px animate-pulse bg-cream/40" />
      </div>
    </section>
  );
}
