import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-linen py-16 md:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image — left */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id="brand-story-img-x1y2z3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
          <span id="brand-story-desc" className="sr-only">artisan hands crafting gold jewelry workshop warm light editorial photography</span>
        </div>

        {/* Text — right */}
        <div className="flex flex-col justify-center px-6 md:px-14 lg:px-20 py-12 md:py-20">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-wide leading-snug mb-6">
            Made with intention.<br />
            <em className="not-italic font-light text-driftwood">Worn with love.</em>
          </h2>
          <div className="space-y-4 mb-8">
            <p className="font-sans text-sm text-bark leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-bark leading-relaxed">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and built to last. We work with small ateliers who share our commitment to quality and ethical production.
            </p>
          </div>
          <Link
            to="/shop"
            className="self-start border border-velvet text-velvet hover:bg-velvet hover:text-parchment font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
