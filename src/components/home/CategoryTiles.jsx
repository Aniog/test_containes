import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    id: "earrings",
    title: "Earrings",
    blurb: "From huggies to drops",
    to: "/shop?category=earrings",
    img: "earrings",
    titleId: "cat-ears-title",
    blurbId: "cat-ears-blurb",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    blurb: "Whisper-fine chains",
    to: "/shop?category=necklaces",
    img: "necklace",
    titleId: "cat-neck-title",
    blurbId: "cat-neck-blurb",
  },
  {
    id: "huggies",
    title: "Huggies",
    blurb: "Everyday essentials",
    to: "/shop?category=huggies",
    img: "huggies",
    titleId: "cat-huggies-title",
    blurbId: "cat-huggies-blurb",
  },
];

export default function CategoryTiles() {
  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-ivory-100"
      aria-labelledby="cat-heading"
    >
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <p className="eyebrow text-taupe-500">Shop by category</p>
          <h2
            id="cat-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-espresso"
          >
            Find your everyday.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-espresso"
            >
              <img
                alt={tile.title}
                data-strk-img-id={`cat-${tile.id}-tile`}
                data-strk-img={`[${tile.blurbId}] [${tile.titleId}] [velmora-tagline]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-espresso/0 via-espresso/0 to-espresso/70" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between">
                <div>
                  <h3
                    id={tile.titleId}
                    className="font-serif text-ivory-50 text-2xl sm:text-3xl"
                  >
                    {tile.title}
                  </h3>
                  <p
                    id={tile.blurbId}
                    className="mt-1 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest2 text-ivory-100/80"
                  >
                    {tile.blurb}
                  </p>
                </div>
                <span className="hidden sm:inline-flex w-10 h-10 items-center justify-center bg-ivory-50/95 text-espresso rounded-full transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>

              {/* Hover label reveal on desktop */}
              <div className="hidden md:flex absolute inset-0 items-end p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="ml-auto inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest2 text-ivory-50">
                  Shop now
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
