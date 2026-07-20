import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden bg-obsidian">
          <img
            data-strk-img-id="story-img-c4d5e6"
            data-strk-img="[story-body] [story-title] gold jewelry artisan craftsmanship"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-4xl text-obsidian font-light leading-snug mb-6"
          >
            Born from a love of<br />
            <em className="italic">enduring beauty</em>
          </h2>
          <p
            id="story-body"
            className="font-sans text-sm text-text-secondary leading-relaxed mb-4"
          >
            Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8">
            Every piece is crafted with 18K gold plating over a hypoallergenic base, designed to last and to be loved. Because the best jewelry is the kind you never want to take off.
          </p>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 self-start hover:text-gold hover:border-gold transition-colors"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
