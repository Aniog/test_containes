import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    query: "gold earrings editorial jewelry",
    description: "Studs, cuffs, drops",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "gold necklace pendant editorial jewelry",
    description: "Pendants, chains, lockets",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie hoop earrings editorial",
    description: "The everyday staple",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="editorial-eyebrow mb-3">Shop by category</p>
          <h2 className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-cocoa">
            Find your forever piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((tile) => {
            const labelId = `tile-${tile.id}-label`;
            const descId = `tile-${tile.id}-desc`;
            return (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.id}`}
                className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cocoa"
              >
                <img
                  alt={tile.label}
                  data-strk-img-id={`tile-${tile.id}-img`}
                  data-strk-img={`[${descId}] [${labelId}] gold jewelry on warm silk editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-cocoa/10 to-transparent transition-opacity duration-500" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                  <div>
                    <p id={labelId} className="serif-display text-3xl md:text-4xl text-ivory-light">
                      {tile.label}
                    </p>
                    <p id={descId} className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory/70">
                      {tile.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "h-10 w-10 rounded-full border border-ivory-light/50 flex items-center justify-center text-ivory-light transition-all duration-500 ease-editorial",
                      "group-hover:bg-ivory-light group-hover:text-cocoa group-hover:border-ivory-light group-hover:rotate-[-45deg]"
                    )}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
