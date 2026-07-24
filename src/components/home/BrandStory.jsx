import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-[#EDEAE4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-body] gold jewelry artisan hands editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width={800}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8 lg:py-12">
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight"
            >
              Designed for the Modern Heirloom
            </h2>
            <p
              id="story-body"
              className="mt-6 text-muted leading-relaxed"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              effortless. We work with artisans to create demi-fine pieces in
              18k gold plating — designed for daily wear, thoughtful gifting,
              and the quiet confidence of something beautifully made.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Every piece is nickel-free, hypoallergenic, and packaged in our
              signature embossed box, ready to become a keepsake.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase font-medium hover:text-accent transition-colors group"
            >
              Read Our Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
