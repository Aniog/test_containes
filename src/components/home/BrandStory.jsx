import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="story"
      className="py-16 md:py-24 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-stone/30">
            <img
              data-strk-img-id="story-img"
              data-strk-img="[story-text] jewelry artisan hands craft gold making"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide leading-tight">
              Designed in Small
              <br />
              Batches, Made to Last
            </h2>
            <div className="mt-6 space-y-4 text-sm md:text-base text-charcoal/80 leading-relaxed">
              <p id="story-text">
                Velmora was born from a simple belief: fine jewelry should be
                accessible without compromising on quality or conscience. Every
                piece is designed in our studio and crafted by skilled
                artisans using responsibly sourced materials.
              </p>
              <p>
                We work in small batches to minimize waste and ensure each item
                meets our exacting standards. The result is demi-fine jewelry
                that feels special, wears beautifully, and stands the test of
                time.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-charcoal hover:text-champagne transition-colors group"
            >
              Our Story
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
