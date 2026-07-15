import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-border/40 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-heading] [story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-xs tracking-widest uppercase text-velmora-gold">Our Heritage</span>
            <h2 id="story-heading" className="font-serif text-3xl md:text-4xl text-velmora-text mt-2 font-light leading-tight">
              Designed with Intention,<br />Crafted to Last
            </h2>
            <p id="story-text" className="mt-6 text-sm text-velmora-muted leading-relaxed">
              At Velmora, we believe fine jewelry should be both beautiful and attainable. Every piece is
              thoughtfully designed in our atelier and plated in 18K gold, creating heirloom-quality pieces
              that honor the art of adornment without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 text-sm tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold pb-0.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}