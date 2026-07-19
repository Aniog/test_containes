import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { HERO_IMAGE } from "@/data/realImages";

/**
 * Full-bleed editorial hero.
 * The image is a warm, intimate close-up of gold jewelry on skin.
 * A thin tag at the top, a serif headline, a restrained subhead, and a
 * single accent CTA keep the section focused and luxurious.
 */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Soft fade-in once the image is decoded.
    const img = ref.current?.querySelector("img");
    if (img && img.complete) setLoaded(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone"
      aria-label="Velmora — Crafted to be Treasured"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Gold jewelry worn on skin, close-up warm candlelight"
          src={HERO_IMAGE}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-[1200ms] ease-velvet",
            loaded ? "opacity-90" : "opacity-0",
          )}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/10 to-ink/65" />
      </div>

      <div className="relative h-full min-h-[100svh] container-page flex flex-col">
        <div className="pt-24 sm:pt-32 lg:pt-40 max-w-3xl">
          <p
            id="hero-eyebrow"
            className="eyebrow text-bone/80 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Atelier Collection · Summer 2026
          </p>
          <h1
            id="hero-headline"
            className="mt-6 font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-light tracking-tight animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            Crafted
            <br className="hidden sm:block" /> to be{" "}
            <em className="italic font-light text-bone/95">Treasured.</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 max-w-md text-bone/85 text-base sm:text-[17px] leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            Demi-fine 18K gold-plated jewelry, made in small batches for the
            everyday ritual.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "560ms" }}
          >
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-bone/85 hover:text-bone text-[11px] uppercase tracking-[0.18em] link-underline"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Bottom-right meta block */}
        <div className="mt-auto pb-8 sm:pb-10 flex items-end justify-between text-bone/70 text-[11px] uppercase tracking-[0.18em]">
          <div className="hidden sm:block">
            <p>No. 01</p>
            <p className="mt-1 text-bone/50">SS / 2026</p>
          </div>
          <p className="text-right">
            <span className="text-bone/50">Lisbon</span>
            <span className="mx-2 text-bone/30">·</span>
            <span className="text-bone/50">Paris</span>
            <span className="mx-2 text-bone/30">·</span>
            <span className="text-bone/50">New York</span>
          </p>
        </div>
      </div>
    </section>
  );
}
