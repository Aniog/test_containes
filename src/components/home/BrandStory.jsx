import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-warm-gray-pale py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <img
              data-strk-img-id="brand-story-img-v1w2x3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Accent border */}
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-gold/40 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl text-espresso font-light leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-inter text-sm text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces in 18K gold plate that are designed to be worn every day, layered, gifted, and passed down.
            </p>
            <p className="font-inter text-sm text-warm-gray leading-relaxed mb-8">
              Every piece is hypoallergenic, nickel-free, and crafted with the same care as fine jewelry — because you deserve nothing less.
            </p>
            <Link
              to="/#about"
              className="self-start font-inter text-xs tracking-widest uppercase text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
