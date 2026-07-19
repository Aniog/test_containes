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
    <section
      ref={containerRef}
      className="bg-ink-300 text-cream-100"
      aria-labelledby="story-title"
    >
      <div className="mx-auto grid max-w-editorial grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[560px]">
          <img
            alt="A Velmora artisan hand-finishing a gold piece at the workbench"
            loading="lazy"
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-eyebrow] [story-title] [story-body] jewelry artisan at workbench warm light"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <div className="max-w-md">
            <p
              id="story-eyebrow"
              className="eyebrow text-gold-300"
            >
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-4xl leading-[1.1] text-cream-100 md:text-5xl"
            >
              Made slowly,
              <br />
              <em className="font-light">worn for years.</em>
            </h2>
            <p
              id="story-body"
              className="mt-6 text-base leading-relaxed text-cream-100/80 md:text-[17px]"
            >
              Velmora began with a single idea: that demi-fine jewelry could
              feel as considered as fine jewelry, at a price you could choose
              often. Every piece is hand-finished by a small workshop of
              artisans, plated in 18K gold over a hypoallergenic base, and
              meant to live with you — not in a box.
            </p>
            <Link to="/about" className="btn-ghost mt-9 text-cream-100" id="story-cta">
              <span className="[&::after]:bg-cream-100">Our Story</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
