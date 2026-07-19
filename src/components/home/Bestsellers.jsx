import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);
  return (
    <section className="container-7xl py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <p className="eyebrow text-muted">◆ The Edit</p>
          <h2
            id="section-bestsellers-title"
            className="display-1 text-ink mt-3 text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            Bestsellers
          </h2>
          <p className="text-sm text-muted mt-4 max-w-md leading-relaxed">
            The five pieces our community keeps coming back to.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink font-medium relative after:absolute after:left-0 after:right-0 after:bottom-[-3px] after:h-px after:bg-gold after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out-soft"
        >
          View all
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
