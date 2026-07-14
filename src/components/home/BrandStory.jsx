import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      className="bg-ivory"
      aria-labelledby="brand-story-title"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        <div className="relative aspect-[4/3] md:aspect-auto order-1">
          <img
            alt="Velmora atelier — gold jewelry on linen"
            data-strk-img-id="brand-story-img-7a2b1d"
            data-strk-img="[brand-story-text] [brand-story-title] Velmora atelier gold jewelry on linen warm natural light editorial"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-2 flex items-center">
          <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24 max-w-xl">
            <p className="eyebrow">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3 leading-[1.1]"
            >
              Gold, made
              <br />
              for the every day.
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-ash leading-relaxed"
            >
              Velmora was founded on a simple idea: fine jewelry shouldn't live
              in a box waiting for an occasion. Each piece is hand-finished by
              our atelier using 18K gold plating over a hypoallergenic base,
              built to wear with a white tee or a wedding dress — and to be
              passed down.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition group"
            >
              Read Our Story
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
