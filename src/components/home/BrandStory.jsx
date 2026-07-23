import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="our-story"
      className="bg-bone-50 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] image-placeholder overflow-hidden reveal order-1">
            <img
              alt="A founder shaping a piece of Velmora jewelry at the bench"
              data-strk-img-id="brand-story-bench-2d3e"
              data-strk-img="[story-text] [story-title] founder shaping demi-fine jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>

          {/* Copy */}
          <div className="reveal order-2">
            <p
              id="story-eyebrow"
              className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55"
            >
              Our Story
            </p>
            <h2
              id="story-title"
              className="display-serif mt-3 text-3xl sm:text-4xl lg:text-5xl"
            >
              Made slowly.<br />Worn for years.
            </h2>
            <p
              id="story-text"
              className="mt-6 text-base sm:text-[17px] leading-[1.75] text-espresso/75 max-w-lg"
            >
              Velmora began at a single workbench in Brooklyn — a question
              of why demi-fine had to feel disposable. We design in small
              batches, hand-finish every piece, and plate in real 18K gold
              over recycled brass. The result: jewelry that looks and feels
              like an heirloom, at a price you can actually gift.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 max-w-md text-sm text-espresso/70">
              <li className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-espresso">18K</span>
                <span className="text-[11px] uppercase tracking-widest2">Real gold plating</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-espresso">7</span>
                <span className="text-[11px] uppercase tracking-widest2">Day bench finish</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-espresso">∞</span>
                <span className="text-[11px] uppercase tracking-widest2">Wear-it-everyday</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-espresso">1%</span>
                <span className="text-[11px] uppercase tracking-widest2">To women's causes</span>
              </li>
            </ul>

            <Link
              to="/about"
              className="link-underline inline-flex items-center gap-2 mt-10 text-[11px] uppercase tracking-widest2"
            >
              Read our story
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
