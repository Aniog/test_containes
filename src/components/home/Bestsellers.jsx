import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            align="left"
            eyebrow="The Most Loved"
            title="Bestsellers"
            description="The pieces our community returns to season after season — quiet, considered, and worn every day."
            className="!max-w-xl"
          />
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.28em] text-velmora-espresso border-b border-velmora-espresso pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-6 gap-y-10 md:gap-y-14">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} eager={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
