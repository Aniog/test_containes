import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-cream-soft py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
          <img
            alt="Velmora atelier"
            data-strk-img-id="brand-story-img-3f1a"
            data-strk-img="[brand-story-heading]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/15 to-transparent" />
        </div>

        <div className="max-w-lg">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            Our Story
          </p>
          <h2
            id="brand-story-heading"
            className="mt-4 font-serif text-4xl font-light leading-tight text-espresso md:text-5xl lg:text-6xl"
          >
            Quiet pieces, made for a loud life.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/80">
            Velmora began with a simple frustration: jewelry was either
            disposable or untouchable. We make a third option — demi-fine
            pieces, plated in 18K gold over solid brass, designed in our
            Lisbon studio and built to be lived in.
          </p>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Each piece is editorial in feel, honest in price, and quietly
            confident — like the women who wear them.
          </p>
          <Link
            to="#"
            className="mt-9 inline-block border-b border-espresso pb-1 text-[11px] uppercase tracking-[0.28em] text-espresso transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
