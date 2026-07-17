import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative -mt-16 md:-mt-20 h-[88vh] min-h-[600px] w-full overflow-hidden md:h-[92vh]"
      aria-label="Velmora Fine Jewelry — Crafted to be Treasured"
    >
      {/* Background photography */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-7a1f3e"
        data-strk-bg="[hero-eyebrow] [hero-headline] editorial gold jewelry model warm portrait"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
      />
      {/* Warm tonal overlay so the typography reads on any image */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/30 via-ink-deep/15 to-ink-deep/55" />
      {/* Soft top gradient under the nav (only visible when nav is transparent) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-deep/35 to-transparent md:h-32" />

      {/* Headline content */}
      <div className="container-content relative z-10 flex h-full flex-col items-center justify-end pb-16 text-center text-ivory md:pb-24">
        <p
          id="hero-eyebrow"
          className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-gold-soft md:text-[0.75rem]"
        >
          Velmora Fine Jewelry · Spring Edit
        </p>
        <h1
          id="hero-headline"
          className="mt-5 max-w-4xl font-serif text-[2.75rem] font-light leading-[1.05] text-ivory md:text-[4.5rem] lg:text-[5.5rem]"
        >
          Crafted to be
          <span className="block italic text-gold-soft">Treasured</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:max-w-lg md:text-base">
          Demi-fine 18K gold-plated jewelry, hand-finished in small batches. Made to be lived in.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 cta-label text-ivory transition-all duration-200 ease-out hover:-translate-y-px hover:bg-gold-deep"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/shop?category=sets"
            className="inline-flex items-center justify-center gap-2 border border-ivory/70 px-9 py-4 cta-label text-ivory transition-all duration-200 hover:bg-ivory hover:text-ink"
          >
            Gift Sets
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center text-ivory/70 md:flex">
        <span className="text-[0.625rem] uppercase tracking-[0.34em]">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
