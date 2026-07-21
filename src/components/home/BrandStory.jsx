import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="brand-story"
      className="py-20 sm:py-24 lg:py-28 bg-sand-100"
      style={{ backgroundColor: "#F2EBE0" }}
    >
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <StrkImage
              id="brand-story-image"
              query="[brand-story-title] [brand-story-paragraph] velmora atelier jeweler hands finishing gold jewelry"
              ratio="4x5"
              width={900}
              tone="light"
              monogram="V"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="eyebrow mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[52px] lg:leading-[1.05] text-espresso"
            >
              Heirlooms, made for <em className="italic font-light">now</em>.
            </h2>
            <p
              id="brand-story-paragraph"
              className="mt-6 text-base sm:text-lg text-espresso/75 leading-relaxed max-w-xl"
            >
              Velmora began in a small Lisbon atelier with a single question:
              why does fine jewelry live in a box? We design demi-fine pieces
              to be worn every day — hand-finished in 18K gold plating, made
              for the way you actually live.
            </p>
            <p className="mt-4 text-base sm:text-lg text-espresso/75 leading-relaxed max-w-xl">
              Each piece is a quiet promise: hypoallergenic, responsibly made,
              and crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-espresso link-underline"
            >
              Read Our Story
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
