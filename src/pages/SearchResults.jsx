import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase();

  const results = useMemo(() => {
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.tagline, p.category, p.short]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  return (
    <div className="bg-ivory pt-16 md:pt-20">
      <header className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="eyebrow">Search</p>
          <h1 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
            {results.length} {results.length === 1 ? "result" : "results"} for
            <span className="italic text-gold-deep"> “{searchParams.get("q")}”</span>
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        {results.length === 0 ? (
          <div className="flex flex-col items-center border border-dashed border-line px-8 py-24 text-center">
            <p className="font-serif text-2xl text-ink">Nothing found</p>
            <p className="mt-2 text-sm text-muted">
              Try “huggies”, “necklace”, or browse the full collection.
            </p>
            <Link to="/shop" className="btn-outline-light mt-8">
              View All Jewelry
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {results.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
