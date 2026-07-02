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
    <section ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-c3d4e5"
              data-strk-img="[story-body] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian leading-tight mb-6"
            >
              Made with intention,
              <br />
              <em className="italic">worn with love</em>
            </h2>
            <p
              id="story-body"
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't
              require a special occasion. We design demi-fine pieces that bridge the
              gap between fast fashion and fine jewelry — crafted to last, priced to
              be accessible.
            </p>
            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-10">
              Every piece is thoughtfully designed in our studio, using 18K gold plating
              over hypoallergenic bases. We believe in slow design, ethical sourcing,
              and jewelry that tells your story.
            </p>
            <Link
              to="#"
              className="self-start font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
