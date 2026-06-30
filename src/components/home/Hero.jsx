import { Link } from "react-router-dom";
import { useRef } from "react";
import { useStrkImages } from "@/lib/imageLoader.js";

/**
 * Full-bleed hero with a warm-lit gold-jewelry model image.
 * - Headline uses Cormorant Garamond for the editorial feel.
 * - Background is a soft warm gradient that lets the dark editorial photo
 *   read as the focal point without feeling like a generic e-com banner.
 */
export default function Hero() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[88svh] md:min-h-[92svh] flex items-end overflow-hidden bg-overlay"
    >
      {/* Background image */}
      <img
        alt="A close-up of a model wearing warm gold jewelry"
        data-strk-img-id="hero-editorial-7d2a3c"
        data-strk-img="[hero-eyebrow] [hero-headline] [hero-subhead] woman wearing gold jewelry close up editorial portrait warm"
        data-strk-img-ratio="3x2"
        data-strk-img-width="2000"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Warm overlay so headline is always legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/40 via-overlay/30 to-overlay/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full container-wide pb-16 md:pb-24 pt-32 md:pt-40">
        <div className="max-w-2xl text-cream">
          <p
            id="hero-eyebrow"
            className="eyebrow text-cream/80 mb-5 md:mb-7"
          >
            Velmora — Spring Collection
          </p>
          <h1
            id="hero-headline"
            className="h-display text-cream text-[44px] leading-[1.05] md:text-7xl lg:text-[88px]"
          >
            Crafted to be <em className="italic font-light text-gold-soft">treasured</em>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 md:mt-8 font-sans text-base md:text-lg text-cream/80 leading-relaxed max-w-md"
          >
            Demi-fine jewelry in warm 18K gold plating, made for the moments
            that matter — and the everyday ones in between.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn-primary bg-gold text-cream hover:bg-gold-soft hover:text-ink">
              Shop the collection
            </Link>
            <Link
              to="/collections"
              className="btn border border-cream/60 text-cream hover:bg-cream hover:text-ink"
            >
              Discover the stories
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom hairline for visual resting */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-cream/20 pointer-events-none" />
    </section>
  );
}
