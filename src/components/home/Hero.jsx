import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getStrkImageUrl } from "@/hooks/useStrkImages";

export default function Hero() {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const heroUrl = getStrkImageUrl("hero-bg-velmora-9c1d2e");

  return (
    <section ref={sectionRef} className="relative flex min-h-[92vh] items-end overflow-hidden bg-espresso">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-9c1d2e"
        data-strk-bg="[hero-sub] [hero-title] warm-lit close-up gold jewelry on model neck and ear dark editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
        style={heroUrl ? { backgroundImage: `url('${heroUrl}')` } : undefined}
      />
      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/20" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] font-sans font-semibold uppercase tracking-widest2 text-gold-tint">
            Demi-Fine · 18k Gold · Honest Prices
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="mt-6 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
            Warm-lit close-up of gold jewelry on skin. Quietly luxurious pieces, plated in 18k gold
            and made for every day — from $30.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#story"
              className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cream underline decoration-gold underline-offset-8 transition-colors duration-300 hover:text-gold-tint"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
