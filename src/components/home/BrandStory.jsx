import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-ivory-200">
      <div className="container-page py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sable order-2 lg:order-1">
            <img
              alt="A jeweler's hands finishing a piece in warm gold"
              data-strk-img-id="story-image"
              data-strk-img="[story-title] [story-subtitle] jeweler hands finishing gold jewelry editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating tag */}
            <div className="absolute bottom-6 left-6 bg-ivory px-5 py-4 max-w-[220px]">
              <span className="eyebrow">Since 2021</span>
              <p className="mt-1.5 font-serif text-lg leading-snug text-sable">
                Designed in small batches, made to be lived in.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 max-w-xl">
            <span className="eyebrow">Our story</span>
            <h2
              id="story-title"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mt-3 text-sable leading-[1.05]"
            >
              Heirlooms,{" "}
              <span className="italic text-gold">quietly</span> made.
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-base sm:text-lg text-sable/80 font-sans font-light leading-relaxed"
            >
              Velmora began at a kitchen table in Lisbon, with a single gold
              ear cuff and a belief that demi-fine jewelry should feel
              considered — never overdone. Every piece is hand-finished in
              18K gold plating, designed to wear in, and made to be passed on.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sable font-sans text-[12px] tracking-widest2 uppercase font-medium hover:text-gold transition-colors"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
