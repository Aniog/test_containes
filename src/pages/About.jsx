import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-ivory">
      {/* Hero */}
      <section className="container-page pt-32 sm:pt-40 pb-16 sm:pb-24 text-center max-w-3xl mx-auto">
        <span className="eyebrow">Our story</span>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light mt-4 text-sable leading-[1.05]">
          Heirlooms,{" "}
          <span className="italic text-gold">quietly</span> made.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-sable/80 font-sans font-light leading-relaxed">
          Velmora began at a kitchen table in Lisbon, with a single gold ear cuff
          and a belief that demi-fine jewelry should feel considered — never
          overdone.
        </p>
      </section>

      <section className="container-page">
        <div className="aspect-[16/9] sm:aspect-[16/8] bg-sable overflow-hidden">
          <img
            alt="A close-up of gold jewelry on warm linen"
            data-strk-img-id="about-hero"
            data-strk-img="[about-title] [about-sub] gold jewelry on warm linen flat lay editorial"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            {
              t: "Made by hand",
              d: "Every piece is hand-finished in small batches by a small team of jewelers we know by name.",
            },
            {
              t: "Made to last",
              d: "18K gold plating over a hypoallergenic brass core. Designed to wear in, not wear out.",
            },
            {
              t: "Made to give",
              d: "Each order arrives in our signature ivory gift box. Gifting is in our nature.",
            },
          ].map((p) => (
            <div key={p.t} className="border-t border-sable/15 pt-8">
              <h2 className="font-serif text-3xl font-light text-sable">{p.t}</h2>
              <p className="mt-4 text-sable/75 font-sans text-sm sm:text-base font-light leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-200">
        <div className="container-page py-20 sm:py-28 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-sable">
            Step into the collection
          </h2>
          <p className="mt-4 text-taupe font-sans font-light">
            Begin with a piece you can wear every day.
          </p>
          <Link
            to="/shop"
            className="btn-primary mt-8 inline-flex group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
