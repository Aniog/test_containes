import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useReveal } from "@/lib/useReveal.js";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Studs, drops, cuffs",
    imgId: "tile-earrings-77a1",
    titleId: "tile-earrings-title",
    subId: "tile-earrings-sub",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants & chains",
    imgId: "tile-necklaces-91bc",
    titleId: "tile-necklaces-title",
    subId: "tile-necklaces-sub",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "Everyday hoops",
    imgId: "tile-huggies-2e3d",
    titleId: "tile-huggies-title",
    subId: "tile-huggies-sub",
  },
];

export default function CategoryTiles() {
  const ref = useReveal();
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, scrollerRef.current);
  }, []);

  return (
    <section className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal flex flex-col items-center text-center mb-12">
          <p className="eyebrow text-muted-500">Shop By Category</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800">
            Find Your Forever
          </h2>
        </div>

        <div ref={scrollerRef} className="md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
          {/* Mobile: horizontal scroll */}
          <ul className="flex md:hidden gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 snap-x snap-mandatory pb-2">
            {tiles.map((t) => (
              <li key={t.id} className="snap-start flex-none w-[75vw] max-w-[340px]">
                <Tile tile={t} />
              </li>
            ))}
          </ul>
          {/* Desktop: 3-col grid */}
          <ul className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6">
            {tiles.map((t) => (
              <li key={t.id}>
                <Tile tile={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Tile({ tile }) {
  return (
    <Link
      to={`/shop?category=${tile.id}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-ink-800"
      aria-label={`Shop ${tile.label}`}
    >
      <img
        alt={tile.label}
        data-strk-img-id={tile.imgId}
        data-strk-img={`[${tile.subId}] [${tile.titleId}]`}
        data-strk-img-ratio="4x5"
        data-strk-img-width="900"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,11,8,0.15) 0%, rgba(15,11,8,0.1) 50%, rgba(15,11,8,0.55) 100%)",
        }}
      />
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-cream-100">
        <h3
          id={tile.titleId}
          className="font-serif text-3xl sm:text-4xl tracking-wide"
        >
          {tile.label}
        </h3>
        <p
          id={tile.subId}
          className="mt-1 text-[11px] tracking-[0.28em] uppercase text-cream-200/75"
        >
          {tile.sub}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-cream-100">
          Shop
          <ArrowUpRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </Link>
  );
}
