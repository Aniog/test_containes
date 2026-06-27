import React from "react";
import { Link } from "react-router-dom";
import { PLACEHOLDER_SVG } from "@/lib/utils";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-bone">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream order-2 lg:order-1">
            <img
              alt="Velmora atelier"
              data-strk-img-id="brand-story-atelier-3c8e"
              data-strk-img="[brand-story-desc] [brand-story-title] hands jewelry making atelier warm light editorial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={PLACEHOLDER_SVG}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2 lg:pl-8">
            <span className="text-[11px] uppercase tracking-[0.32em] text-velmora-mocha">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl text-velmora-espresso font-light leading-[1.1]"
            >
              Heirlooms,
              <br />
              <em className="italic">made for now.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="text-[15px] md:text-[16px] text-velmora-ink leading-relaxed max-w-lg"
            >
              Velmora began with a single thought: that the small, quiet pieces
              we wear every day deserve the same care as the ones we save for
              special occasions. Each piece is hand-finished in our atelier from
              recycled brass and 18k gold, designed to outlive trends and
              outlast seasons.
            </p>
            <p className="text-[15px] text-velmora-mocha leading-relaxed max-w-lg italic font-serif">
              "Jewelry should feel like a memory, not a moment."
              <span className="block mt-2 not-italic font-sans text-[11px] uppercase tracking-[0.24em] text-velmora-stone">
                — Eleanor V., Founder
              </span>
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="text-[11px] uppercase tracking-[0.28em] text-velmora-espresso border-b border-velmora-espresso pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
