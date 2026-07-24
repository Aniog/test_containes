import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  // Show 5 bestsellers (excluding the heirloom set, which is its own moment)
  const items = PRODUCTS.filter((p) => p.badge === "Bestseller")
    .concat(PRODUCTS.filter((p) => p.badge !== "Bestseller"))
    .slice(0, 5);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="text-left">
            <span className="label-eyebrow text-muted">The Edit</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]">
              Bestsellers
            </h2>
            <p className="text-muted text-sm sm:text-base mt-4 max-w-md">
              The pieces our community returns to. Quiet statements, made to
              layer, made to last.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 label-product text-ink hover:text-gold transition-colors"
          >
            View all
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
