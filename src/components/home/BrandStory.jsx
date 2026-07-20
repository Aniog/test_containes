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
    <section ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto min-h-[400px] overflow-hidden bg-champagne-pale">
          <img
            data-strk-img-id="brand-story-img-d4e5f6"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6"
          >
            Jewelry that<br />
            <em className="italic text-champagne">lives with you</em>
          </h2>
          <p
            id="brand-story-desc"
            className="font-sans text-stone text-base leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't
            require a special occasion. We design demi-fine pieces that move with
            your life — from the boardroom to the beach, from Monday to forever.
          </p>
          <p className="font-sans text-stone text-base leading-relaxed mb-8">
            Every piece is crafted with 18K gold plating over hypoallergenic bases,
            designed to last and made to be worn every single day.
          </p>
          <Link
            to="/about"
            className="font-sans text-xs text-obsidian tracking-widest uppercase border-b border-champagne pb-0.5 hover:text-champagne transition-colors self-start"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
