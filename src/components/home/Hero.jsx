import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-cream"
      aria-label="Hero"
    >
      {/* Editorial backdrop image */}
      <div className="absolute inset-0">
        <img
          alt="Editorial model wearing gold jewelry"
          data-strk-img-id="hero-bg-7a1b2c"
          data-strk-img="[hero-subtitle] [hero-title] editorial close-up of a woman wearing layered gold jewelry warm lit"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/15 to-espresso/70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="max-w-2xl">
          <p
            id="hero-subtitle"
            className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-soft/90"
          >
            Velmora · Demi-Fine Collection
          </p>
          <h1
            id="hero-title"
            className="display-xl mt-5 text-cream"
          >
            Crafted to be{" "}
            <em className="font-light italic text-gold-soft">treasured</em>.
          </h1>
          <p className="mt-6 max-w-md font-serif text-[18px] italic leading-relaxed text-cream/80 md:text-[20px]">
            Demi-fine jewelry, 18K gold plated and made to be worn everyday. Quiet
            luxury, in pieces you&rsquo;ll reach for again and again.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?collection=earrings"
              className="font-sans text-[12px] tracking-[0.28em] uppercase text-cream/85 underline underline-offset-[6px] decoration-cream/30 transition-colors duration-300 hover:text-cream hover:decoration-gold-soft"
            >
              Explore Earrings
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex">
        <span className="font-sans text-[10px] tracking-[0.32em] uppercase">Scroll</span>
        <span className="block h-8 w-px bg-cream/40" />
      </div>
    </section>
  );
}
