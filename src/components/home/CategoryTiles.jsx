import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function CategoryTiles() {
  const ref = useStrkImages([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Find Your Piece</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-[0.16em] text-cream"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-xs uppercase tracking-[0.18em] text-cream/75 mt-1.5">
                  {cat.tagline}
                </p>
                <span className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-cream border-b border-cream/50 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
