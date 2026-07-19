import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { getBestsellers } from "@/data/products";

export default function Bestsellers() {
  const items = getBestsellers(5);

  return (
    <section className="bg-bone py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="eyebrow">The Edit</p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-ink"
            >
              Bestsellers
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-4 max-w-prose text-ink/70 text-sm sm:text-base leading-relaxed"
            >
              The pieces our community keeps coming back to. Quiet, considered,
              made to live in.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.18em] text-ink link-underline self-start sm:self-end"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5 inline-block ml-2 -mt-0.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-12">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
