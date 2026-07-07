import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
              The Edit
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Bestsellers
            </h2>
            <p className="mt-3 text-muted max-w-md">
              The pieces our community has been quietly reaching for.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial text-ink hover:text-champagne transition-colors"
          >
            View all
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>

        <div className="sm:hidden mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial border-b border-ink pb-1"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
