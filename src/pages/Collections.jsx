import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    description: "Pieces you'll forget you have on — until the light catches.",
    query: "velmora gold huggie earrings minimalist close up editorial",
    cta: "Shop edit",
    href: "/shop?category=huggies",
  },
  {
    id: "floral-archive",
    name: "The Floral Archive",
    description: "Hand-set crystals, drawn from nature. Romantic, never soft.",
    query: "velmora gold floral crystal necklace editorial fashion",
    cta: "Shop archive",
    href: "/shop?category=necklaces",
  },
  {
    id: "gifting-edit",
    name: "The Gifting Edit",
    description: "Keepsake boxes, hand-tied ribbons, pieces that mean something.",
    query: "velmora gold jewelry gift box velvet ribbon editorial",
    cta: "Shop gifting",
    href: "/shop?category=sets",
  },
];

export default function Collections() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <main ref={ref} className="bg-ivory pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="eyebrow mb-3">Collections</p>
          <h1
            id="collections-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso"
          >
            Curated edits
          </h1>
          <p
            id="collections-subtitle"
            className="mt-4 text-sm sm:text-base text-mocha"
          >
            Three edits, each one a different way of wearing our world. Begin
            with the one that feels most like you.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {COLLECTIONS.map((c, i) => (
            <article
              key={c.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <StrkImage
                  id={c.id}
                  query={`[${c.id}-name] [${c.id}-description] ${c.query}`}
                  ratio="3x2"
                  width={1200}
                  tone="dark"
                />
              </div>
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="eyebrow mb-4">Collection 0{i + 1}</p>
                <h2
                  id={`${c.id}-name`}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso"
                >
                  {c.name}
                </h2>
                <p
                  id={`${c.id}-description`}
                  className="mt-4 text-base sm:text-lg text-mocha leading-relaxed max-w-md"
                >
                  {c.description}
                </p>
                <Link
                  to={c.href}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-espresso link-underline"
                >
                  {c.cta}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
