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
      id="story"
      ref={containerRef}
      className="py-20 md:py-0 bg-ivory-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            data-strk-img-id="story-img-velmora-c3d4e5"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story — jewelry craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/10" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6"
          >
            Made with intention.
            <br />
            <em className="italic">Worn with love.</em>
          </h2>
          <p
            id="story-body"
            className="text-sm font-sans text-taupe leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry
            shouldn't require a special occasion — or a special budget. We
            design demi-fine pieces that live at the intersection of
            craftsmanship and accessibility.
          </p>
          <p className="text-sm font-sans text-taupe leading-relaxed mb-8">
            Every piece is thoughtfully designed, hypoallergenic, and built to
            last. Because you deserve jewelry that keeps up with your life.
          </p>
          <Link
            to="/#story"
            className="self-start text-xs font-sans uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
