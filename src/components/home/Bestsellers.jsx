import React from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Most Loved"
          title="The Bestsellers"
          className="reveal"
        />
        <p className="reveal mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-inkSoft">
          The pieces our community reaches for again and again — worn daily,
          gifted often, treasured always.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <Button variant="outline" to="/shop">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  );
}
