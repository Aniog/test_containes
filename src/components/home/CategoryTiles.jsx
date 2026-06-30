import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/products";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Browse by
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
            Category
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-primary/50" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl font-medium uppercase tracking-[0.12em] md:text-3xl">
                  {cat.name}
                </h3>
                <p className="mt-2 font-sans text-xs text-white/60">
                  {cat.count}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.1em]">
                    Shop Now
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}