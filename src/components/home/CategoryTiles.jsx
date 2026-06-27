import * as React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES_TILE } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function CategoryTiles() {
  const headingRef = useReveal();
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headingRef} className="reveal text-center">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
            The Catalog
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES_TILE.map((c) => (
            <CategoryTile key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group block relative overflow-hidden bg-cream aspect-[4/5]"
    >
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        data-strk-img-id={`category-${category.id}`}
        data-strk-img={category.query}
        data-strk-img-ratio="4x5"
        data-strk-img-width="900"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {/* Default state: soft warm wash + small label */}
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/45 via-cocoa/0 to-cocoa/0" />
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 flex items-end justify-between">
        <span className="font-serif text-2xl md:text-3xl text-bone">
          {category.label}
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-eyebrow font-medium text-bone",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "translate-y-1 group-hover:translate-y-0 transition"
          )}
        >
          Shop →
        </span>
      </div>
    </Link>
  );
}
