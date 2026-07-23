import React from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-cream-50 py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-3">The Edit</p>
            <h2
              id="bestsellers-title"
              className="font-serif font-light text-ink-900 text-[36px] md:text-[56px] leading-[1.02]"
            >
              Our <span className="italic">bestsellers</span>
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-4 text-ink-700 text-base md:text-lg max-w-md font-light"
            >
              The five pieces our community keeps coming back to — worn alone,
              layered, and given.
            </p>
          </div>
          <Link
            to="/shop"
            className="link-underline text-[11px] font-medium uppercase tracking-btn self-start md:self-end"
          >
            Shop all pieces
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
