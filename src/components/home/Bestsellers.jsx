import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/layout/Container";

export default function Bestsellers() {
  const ref = useReveal();
  // Show up to 5, ordered so the bestsellers come first
  const featured = [...products]
    .sort((a, b) => {
      const aB = a.badge?.toLowerCase().includes("bestseller") ? 0 : 1;
      const bB = b.badge?.toLowerCase().includes("bestseller") ? 0 : 1;
      return aB - bB;
    })
    .slice(0, 5);

  return (
    <section className="bg-bone py-20 md:py-28" ref={ref}>
      <Container size="wide">
        <div className="reveal flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-label text-muted">The Edit</p>
            <h2 className="font-serif text-4xl md:text-6xl text-espresso mt-3 leading-tight">
              Bestsellers
            </h2>
            <p className="mt-4 max-w-md text-sm md:text-base text-espresso-soft leading-relaxed">
              The pieces our community reaches for, again and again.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
          >
            Shop all
            <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
          </Link>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
          >
            Shop all
            <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}