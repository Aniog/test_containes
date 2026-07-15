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
      id="about"
      ref={containerRef}
      className="bg-ivory-dark border-t border-warm-gray-light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[360px] md:min-h-0">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-s1t2u3"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry artisan crafted"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-espresso font-light leading-snug mb-6"
            >
              Made with intention,<br />
              <em className="not-italic text-gold">worn with love</em>
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-sm text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to be worn daily — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              We use 18K gold plating over hypoallergenic bases, so your skin stays happy and your jewelry stays radiant. No compromises.
            </p>
            <Link
              to="/#"
              className="font-sans text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 self-start"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
