import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Ear cuffs · Drops · Studs",
    href: "/shop?collection=earrings",
    query:
      "gold earrings collection styled on warm linen flatlay editorial jewelry photography",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants · Chains · Statements",
    href: "/shop?collection=necklaces",
    query:
      "gold necklaces collection styled on warm linen flatlay editorial jewelry photography",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "The everyday anchor",
    href: "/shop?collection=huggies",
    query:
      "gold huggie hoop earrings collection on warm linen flatlay editorial",
  },
];

function Tile({ tile }) {
  return (
    <Link
      to={tile.href}
      className="group relative block overflow-hidden bg-cocoa-soft aspect-[3/4]"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        data-strk-bg-id={`cat-tile-${tile.id}`}
        data-strk-bg={`[cat-tile-${tile.id}-label] [cat-tile-${tile.id}-sub]`}
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="900"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-ivory">
        <p className="text-[10px] uppercase tracking-[0.32em] text-gold-pale opacity-80 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {tile.sub}
        </p>
        <div className="mt-2 flex items-end justify-between">
          <h3
            id={`cat-tile-${tile.id}-label`}
            className="font-serif text-3xl sm:text-4xl leading-none"
          >
            {tile.label}
          </h3>
          <span
            className="w-9 h-9 rounded-full bg-ivory text-ink flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            aria-hidden="true"
          >
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </span>
        </div>
        <span id={`cat-tile-${tile.id}-sub`} className="sr-only">
          {tile.sub}
        </span>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  return (
    <section id="categories" className="bg-ivory">
      <div className="container-shell py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Shop by Category"
            title="Three ways to wear it."
            align="left"
          />
          <Link
            to="/shop"
            className="self-start md:self-end text-[12px] uppercase tracking-[0.22em] text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TILES.map((t) => (
            <Tile key={t.id} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
