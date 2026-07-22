import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
            Most Loved
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso md:text-5xl">
            The Bestsellers
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-taupe">
            The pieces our community reaches for every morning — plated in
            18K gold, priced for real life.
          </p>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase text-espresso transition-colors hover:text-gold"
        >
          View All
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 80}>
            <ProductCard product={product} eager={i < 3} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
