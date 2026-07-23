import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <SectionHeading
        eyebrow="Most Loved"
        title="The Bestsellers"
        sub="The pieces our community reaches for again and again — quiet statements for every day."
      />

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 60}>
            <ProductCard product={product} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 font-body text-[12px] font-semibold uppercase tracking-widest2 text-espresso"
        >
          <span className="link-underline">View all jewelry</span>
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
