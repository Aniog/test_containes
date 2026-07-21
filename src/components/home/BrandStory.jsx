import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function BrandStory() {
  const sectionRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory py-20 md:py-28 lg:py-32"
      aria-labelledby="brand-story-title"
    >
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-champagne order-1">
            <img
              alt="A founder at her studio bench, soldering a piece of Velmora jewelry"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-body] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-4">
            <p className="eyebrow">Our story</p>
            <h2
              id="brand-story-title"
              className="heading-display text-3xl md:text-4xl lg:text-5xl mt-3 max-w-lg"
            >
              The quiet luxury of pieces that last.
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 font-sans text-base md:text-[17px] leading-relaxed text-ink-soft max-w-md"
            >
              Velmora began at a studio bench in Brooklyn, with a single
              question — why does fine jewelry feel unreachable, and why does
              everything else feel disposable? We started with the materials
              we trust: 18K gold-plated brass, handset crystals, sterling
              silver. Then we slowed down.
            </p>
            <p className="mt-4 font-sans text-base md:text-[17px] leading-relaxed text-ink-soft max-w-md">
              Every piece is designed in small batches, made to be worn daily,
              and finished by hand. The result is jewelry that feels like
              treasure — at a price you can actually give.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-sans text-[11px] md:text-xs uppercase tracking-widest2 text-espresso hover:text-gold-deep transition-colors duration-300"
            >
              Our story
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
