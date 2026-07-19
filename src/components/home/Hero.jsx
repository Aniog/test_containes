import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7c4b2d"
        data-strk-bg="[hero-subtitle] [hero-eyebrow] [hero-title]"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
      />
      {/* Warm tone overlay so white/ivory text remains AAA readable regardless of image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-ink/65"
      />

      <div className="relative h-full container-7xl flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="eyebrow text-gold-soft"
          >
            ◆ The Velmora Edit · 2026
          </p>
          <h1
            id="hero-title"
            className="display-1 text-ivory mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] text-balance"
          >
            Crafted to be<br />Treasured.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/80 max-w-lg leading-relaxed"
          >
            Demi-fine jewelry in 18k gold plating. Quietly made, meant to be
            worn on every kind of day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-ivory text-ink px-8 py-4 text-[11px] uppercase tracking-eyebrow font-medium border border-ivory hover:bg-transparent hover:text-ivory transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center text-ivory/85 hover:text-ivory px-2 py-3 text-[11px] uppercase tracking-eyebrow font-medium transition-colors"
            >
              See the Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
