import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings editorial dark background" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace pendant editorial" },
  { id: "huggies", label: "Huggies", query: "gold huggie hoop earrings close up" },
];

export default function CategoryTiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className="bg-brand-ivory px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className={cn(
            "mb-10 text-center",
            isVisible && "animate-fadeUp"
          )}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl text-brand-charcoal md:text-5xl">
            Find Your Finish
          </h2>
        </div>

        <div
          className={cn(
            "grid gap-4 md:grid-cols-3",
            isVisible && "animate-fadeUp"
          )}
          style={{ animationDelay: isVisible ? "0.15s" : "0s" }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-cream"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-label] ${category.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-warm-black/20 transition-colors duration-300 group-hover:bg-brand-warm-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${category.id}-label`}
                  className="text-center font-serif text-3xl text-brand-ivory md:text-4xl"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
