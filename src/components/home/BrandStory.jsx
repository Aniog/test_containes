import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-cream text-ink py-20 md:py-28 lg:py-32"
    >
      <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-warm-radial">
            <img
              alt="Velmora atelier — hands finishing a gold piece"
              data-strk-img-id="brand-story-portrait-5d29a7"
              data-strk-img="[brand-story-eyebrow] [brand-story-title] artisan hands finishing gold jewelry editorial warm portrait"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-4">
          <p id="brand-story-eyebrow" className="eyebrow">Our Story</p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.05] text-balance"
          >
            Designed in studio.
            <br />
            <span className="italic text-gold-deep">Finished by hand.</span>
          </h2>
          <p className="mt-6 font-sans text-base text-muted-light leading-relaxed max-w-lg">
            Velmora began at a kitchen table with a single sketch of a
            huggie that felt right — substantial, sculptural, made to wear
            every day. Today, each piece is hand-finished by a small team
            of artisans in our atelier, in 18K gold plating over brass
            weathers into the patina of a life well lived.
          </p>
          <p className="mt-4 font-sans text-base text-muted-light leading-relaxed max-w-lg">
            We design for the women who build quietly, give generously,
            and buy for themselves without apology.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-editorial font-medium text-ink hover:text-gold transition-colors">
            Read our story
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
