import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Drops, studs & filigree",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants & fine chains",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "Everyday hoops & cuffs",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Curated for You
          </p>
          <h2
            id="categories-title"
            className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl"
          >
            Shop by Category
          </h2>
          <p
            id="categories-sub"
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bronze"
          >
            Three collections of gold demi-fine jewelry, each designed to be
            lived in.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block overflow-hidden bg-espresso"
              >
                <div className="aspect-[3/4]">
                  <img
                    data-strk-img-id={`cat-${tile.id}`}
                    data-strk-img={`[cat-${tile.id}-label] [cat-${tile.id}-blurb] [categories-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src={PLACEHOLDER_SRC}
                    alt={`${tile.label} — gold jewelry`}
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent transition-opacity duration-500" />

                {/* Always-visible label on mobile, hover-reveal on desktop */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:translate-y-3 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div>
                    <h3
                      id={`cat-${tile.id}-label`}
                      className="font-serif text-2xl font-medium uppercase tracking-[0.15em] text-ivory md:text-3xl"
                    >
                      {tile.label}
                    </h3>
                    <p
                      id={`cat-${tile.id}-blurb`}
                      className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ivory/70"
                    >
                      {tile.blurb}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center border border-gold-soft text-gold-soft transition-all duration-300 group-hover:bg-gold-soft group-hover:text-ink">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Desktop resting-state label */}
                <p className="pointer-events-none absolute bottom-6 left-6 hidden font-serif text-2xl font-medium uppercase tracking-[0.15em] text-ivory transition-opacity duration-500 group-hover:opacity-0 md:block">
                  {tile.label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
