import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm dark overlay — bottom-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="max-w-xl">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold-pale mb-4 fade-in-up">
            18K Gold Plated · Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl font-light text-cream leading-[1.05] mb-5 fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm text-cream/80 leading-relaxed mb-8 max-w-sm fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Demi-fine gold jewelry for the modern woman — designed to be worn every day, gifted with love.
          </p>
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
