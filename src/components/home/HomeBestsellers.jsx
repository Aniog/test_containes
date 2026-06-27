import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { getBestsellers } from "@/data/products";

export default function HomeBestsellers() {
  const bestsellers = getBestsellers();
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Most Loved"
            title="Bestsellers"
            description="The pieces our community reaches for again and again."
            align="center"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/shop"
            className="font-sans text-[0.72rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] link-underline inline-flex items-center gap-2"
          >
            Shop All
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </section>
  );
}