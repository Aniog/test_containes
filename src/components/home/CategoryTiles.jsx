import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="Shop by category" title="Find your forever piece" align="center" className="mb-14">
          Three quietly considered edits — earrings, necklaces, and the everyday
          huggie that never comes off.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-bone"
            >
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] demi-fine gold jewelry editorial close-up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/70" />

              <div className="absolute inset-x-6 bottom-7 text-cream">
                <p className="font-sans uppercase tracking-widest2 text-[10px] text-cream/75 mb-2">
                  {cat.blurb}
                </p>
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl leading-tight"
                >
                  {cat.label}
                </h3>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 border-b border-cream/60 pb-1 group-hover:border-gilt group-hover:text-gilt transition-all duration-300">
                  Shop {cat.label} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
