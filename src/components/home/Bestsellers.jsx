import React from "react";
import { Link } from "react-router-dom";
import { getBestsellers } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const products = getBestsellers(5);
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline text-ink self-start md:self-end"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
