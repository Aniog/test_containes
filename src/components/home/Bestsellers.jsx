import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const Bestsellers = () => {
  return (
    <Section tone="ivory" size="lg">
      <Container>
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-4">
            The Atelier Edit
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            Bestsellers
          </h2>
          <p className="mt-5 text-taupe max-w-lg mx-auto leading-relaxed">
            The pieces our community reaches for again and again — quiet, considered, and made to be worn every day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            Shop all
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Bestsellers;
