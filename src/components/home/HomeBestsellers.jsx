import { Link } from "react-router-dom";
import { getBestsellers } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function HomeBestsellers() {
  const items = getBestsellers(5);
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-bone">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
              Loved by thousands
            </p>
            <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
              The Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-[11px] uppercase tracking-wider2 text-ink hover:text-gold-deep transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} eager />
          ))}
        </div>
        <div className="mt-10 md:hidden text-center">
          <Link
            to="/shop"
            className="inline-block text-[11px] uppercase tracking-wider2 text-ink hover:text-gold-deep transition-colors border-b border-ink pb-1"
          >
            View all bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
