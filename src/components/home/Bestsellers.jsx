import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Bestsellers() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-luxe text-bronze">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-espresso md:text-5xl">
            The Bestsellers
          </h2>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 border-b border-espresso pb-1 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-colors hover:border-bronze hover:text-bronze"
        >
          Shop All
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="reveal mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-5">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} eager={i < 3} />
        ))}
      </div>
    </section>
  );
}
