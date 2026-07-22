import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/StrkImage";
import { CATEGORIES } from "@/data/products";

const QUERIES = {
  earrings: "elegant gold earrings on dark neutral background, editorial jewelry photography",
  necklaces: "delicate gold necklaces on dark neutral background, editorial jewelry photography",
  huggies: "gold huggie hoop earrings close-up on dark neutral background, editorial jewelry photography",
};

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
          Shop by Category
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-cream md:text-5xl">
          Find Your <span className="italic text-gold-soft">Signature</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-14 md:gap-6">
        {CATEGORIES.map((category) => {
          const nameId = `cat-${category.id}-name`;
          const noteId = `cat-${category.id}-note`;
          return (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative block overflow-hidden rounded-sm border border-noir-line"
              aria-label={`Shop ${category.name}`}
            >
              <div className="aspect-[3/4] w-full">
                <StrkImage
                  imgId={category.imgId}
                  query={`[${noteId}] [${nameId}] ${QUERIES[category.id]}`}
                  ratio="3x4"
                  width={700}
                  alt={category.name}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent transition-opacity duration-500 group-hover:from-noir/90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
                <div>
                  <h3
                    id={nameId}
                    className="font-serif text-2xl font-medium uppercase tracking-[0.12em] text-cream"
                  >
                    {category.name}
                  </h3>
                  <p
                    id={noteId}
                    className="mt-1 max-h-0 overflow-hidden text-xs text-cream/85 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100"
                  >
                    {category.note}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full border border-cream/40 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
