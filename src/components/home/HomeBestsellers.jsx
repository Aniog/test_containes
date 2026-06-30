import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function HomeBestsellers() {
  // First 5 products are the bestseller lineup
  const bestsellers = PRODUCTS.slice(0, 5);
  return (
    <section className="container-editorial py-20 md:py-28">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Loved by you."
        align="between"
        action={{ to: "/shop", label: "View All" }}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
        {bestsellers.map((p, i) => (
          <div
            key={p.id}
            className="animate-fadeUp"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
