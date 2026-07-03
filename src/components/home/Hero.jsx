import { Link } from "react-router-dom";
import { useStrkImages } from "@/lib/useStrkImages";

export default function Hero() {
  const containerRef = useStrkImages([]);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-headline] gold jewelry worn model warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="animate-fade-up font-sans text-[11px] uppercase tracking-widest3 text-champagne" style={{ animationDelay: "0.1s" }}>
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="animate-fade-up mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.2s" }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/80 md:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made to be
          worn every single day.
        </p>
        <div className="animate-fade-up mt-9" style={{ animationDelay: "0.5s" }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-all duration-300 ease-luxury hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <div className="h-2 w-px animate-bounce bg-cream/60" />
        </div>
      </div>
    </section>
  );
}
