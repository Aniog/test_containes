import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import { CATEGORIES } from "@/data/products";
import { PLACEHOLDER_SVG } from "@/lib/utils";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            align="center"
            eyebrow="The Edit"
            title="Shop by Category"
            description="Three families of pieces, each made to be layered, gifted, and lived in."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-bone block"
            >
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold ${cat.label.toLowerCase()} editorial warm light`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={PLACEHOLDER_SVG}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Soft constant gradient for label legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/65 via-velmora-espresso/10 to-transparent transition-opacity duration-500 group-hover:from-velmora-espresso/80" />

              {/* Always visible label */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-2">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl text-velmora-cream font-light"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="text-[13px] text-velmora-cream/85 max-w-[80%]"
                >
                  {cat.description}
                </p>
                <span className="mt-3 text-[11px] uppercase tracking-[0.28em] text-velmora-cream inline-flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Shop {cat.label} <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
