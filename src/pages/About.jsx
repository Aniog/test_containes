import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/StrkImage";

const VALUES = [
  {
    title: "Considered Materials",
    text: "Recycled brass cores, generous 18K gold plating, hand-set stones. Every piece nickel-free and hypoallergenic.",
  },
  {
    title: "Made for Daily Life",
    text: "We design for the pieces you never take off — waterproof-adjacent, sweat-friendly, and comfortable enough to sleep in.",
  },
  {
    title: "Honest Pricing",
    text: "By selling directly to you, we keep atelier quality between $30 and $120 — no middlemen, no markup theatre.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="border-b border-noir-line bg-noir-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">Our Story</p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-4xl font-medium leading-tight text-cream md:text-6xl"
          >
            Jewelry for the <span className="italic text-gold-soft">everyday heirloom</span>
          </h1>
          <p id="about-subtitle" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand md:text-base">
            Velmora Fine Jewelry — demi-fine gold pieces crafted in a small atelier, made to be
            worn daily and treasured for years.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div className="overflow-hidden rounded-sm border border-noir-line">
          <div className="aspect-[4/3] w-full">
            <StrkImage
              imgId="about-atelier-img-x1y2z3"
              query="[about-subtitle] [about-title] warm atelier workbench with gold jewelry tools, editorial photography"
              ratio="4x3"
              width={1000}
              alt="Inside the Velmora atelier"
            />
          </div>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-sand md:text-base">
          <p>
            Velmora began in 2019 at a single jeweler's bench, with a frustration we kept hearing
            from friends: fine jewelry felt out of reach, and fast-fashion pieces didn't last a
            season. We believed there was a middle path.
          </p>
          <p>
            So we built one. Each Velmora piece starts as a sketch in our atelier, is cast in
            recycled brass, and finished in a thick layer of 18K gold — the same warmth and glow
            as fine jewelry, at a price that invites everyday wear.
          </p>
          <p>
            Today, thousands of women wear Velmora through morning meetings, weekend markets, and
            midnight celebrations. That's exactly where we want to be.
          </p>
        </div>
      </section>

      <section className="border-y border-noir-line bg-noir-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-center font-serif text-3xl font-medium text-cream md:text-5xl">
            What we <span className="italic text-gold-soft">stand for</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="rounded-sm border border-noir-line bg-noir p-7 transition-colors duration-300 hover:border-gold/40 md:p-8"
              >
                <p className="font-serif text-4xl italic text-gold/60">0{index + 1}</p>
                <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-luxe text-cream">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-serif text-3xl font-medium text-cream md:text-5xl">
          Ready to find your <span className="italic text-gold-soft">everyday heirloom?</span>
        </h2>
        <Link
          to="/shop"
          className="group mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
        >
          Shop the Collection
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
