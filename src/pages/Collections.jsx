import React, { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Collections is a curated index page that links into /shop with a category preset.
const COLLECTIONS = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "From quiet huggies to filigree drops — the everyday earring edit.",
    imageId: "collection-earrings-1b7c4a",
    query: "[collection-card-label-earrings] gold earrings editorial model close up warm",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants and chains, designed to layer — or to wear alone.",
    imageId: "collection-necklaces-9d2e6f",
    query: "[collection-card-label-necklaces] gold necklace editorial portrait model warm",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "The pieces you forget you're wearing — until someone asks.",
    imageId: "collection-huggies-3a5b8c",
    query: "[collection-card-label-huggies] gold huggie earrings editorial close up",
  },
  {
    id: "gifts",
    label: "Gifts",
    blurb: "Keepsake-boxed sets, ready to give. No wrapping required.",
    imageId: "collection-gifts-7f1d2e",
    query: "[collection-card-label-gifts] gold jewelry gift set velvet box editorial",
  },
];

export default function Collections() {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-editorial-alt pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-4">Curated</p>
          <h1 className="font-display text-cocoa-900 text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.01em]">
            <em className="italic font-normal">Collections</em>
          </h1>
          <p className="mt-5 text-cocoa-700 text-[15px] max-w-xl mx-auto leading-relaxed">
            Four edits, designed to be lived in. Start with the one that calls.
          </p>
        </div>
      </section>

      <section className="section bg-editorial">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {COLLECTIONS.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSearchParams({ cat: c.id === "gifts" ? "" : c.id });
                  navigate(`/shop?cat=${c.id === "gifts" ? "" : c.id}`);
                }}
                className={`group relative block overflow-hidden bg-ivory-100 text-left ${
                  idx === 0 ? "md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <img
                  alt={c.label}
                  data-strk-img-id={c.imageId}
                  data-strk-img={c.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(31,26,23,0) 30%, rgba(31,26,23,0.7) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <h3
                    id={`collection-card-label-${c.id}`}
                    className="font-display text-ivory-50 text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] uppercase font-medium mb-2"
                  >
                    {c.label}
                  </h3>
                  <p className="text-ivory-50/85 text-sm md:text-[15px] max-w-sm leading-relaxed mb-4">
                    {c.blurb}
                  </p>
                  <span className="text-[11px] tracking-button uppercase text-ivory-50/90 group-hover:text-champagne-300 transition-colors">
                    Shop the edit →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
