import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

export default function Bestsellers() {
  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-ivory-100"
      id="bestsellers"
      aria-labelledby="bestsellers-title"
    >
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeader
            align="left"
            eyebrow="The Edit"
            title="Bestsellers"
            subtitle="Pieces our community reaches for again and again."
            titleId="bestsellers-title"
            subtitleId="bestsellers-sub"
          />
          <Link
            to="/shop"
            className="self-start md:self-end inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              eager={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
