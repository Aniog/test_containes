import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/hooks/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStory() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="bg-cream">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-20 md:py-28">
          <div className="order-2 md:order-1 relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              alt="The Velmora atelier — hand-finishing demi-fine gold jewelry"
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-quote] [brand-story-title] [brand-story-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src={PLACEHOLDER}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2 max-w-lg">
            <p id="brand-story-eyebrow" className="eyebrow">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-[-0.01em] text-balance"
            >
              Designed to outlast the season.
            </h2>
            <p
              id="brand-story-quote"
              className="mt-7 text-base md:text-lg text-ink-soft leading-relaxed"
            >
              Velmora began with a single question: <em className="font-serif">why should choosing a piece of jewelry feel temporary?</em>{" "}
              We work with a small atelier to plate every piece in 18K gold over a hypoallergenic core,
              then finish it by hand — so the warmth you fall in love with on day one is still there on
              day five hundred. Quiet luxury, made to be lived in.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink hover:text-gold-deep transition-colors"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <span className="text-[11px] uppercase tracking-[0.22em] text-taupe">
                Est. 2021 · Small batch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
