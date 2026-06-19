import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/product/ProductCard";
import { getBestsellers } from "@/data/products";

export function Bestsellers() {
  const items = getBestsellers(5);

  return (
    <section
      id="bestsellers"
      className="bg-cream py-20 md:py-28 lg:py-32"
      aria-labelledby="bestsellers-title"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <SectionTitle
            eyebrow="Most loved"
            title="Our Bestsellers"
            italicWord="Bestsellers"
          />
          <Link
            to="/shop"
            className="mt-7 md:mt-9 inline-flex items-center gap-2 eyebrow text-ink hover:text-gold-deep transition-colors"
          >
            View all
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-14">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}