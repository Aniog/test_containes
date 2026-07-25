import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    note: "Drops, cuffs & statements",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    note: "Pendants & layering chains",
  },
  {
    id: "huggies",
    label: "Huggies",
    note: "Everyday hoops, perfected",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Find your <em className="italic">signature</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.label}`}
                className="group relative block overflow-hidden bg-ink"
                aria-label={`Shop ${tile.label}`}
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5]">
                  <img
                    data-strk-img-id={`cat-${tile.id}-9c3b7f`}
                    data-strk-img={`[cat-${tile.id}-note] [cat-${tile.id}-label] gold jewelry elegant editorial photography`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${tile.label} collection`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.05] group-hover:opacity-70"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span
                    id={`cat-${tile.id}-note`}
                    className="absolute left-5 top-5 max-w-[70%] text-[11px] uppercase tracking-[0.2em] text-cream/0 transition-all duration-500 group-hover:text-cream/80"
                  >
                    {tile.note}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 md:p-6">
                    <span
                      id={`cat-${tile.id}-label`}
                      className="font-serif text-3xl font-medium text-cream md:text-4xl"
                    >
                      {tile.label}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-500 group-hover:border-gold group-hover:bg-gold">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
