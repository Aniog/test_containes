import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-5xl">
              The Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-noir transition-colors hover:text-gold"
          >
            View All
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} eager={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
