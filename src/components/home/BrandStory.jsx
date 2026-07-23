import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-cream-50 py-20 md:py-28"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-cocoa-800">
              <img
                alt="Hand-finishing a piece of Velmora jewelry"
                className="w-full h-full object-cover"
                data-strk-img-id="brand-story-8c2a4f"
                data-strk-img="[story-body] [story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              />
            </div>
            {/* Caption beneath */}
            <p className="mt-4 text-[10px] uppercase tracking-btn text-ink-700/80 text-center">
              Hand-finished in our Lisbon studio.
            </p>
          </div>

          {/* Text */}
          <div className="md:col-span-6 order-1 md:order-2 md:pl-8">
            <p className="eyebrow mb-4">Our story</p>
            <h2
              id="story-title"
              className="font-serif font-light text-ink-900 text-[36px] md:text-[56px] leading-[1.02]"
            >
              Fine jewelry, <span className="italic">without</span> the fine
              jewelry price.
            </h2>
            <p
              id="story-body"
              className="mt-6 text-ink-700 text-base md:text-lg leading-relaxed font-light max-w-lg"
            >
              Velmora began with a simple question — why should a piece you wear
              every day cost a month's rent? We work with a small atelier in
              Lisbon to make demi-fine 18K gold plated jewelry that looks like
              the real thing, feels like the real thing, and lives in your
              collection for years.
            </p>
            <p className="mt-4 text-ink-700 text-base md:text-lg leading-relaxed font-light max-w-lg">
              Hypoallergenic, hand-finished, and made to be worn — not saved
              for someday.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-btn text-ink-900 hover:text-gold-600 transition-colors duration-300"
            >
              Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
