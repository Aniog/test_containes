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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] fine gold jewelry artisan craftsmanship"
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
          <div className="md:pl-8">
            <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-espresso font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em>quiet elegance</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-charcoal leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that every woman deserves
              to wear beautiful jewelry every day — not just on special occasions.
            </p>
            <p className="font-sans text-sm text-charcoal leading-relaxed mb-4">
              We design demi-fine pieces that bridge the gap between costume
              jewelry and fine jewelry. 18K gold-plated, hypoallergenic, and
              crafted to last — at a price that feels like a treat, not a splurge.
            </p>
            <p className="font-sans text-sm text-charcoal leading-relaxed mb-10">
              Each piece is thoughtfully designed in our studio and made with
              materials that are kind to your skin and the planet.
            </p>
            <Link
              to="/shop"
              className="inline-block border border-espresso text-espresso text-xs uppercase tracking-widest font-sans px-8 py-3.5 hover:bg-espresso hover:text-cream transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
