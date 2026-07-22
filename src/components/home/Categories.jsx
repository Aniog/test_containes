import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkMedia";
import SectionHeading from "@/components/ui/SectionHeading";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    query: "elegant gold earrings, luxury jewelry on neutral background",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "elegant gold necklace, luxury jewelry on neutral background",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie hoop earrings, luxury jewelry close up",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Explore"
          title="Shop by Category"
          className="reveal"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {TILES.map((tile, i) => {
            const labelId = `cat-${tile.id}-label`;
            return (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.label}`}
                className="group reveal relative block overflow-hidden rounded-sm"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
                  <StrkImage
                    imgId={`cat-tile-${tile.id}`}
                    query={`[${labelId}] ${tile.query}`}
                    ratio="3x4"
                    width={700}
                    alt={tile.label}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/40" />
                  <div className="absolute inset-0 flex items-end justify-between p-6">
                    <span
                      id={labelId}
                      className="font-display text-2xl font-semibold uppercase tracking-luxe text-cream md:text-3xl"
                    >
                      {tile.label}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/60 text-cream opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
