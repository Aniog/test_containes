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
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-headline] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-serif text-4xl lg:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-taupe leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious without the luxury price tag — crafted with care, worn with confidence.
            </p>
            <p className="font-sans text-sm text-taupe leading-relaxed mb-10">
              Every piece in our collection is made with 18K gold plating over hypoallergenic bases, designed to last through the everyday moments that matter most. From morning coffee to candlelit dinners, Velmora moves with you.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian/40 pb-0.5 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
