import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/catalog";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const items = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
              Bestsellers
            </span>
            <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl tracking-tight text-onyx">
              Quietly Adored
            </h2>
            <p className="mt-4 font-sans text-taupe max-w-md">
              The pieces our community keeps coming back to — chosen, gifted,
              and worn every day.
            </p>
          </div>
          <Link
            to="/shop"
            className="self-start md:self-end inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.28em] text-onyx hover:text-gold transition-colors group"
          >
            View All
            <ArrowRight
              size={16}
              strokeWidth={1.25}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
