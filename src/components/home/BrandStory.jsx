import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-parchment" ref={containerRef}>
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="artisan crafting gold jewelry workshop warm lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting gold jewelry"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight tracking-wide-heading">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <div className="mt-6 space-y-4 text-warm-gray text-sm leading-relaxed font-sans">
              <p>
                Velmora was born from a simple belief: every woman deserves to
                feel adorned with pieces that are as meaningful as they are
                beautiful. We create demi-fine jewelry that bridges the gap
                between costume and fine jewelry.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over
                hypoallergenic metals, designed to be worn every day and
                treasured for years. We work directly with skilled artisans
                to bring you premium quality at accessible prices.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block mt-8 border border-gold text-gold hover:bg-gold hover:text-ink font-sans font-medium text-xs uppercase tracking-[0.15em] px-8 py-3 transition-all duration-200"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
