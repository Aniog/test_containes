import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-cream py-20 md:py-28 lg:py-32"
      aria-labelledby="brand-story-title"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand shadow-soft">
            <img
              alt="Velmora founder's hands holding a piece of demi-fine jewelry in a warm studio"
              data-strk-img-id="brand-story-portrait-9b1d3e"
              data-strk-img="[brand-story-subtitle] [brand-story-title] velmora fine jewelry founder atelier craft hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating quote / pull-quote tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-ivory/95 backdrop-blur-sm p-5 md:p-6 max-w-md">
              <p className="font-serif italic text-[1.0625rem] md:text-[1.1875rem] text-ink leading-[1.55]">
                &ldquo;We design for the moments that don&rsquo;t make the
                photograph — the morning, the meeting, the dinner.&rdquo;
              </p>
              <p className="mt-3 eyebrow-sm text-muted">Velmora Atelier</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            <p className="eyebrow text-muted mb-5">Our story</p>
            <h2
              id="brand-story-title"
              className="text-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] text-espresso"
            >
              Jewelry, <span className="text-display-italic">made for</span>{" "}
              the everyday.
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-7 md:mt-9 font-serif text-[1.0625rem] md:text-[1.1875rem] text-ink/85 leading-[1.75] max-w-[52ch]"
            >
              Velmora began with a quiet question: why does fine jewelry
              feel like an occasion, while the pieces we actually wear are
              the ones we forget we put on? We design demi-fine jewelry in
              18K gold plating — pieces refined enough to gift, and gentle
              enough for daily ritual.
            </p>
            <p className="mt-5 font-serif italic text-[1rem] md:text-[1.0625rem] text-muted leading-[1.7] max-w-[52ch]">
              Made in small batches. Designed in our Brooklyn studio.
              Packaged without the fuss.
            </p>
            <div className="mt-9 md:mt-11 flex items-center gap-6">
              <Link to="/#about" className="link-editorial text-ink">
                Read our story &rarr;
              </Link>
              <Link
                to="/shop"
                className="eyebrow text-muted hover:text-gold-deep transition-colors"
              >
                Shop the collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}