import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { placeholderSrc } from "@/data/products";

export function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-velmora-sand" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-velmora-cream">
            <img
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src={placeholderSrc}
            />
          </div>

          <div className="lg:py-10">
            <p className="text-xs uppercase tracking-widest text-velmora-gold mb-3">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base mb-5 md:mb-6"
            >
              Designed for Modern Heirlooms
            </h2>
            <p
              id="brand-story-desc"
              className="text-velmora-taupe leading-relaxed mb-6 md:mb-8"
            >
              Velmora was born from a belief that fine-quality jewelry should feel
              accessible without ever feeling ordinary. Each piece is cast in
              small batches using recycled brass and finished with thick 18k gold
              plating — created to be worn, gifted, and treasured for years.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8 md:mb-10">
              From our studio to your jewelry box, we design with intention:
              clean silhouettes, thoughtful details, and a warm, quiet luxury
              that complements the life you live.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-widest border-b border-velmora-base pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
