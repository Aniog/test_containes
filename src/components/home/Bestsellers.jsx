import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  // Show first 5 products
  const items = products.slice(0, 5);

  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Most Loved</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-ink">
              Bestsellers
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg max-w-md leading-relaxed">
              The pieces our community keeps reaching for. Quietly luxurious,
              made to wear every day.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-[11px] font-medium tracking-wider-3 uppercase text-ink hover:text-champagne-deep transition-colors duration-300 inline-flex items-center gap-2 self-start md:self-end"
          >
            View All
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
