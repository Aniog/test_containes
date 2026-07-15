import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { StrkBackground } from "@/components/ui/StrkImage";
import { useImageLoader } from "@/hooks/useImageLoader";

export function HeroSection() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <StrkBackground
        id="hero-bg"
        query="[hero-title] [hero-subtitle] gold jewelry editorial"
        ratio="9x16"
        width={1200}
        className="absolute inset-0 h-full w-full bg-velmora-charcoal"
      />
      <div className="absolute inset-0 bg-velmora-ink/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] tracking-wide md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/85 md:text-base"
        >
          Quiet luxury for everyday moments. Designed for the women who wear
          elegance effortlessly.
        </p>
        <Link to="/shop" className="mt-10">
          <Button variant="accent" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
