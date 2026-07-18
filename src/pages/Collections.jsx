import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const collections = [
  {
    id: "summer-edit",
    title: "The Summer Edit",
    description: "Light, layered, sun-warmed. New for the season.",
    count: 12,
    search: "summer gold jewelry collection editorial flatlay on warm linen",
  },
  {
    id: "everyday-heirlooms",
    title: "Everyday Heirlooms",
    description: "Pieces designed to live in — every day, for years.",
    count: 18,
    search: "everyday gold jewelry heirloom collection editorial flatlay",
  },
  {
    id: "gifts-under-100",
    title: "Gifts Under $100",
    description: "Beautifully packaged, made to be remembered.",
    count: 9,
    search: "gold jewelry gift collection cream and gold boxes editorial",
  },
  {
    id: "the-layering-edit",
    title: "The Layering Edit",
    description: "Necklaces, chains, and huggies that play well together.",
    count: 14,
    search: "layered gold necklaces and earrings editorial flatlay",
  },
];

export default function Collections() {
  const ref = useRef(null);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} className="bg-canvas">
      <section className="pt-28 md:pt-36 pb-10 md:pb-16">
        <div className="max-w-editorial mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Curated by our atelier
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso tracking-tight">
            Collections
          </h1>
          <p className="mt-4 text-taupe max-w-xl mx-auto text-sm md:text-base">
            A small, considered edit — each piece made to layer, gift, and last.
          </p>
        </div>
      </section>

      <section className="max-w-editorial mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((c) => (
            <Link
              key={c.id}
              to={`/shop?collection=${c.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-surface"
            >
              <img
                alt={c.title}
                data-strk-img-id={`coll-${c.id}`}
                data-strk-img={`[coll-desc-${c.id}] [coll-title-${c.id}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h2
                  id={`coll-title-${c.id}`}
                  className="font-serif text-canvas text-3xl md:text-4xl tracking-tight"
                >
                  {c.title}
                </h2>
                <p
                  id={`coll-desc-${c.id}`}
                  className="text-canvas/80 text-sm mt-2 max-w-sm"
                >
                  {c.description}
                </p>
                <div className="mt-5 flex items-center gap-3 text-canvas text-[11px] uppercase tracking-widest2">
                  <span className="border-b border-canvas/70 pb-1 group-hover:border-gold-soft group-hover:text-gold-soft transition-colors">
                    Shop the edit
                  </span>
                  <span>·</span>
                  <span className="text-canvas/70">{c.count} pieces</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
