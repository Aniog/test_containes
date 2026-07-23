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
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-c3d4e5"
              data-strk-img="[story-body] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[11px] tracking-widest uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-obsidian leading-tight"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-8 mb-8" />
            <p
              id="story-body"
              className="font-sans text-sm text-text-secondary leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't
              require a special occasion. We design demi-fine pieces that move with you —
              from morning coffee to candlelit dinners — without ever losing their glow.
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
              Every piece is crafted with 18K gold plating over sterling silver or brass,
              using hypoallergenic materials that are kind to sensitive skin. We believe
              in accessible luxury — jewelry that feels precious because it is.
            </p>
            <Link
              to="/#"
              className="mt-8 self-start font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-all duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
