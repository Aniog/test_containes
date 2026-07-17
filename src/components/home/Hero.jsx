import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StrkBackground, useStrkImageLoader } from "@/components/ui/StrkImage";

export default function Hero() {
  const ref = useStrkImageLoader([]);
  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink-deep text-ivory"
    >
      {/* Background image (replaced at runtime) */}
      <StrkBackground
        id="hero-bg-6d34fa"
        query="[hero-subtitle] [hero-title]"
        ratio="3x4"
        width={1600}
      />
      {/* Warm overlay for legibility — warm gradient, not flat black */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,11,7,0.55) 0%, rgba(15,11,7,0.25) 35%, rgba(15,11,7,0.75) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 30%, rgba(180,138,74,0.18) 0%, rgba(180,138,74,0) 60%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-editorial flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-on-dark fade-up fade-up-delay-1">
            <span id="hero-eyebrow">Velmora · Autumn Edit</span>
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-[44px] leading-[1.05] sm:text-6xl md:text-7xl fade-up fade-up-delay-2"
          >
            Crafted to be <em className="not-italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-ivory/80 fade-up fade-up-delay-3"
          >
            Demi-fine jewelry in 18K gold plate — designed for everyday ritual,
            given with intention, kept for years.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 fade-up fade-up-delay-4">
            <Link to="/shop" className="btn-primary btn-gold">
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/shop?category=earrings" className="btn-outline btn-outline-on-dark">
              Discover Earrings
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden md:flex justify-center">
        <div className="flex flex-col items-center gap-2 text-ivory/60">
          <span className="text-[10px] tracking-eyebrow uppercase">Scroll</span>
          <span className="block h-8 w-px bg-ivory/40" />
        </div>
      </div>
    </section>
  );
}
