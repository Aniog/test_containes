import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function Hero() {
  const sectionRef = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, sectionRef.current); }, []);;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-espresso"
    >
      {/* Background image — warm-lit close-up of gold jewelry on a model */}
      <img
        alt="Model wearing Velmora gold jewelry in warm light"
        data-strk-img-id="hero-img-9a3b1c"
        data-strk-img="[hero-subhead] [hero-headline]"
        data-strk-img-ratio="3x4"
        data-strk-img-width="1800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      {/* Warm gradient veil for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/40 to-espresso/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full min-h-[100svh] flex items-end">
        <div className="container-velmora pb-24 md:pb-32 lg:pb-40 max-w-3xl">
          <p className="eyebrow text-gold-soft">New collection — Summer ’26</p>
          <h1
            id="hero-headline"
            className="heading-display text-5xl md:text-7xl lg:text-[5.5rem] text-ivory mt-4"
          >
            Crafted to be
            <br className="hidden md:block" />{" "}
            <em className="not-italic text-gold-soft">treasured</em>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 font-sans text-base md:text-lg text-ivory/80 max-w-xl"
          >
            Demi-fine 18K gold-plated jewelry — designed in small batches, made
            for the everyday rituals and the quiet moments in between.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn-accent group">
              Shop the Collection
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/shop/necklaces"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-sans text-[11px] md:text-xs uppercase tracking-widest2 text-ivory/90 border border-ivory/30 hover:bg-ivory/10 transition-colors duration-500"
            >
              Discover Necklaces
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial scroll cue */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/60">
        <span className="font-sans text-[10px] uppercase tracking-widest3">
          Scroll
        </span>
        <span className="block w-px h-8 bg-ivory/30" />
      </div>
    </section>
  );
}
