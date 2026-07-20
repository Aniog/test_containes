import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800&q=90&fit=max&fm=jpg";

export function HomeHero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative w-full h-[88vh] min-h-[600px] overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        style={{
          backgroundImage: `url(${HERO_FALLBACK})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Warm gradient overlay so text always reads against image */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/25 to-ink/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-end pb-20 md:pb-28">
        <div className="px-6 md:px-10 lg:px-16 max-w-3xl">
          <p className="text-bone/80 text-[10px] md:text-[11px] uppercase tracking-wider3 mb-5 animate-fade-in-up">
            New Collection · Autumn 2026
          </p>
          <h1
            id="hero-title"
            className="font-serif text-bone text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-light tracking-tight animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Crafted to be
            <br />
            <span className="italic font-light text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-bone/85 text-sm md:text-base max-w-md leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            Demi-fine jewelry in 18K gold plating. Designed to be lived in, layered, and given
            with intention.
          </p>
          <div className="mt-9 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "360ms" }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-bone text-ink px-9 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="text-bone/85 text-[11px] uppercase tracking-wider2 font-medium hover:text-bone transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-bone/70">
        <span className="text-[10px] uppercase tracking-wider3">Scroll</span>
        <span className="w-px h-8 bg-bone/40" />
      </div>
    </section>
  );
}
