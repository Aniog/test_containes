import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRelatedProducts } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import ProductCard from "./ProductCard";
import Container from "@/components/layout/Container";

export default function RelatedProducts({ product }) {
  const ref = useReveal();
  const related = getRelatedProducts(product, 4);

  if (related.length === 0) return null;

  return (
    <section className="bg-bone py-20 md:py-28 border-t border-line" ref={ref}>
      <Container size="wide">
        <div className="reveal flex items-end justify-between gap-6 mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-espresso leading-tight">
            You may also like
          </h2>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
          >
            View all
            <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
          </Link>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}