import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-4">Most loved</div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] text-balance">
              Bestsellers
            </h2>
            <p className="text-sm text-taupe mt-3 max-w-md leading-relaxed">
              The pieces our community reaches for again and again — the quiet staples of an
              everyday jewelry wardrobe.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium text-ink hover:text-gold-600 transition-colors group self-start md:self-end"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
