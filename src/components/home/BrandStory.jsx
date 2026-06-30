import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-50 border-y border-hairline"
      aria-labelledby="story-heading"
    >
      <div className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
              <img
                alt="A jeweler at the bench, polishing a finished piece"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-body] [story-heading] [story-eyebrow]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Soft warm overlay to unify imagery */}
              <div className="absolute inset-0 bg-gradient-to-tr from-espresso-900/15 to-transparent" aria-hidden="true" />
            </div>
            {/* Caption */}
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-espresso-500">
              The Velmora studio · Porto
            </p>
          </Reveal>

          {/* Text */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <p id="story-eyebrow" className="eyebrow">Our story</p>
            <h2
              id="story-heading"
              className="h-display mt-3 text-display-md text-espresso-900"
            >
              Made slowly.
              <br />
              <span className="italic text-gold-600">Worn daily.</span>
            </h2>
            <p
              id="story-body"
              className="mt-6 text-espresso-700 text-[16px] leading-relaxed max-w-xl"
            >
              Velmora began with a question: what if demi-fine jewelry could
              feel like an heirloom the moment you put it on? We work in small
              batches with family-run workshops in Porto and Athens — 18K gold
              plating, hypoallergenic bases, and the kind of finish you can
              feel in your hand.
            </p>
            <p className="mt-4 text-espresso-700 text-[16px] leading-relaxed max-w-xl">
              No loud logos. No fast-fashion cycles. Just a quiet rotation of
              pieces that get better with wear.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
              <Link to="/about" className="link-underline">
                Read our story
              </Link>
              <span className="text-[11px] uppercase tracking-[0.28em] text-espresso-500">
                Est. 2021 · Woman-founded
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
