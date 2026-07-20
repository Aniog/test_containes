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
      className="py-16 md:py-0 bg-ivory-dark"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/10" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 md:py-20">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-5">
            Our Story
          </p>
          <h2
            id="brand-story-heading"
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-espresso leading-[1.15] mb-6"
          >
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <p
            id="brand-story-text"
            className="font-inter text-sm font-light text-stone leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
          </p>
          <p className="font-inter text-sm font-light text-stone leading-relaxed mb-8">
            Each piece is crafted with 18K gold plating over sterling silver, using hypoallergenic materials that are gentle on skin. We believe in accessible luxury — jewelry that feels as good as it looks.
          </p>
          <Link
            to="/shop"
            className="self-start font-inter text-xs uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
