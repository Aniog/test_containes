import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  // Top 5 by rating / review count
  const items = [...products]
    .sort((a, b) => b.rating * 1000 + b.reviews - (a.rating * 1000 + a.reviews))
    .slice(0, 5);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Bestsellers</p>
            <h2
              id="bestsellers-title"
              className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl"
            >
              The pieces our community keeps reaching for.
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-ghost"
          >
            View all
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
