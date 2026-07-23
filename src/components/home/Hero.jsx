import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

export default function Hero() {
  return (
    <StrkImageLoader className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9c2a1b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      {/* Subtle gradient to ensure text always reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/10 to-espresso/60 pointer-events-none" />

      <div className="relative h-full mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28">
        <div className="max-w-2xl animate-fade-in">
          <p className="eyebrow text-gold/90 mb-5">Velmora · Established 2024</p>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] font-light text-ivory"
          >
            Crafted to be<br />Treasured.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base sm:text-lg text-ivory/85 max-w-md font-light leading-relaxed"
          >
            Demi-fine gold jewelry, designed in studio and made for every day.
            Quiet pieces, considered forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <Button as={Link} to="/shop" variant="gold" size="lg" className="group">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-widest font-medium text-ivory/80 hover:text-gold transition-colors px-1 py-2"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-widest text-ivory/60">
        <span className="h-px w-8 bg-ivory/40" />
        Scroll
        <span className="h-px w-8 bg-ivory/40" />
      </div>
    </StrkImageLoader>
  );
}
