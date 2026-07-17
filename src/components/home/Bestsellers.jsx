import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const items = PRODUCTS.slice(0, 5);

  return (
    <section
      aria-labelledby="bestsellers-title"
      className="bg-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Our Most Loved</p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-display text-4xl md:text-5xl leading-tight"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-ghost"
          >
            Shop All
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-7">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
