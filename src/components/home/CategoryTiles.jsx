import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    note: "Cuffs, drops & statement studs in warm gold",
    imgId: "cat-tile-earrings-g1",
    labelId: "cat-label-earrings",
    noteId: "cat-note-earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    note: "Fine chains & pendants made for layering",
    imgId: "cat-tile-necklaces-g2",
    labelId: "cat-label-necklaces",
    noteId: "cat-note-necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    note: "The everyday hoop, perfected",
    imgId: "cat-tile-huggies-g3",
    labelId: "cat-label-huggies",
    noteId: "cat-note-huggies",
  },
];

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            Curated Collections
          </p>
          <h2
            id="categories-title"
            className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl"
          >
            Shop by Category
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block overflow-hidden rounded-sm bg-ink"
                aria-label={`Shop ${tile.label}`}
              >
                <div className="aspect-[3/4] w-full md:aspect-[4/5]">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    data-strk-bg-id={tile.imgId}
                    data-strk-bg={`[${tile.noteId}] [${tile.labelId}] [categories-title]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p id={tile.noteId} className="hidden">
                      {tile.note}
                    </p>
                    <h3
                      id={tile.labelId}
                      className="font-serif text-2xl font-light uppercase tracking-[0.14em] text-cream md:text-3xl"
                    >
                      {tile.label}
                    </h3>
                    <p className="mt-1.5 max-h-0 overflow-hidden text-xs text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                      {tile.note}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
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
