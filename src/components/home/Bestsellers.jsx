import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Hairline from "@/components/ui/Hairline.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";
import { products } from "@/data/products.js";

const Bestsellers = () => (
  <section className="py-20 sm:py-24 lg:py-28 bg-cream">
    <Container>
      <div className="flex items-end justify-between mb-10 sm:mb-12">
        <div>
          <p className="eyebrow">Most loved</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Bestsellers
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden sm:inline-flex items-center gap-2 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:text-bronze"
        >
          Shop all <ArrowRight size={14} />
        </Link>
      </div>

      <Hairline tone="ink" className="mb-10 opacity-50" />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-10 sm:hidden text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:text-bronze"
        >
          Shop all <ArrowRight size={14} />
        </Link>
      </div>
    </Container>
  </section>
);

export default Bestsellers;
