import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function RelatedProducts({ product }) {
  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(
      products.filter(
        (p) => p.id !== product.id && p.category !== product.category,
      ),
    )
    .slice(0, 4);

  return (
    <section className="bg-ivory-soft border-t border-hairline">
      <div className="container-page py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">
          <div>
            <p className="eyebrow text-taupe mb-3">Pairs Well With</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.05] text-ink">
              You may also love
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs tracking-eyebrow uppercase text-ink hover:text-gold inline-flex items-center gap-2"
          >
            Shop All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
