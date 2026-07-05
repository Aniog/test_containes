import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import { getRelatedProducts } from "@/data/products";

const RelatedProducts = ({ currentId }) => {
  const related = getRelatedProducts(currentId, 4);
  return (
    <Section tone="ivory" size="lg" className="!py-20 md:!py-24">
      <Container>
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-3">
            Complete the set
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">
            You may also like
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default RelatedProducts;
