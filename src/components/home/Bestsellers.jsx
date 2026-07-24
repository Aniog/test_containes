import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 5);
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="reveal">
          <SectionHeader
            eyebrow="Bestsellers"
            title="Most loved, this season"
            sub="The pieces our community keeps reaching for — soft gold, considered details, made to wear every day."
            align="center"
          />
        </div>

        <div className="mt-14 md:mt-20 -mx-5 md:mx-0 px-5 md:px-0">
          <div
            className="
              flex md:grid md:grid-cols-5 gap-5 md:gap-6
              overflow-x-auto md:overflow-visible no-scrollbar
              snap-x md:snap-none snap-mandatory
              pb-2 md:pb-0
            "
          >
            {bestsellers.map((p) => (
              <div
                key={p.id}
                className="flex-shrink-0 w-[68%] sm:w-[44%] md:w-auto snap-start reveal"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center reveal">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-3 font-medium text-ink hover:text-gold transition-colors group"
          >
            Shop All
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
