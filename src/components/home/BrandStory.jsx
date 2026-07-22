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
    <section ref={containerRef} className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso/10">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-b3c4d5"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-cream/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-3xl md:text-4xl font-light text-espresso leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">enduring beauty</em>
            </h2>
            <div
              id="brand-story-body"
              className="space-y-4 font-inter text-sm text-charcoal leading-relaxed"
            >
              <p>
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. Every woman deserves to feel adorned, every day.
              </p>
              <p>
                We design each piece with intention — drawing from art deco geometry, botanical forms, and the quiet elegance of heirloom jewelry. Our 18K gold-plated pieces are crafted to last, to layer, and to be passed on.
              </p>
              <p>
                Demi-fine. Accessible. Yours.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/about"
                className="font-inter text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Our Story
              </Link>
              <div className="w-px h-4 bg-warm-gray-light" />
              <Link
                to="/shop"
                className="font-inter text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-warm-gray-light">
              <p className="font-cormorant text-lg italic text-warm-gray font-light">
                "Wear it every day. Treasure it always."
              </p>
              <p className="font-inter text-xs text-warm-gray mt-1 uppercase tracking-[0.1em]">
                — Velmora Fine Jewelry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
