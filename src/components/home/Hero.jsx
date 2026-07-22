import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkBackground from "@/components/ui/StrkBackground";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal text-bone"
    >
      <StrkBackground
        bgId="hero-bg-7a4f1d"
        query="warm lit close up of gold jewelry worn on a model editorial fashion photography soft light dark warm background"
        ratio="3x4"
        width={1800}
      />

      {/* Warm gradient veil for legibility — explicit text colors above it */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(38,33,29,0.55) 0%, rgba(38,33,29,0.15) 35%, rgba(38,33,29,0.35) 65%, rgba(38,33,29,0.85) 100%)",
        }}
      />

      <div className="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-in">
          <p id="hero-eyebrow" className="eyebrow text-bone/80 mb-6">
            The Velmora Collection · Volume 04
          </p>
          <h1
            id="hero-title"
            className="font-serif font-medium text-bone text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02]"
          >
            Crafted to be{" "}
            <em className="italic font-normal text-champagne-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lead text-bone/85 max-w-xl"
          >
            Demi-fine pieces in 18K gold plate, designed for the everyday — to be
            layered, gifted, and worn until they feel like yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
              <ArrowRight className="w-4 h-4 ml-3" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-eyebrow uppercase text-bone border-b border-bone/40 hover:border-bone hover:text-bone transition-colors pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-bone/60">
        <span className="text-eyebrow uppercase">Scroll</span>
        <div className="w-px h-10 bg-bone/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-3 bg-bone animate-pulse" />
        </div>
      </div>
    </section>
  );
}
