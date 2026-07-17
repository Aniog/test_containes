import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getBestsellers } from "@/data/products";

export default function Bestsellers() {
  const items = getBestsellers();
  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-title"
      className="py-20 md:py-28 bg-ivory"
    >
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="kicker mb-3">Bestsellers</p>
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-ink text-balance"
          >
            Loved by the Velmora circle.
          </h2>
          <p className="mt-4 text-sm text-ink-muted max-w-md mx-auto text-pretty">
            The pieces our community reaches for again and again —
            hand-finished, hypoallergenic, and made to last.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
