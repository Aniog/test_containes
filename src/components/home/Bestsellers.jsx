import React from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function Bestsellers() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The Icons</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link to="/shop" className="link-underline">
            View All Jewelry
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
