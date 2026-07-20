import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller").slice(0, 2);
  // Show top 5 mix of bestsellers + featured
  const featured = products.slice(0, 5);
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-velmora">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Most Loved</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-espresso text-balance">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-bronze-deep transition-colors"
          >
            Shop All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
          {/* Last card on lg: spans and becomes a CTA card */}
          <div className="hidden lg:flex flex-col justify-center items-start bg-espresso text-ivory p-8 min-h-[420px]">
            <p className="eyebrow text-bronze-light mb-4">The Edit</p>
            <h3 className="font-serif text-3xl leading-tight mb-4 text-balance">
              New Season, New Heirlooms
            </h3>
            <p className="text-sm text-ivory/75 mb-6 max-w-xs text-pretty">
              Our fall collection explores the warmth of gold through sculpted
              forms and quiet details.
            </p>
            <Link
              to="/shop?sort=newest"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ivory hover:text-bronze-light transition-colors"
            >
              Discover
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
