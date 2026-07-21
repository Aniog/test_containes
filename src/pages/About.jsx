import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const PILLARS = [
  {
    id: "atelier",
    title: "Made by hand",
    body: "Every Velmora piece is finished in our Lisbon atelier by a small team of jewelers. Casting, plating, setting and polish — under one roof.",
  },
  {
    id: "materials",
    title: "Materials we'd wear",
    body: "18K gold plating over a hypoallergenic brass core. Nickel-free. Tested for daily wear — including the moments you forget to take it off.",
  },
  {
    id: "sustainability",
    title: "Made to last",
    body: "We design pieces to be worn for years, not seasons. Recyclable packaging, no excess, and a repair program that brings tired pieces back to life.",
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <main ref={ref} className="bg-ivory pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Our Story</p>
          <h1
            id="about-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-[1.05]"
          >
            Heirlooms, made for <em className="italic font-light">now</em>.
          </h1>
          <p
            id="about-lede"
            className="mt-6 text-base sm:text-lg text-espresso/75 leading-relaxed"
          >
            Velmora began in a small atelier in Lisbon with a single,
            stubborn question: why does fine jewelry live in a box?
          </p>
          <p className="mt-4 text-base sm:text-lg text-espresso/75 leading-relaxed">
            We make demi-fine pieces to be worn every day. Hand-finished in
            18K gold plating. Hypoallergenic. Designed to outlast trends,
            seasons and the inevitable impulse to take them off.
          </p>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <StrkImage
              id="about-image-1"
              query="[about-title] [about-lede] velmora atelier goldsmith hands working jewelry"
              ratio="4x3"
              width={1200}
              tone="light"
              monogram="V"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso">
              The atelier
            </h2>
            <p className="mt-4 text-espresso/75 leading-relaxed">
              A short walk from the Tagus, our atelier is small by design.
              Every piece is hand-finished, inspected, and packed by the same
              hands that made it. We'd like to keep it that way.
            </p>
          </div>
        </div>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((p) => (
            <article key={p.id} className="border-t border-espresso/15 pt-6">
              <p className="eyebrow mb-3 text-gold">—</p>
              <h3 className="font-serif text-2xl text-espresso">{p.title}</h3>
              <p className="mt-3 text-sm text-espresso/75 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 sm:mt-28 text-center">
          <p className="eyebrow mb-3">Begin</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso mb-6">
            Find a piece to wear today
          </h2>
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </main>
  );
}
