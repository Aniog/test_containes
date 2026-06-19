import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  {
    slug: "earrings",
    label: "Earrings",
    eyebrow: "01",
    blurb: "Cuffs, drops, studs.",
    imgId: "cat-earrings-tile",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    eyebrow: "02",
    blurb: "Pendants, chains, layers.",
    imgId: "cat-necklaces-tile",
  },
  {
    slug: "huggies",
    label: "Huggies",
    eyebrow: "03",
    blurb: "Everyday essentials.",
    imgId: "cat-huggies-tile",
  },
];

export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      className="bg-cream py-20 md:py-28"
      aria-labelledby="categories-title"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-muted mb-4">Shop by category</p>
            <h2
              id="categories-title"
              className="text-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] text-espresso"
            >
              Find <span className="text-display-italic">your</span> Piece.
            </h2>
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        >
          {TILES.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-sand shadow-soft"
              aria-label={`Shop ${tile.label}`}
            >
              <img
                alt={`${tile.label} collection`}
                loading="lazy"
                data-strk-img-id={tile.imgId}
                data-strk-img={`velmora fine jewelry ${tile.label} editorial flat lay warm lit close-up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
              />
              {/* Gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-espresso/15 transition-opacity duration-500 group-hover:from-espresso/85" />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <p className="eyebrow text-gold-light/85 mb-2">
                    {tile.eyebrow} &middot; {tile.blurb}
                  </p>
                  <h3 className="font-serif text-[2rem] md:text-[2.5rem] text-ivory leading-[1.05]">
                    {tile.label}
                  </h3>
                </div>
                <span
                  className="w-11 h-11 rounded-full bg-ivory/15 backdrop-blur-sm border border-ivory/40 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <ArrowRight
                    className="w-4 h-4 text-ivory"
                    strokeWidth={1.4}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}