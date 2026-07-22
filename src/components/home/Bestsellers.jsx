import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard.jsx";
import { products } from "@/data/products.js";

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
            The <span className="italic">Bestsellers</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-espresso transition-colors hover:text-gold"
        >
          View All
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
