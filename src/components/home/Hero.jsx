import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-velmora-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-7d2e9a"
          data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry close-up on model neckline soft editorial lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width={2000}
        />
        {/* Subtle warm vignette to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/30 to-velmora-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-32 lg:px-16 lg:pb-36">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-[0.4em] text-velmora-gold">
            The Summer Edit · 2026
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-[44px] font-light leading-[1.02] text-velmora-cream md:text-[68px] lg:text-[84px]"
          >
            Crafted to be <em className="text-velmora-gold not-italic font-normal"><span className="italic">Treasured</span></em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 max-w-lg text-[15px] leading-relaxed text-velmora-cream/80 md:text-[16px]"
          >
            Demi-fine gold jewelry, made in small batches with recycled metals and hand-set stones. Pieces that quietly become part of you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-velmora-gold px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-velmora-ink transition-colors duration-300 hover:bg-velmora-cream"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
            </Link>
            <Link
              to="/about"
              className="link-underline text-[12px] uppercase tracking-[0.24em] text-velmora-cream"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-velmora-cream/60">
          Scroll
        </span>
        <span className="h-10 w-px bg-velmora-cream/30" />
      </div>
    </section>
  );
}
