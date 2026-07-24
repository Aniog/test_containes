import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import ProductCard from "@/components/product/ProductCard";
import { relatedProducts } from "@/data/products";

export default function RelatedProducts({ product }) {
  const items = relatedProducts(product, 4);
  if (items.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-cream">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="label-eyebrow text-muted">You may also love</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-3">
              Pair it with
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 label-product text-ink hover:text-gold transition-colors"
          >
            View all
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
