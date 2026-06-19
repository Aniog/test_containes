import React from "react";
import { Link } from "react-router-dom";
import JewelryImage from "@/components/ui/JewelryImage";

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[600px] md:h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <JewelryImage id="hero" className="w-full h-full" />
      </div>
      {/* warm bloom + readability gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div className="relative z-10 container-page h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow-dark text-gold-soft/90">Velmora · Est. 2024</p>
          <h1 className="mt-5 font-serif font-light text-5xl md:text-7xl lg:text-[5.5rem] text-ivory leading-[0.95] text-balance">
            Crafted to be
            <br />
            <em className="not-italic text-gold-soft/95">treasured</em>
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-ivory/85 max-w-lg leading-relaxed">
            Demi-fine jewelry in 18K gold plate and sterling silver — designed in our New York
            studio and hand-finished for the moments that matter.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
            <Link
              to="/collections"
              className="font-sans text-[11px] uppercase tracking-widest2 text-ivory/80 hover:text-ivory transition-colors"
            >
              <span className="link-underline">View Lookbook</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
