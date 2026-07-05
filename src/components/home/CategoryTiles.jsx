import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  CategoryEarringsArt,
  CategoryNecklacesArt,
  CategoryHuggiesArt,
} from "@/components/jewelry-illustrations/JewelryArt";

const TILES = [
  {
    label: "Earrings",
    to: "/shop?category=earrings",
    Art: CategoryEarringsArt,
    tagline: "Studs · Drops · Cuffs",
  },
  {
    label: "Necklaces",
    to: "/shop?category=necklaces",
    Art: CategoryNecklacesArt,
    tagline: "Pendants · Chains · Layered",
  },
  {
    label: "Huggies",
    to: "/shop?category=huggies",
    Art: CategoryHuggiesArt,
    tagline: "The perfect gold hoop",
  },
];

const CategoryTiles = () => {
  return (
    <section className="container-velmora py-20 md:py-28">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Shop by Category</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            The <em className="not-italic text-accent">edit</em>
          </h2>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {TILES.map((tile) => (
          <Link
            key={tile.label}
            to={tile.to}
            className="group relative block aspect-[3/4] overflow-hidden bg-muted"
          >
            <tile.Art className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-widest2 text-cream/70">
                {tile.tagline}
              </p>
              <div className="mt-2 flex items-end justify-between">
                <h3 className="font-serif text-3xl text-cream md:text-4xl">
                  {tile.label}
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-cream/50 text-cream transition-colors group-hover:bg-cream group-hover:text-ink">
                  <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </div>
            {/* Hover outline */}
            <div className="pointer-events-none absolute inset-3 border border-cream/0 transition-colors duration-500 group-hover:border-cream/40" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
