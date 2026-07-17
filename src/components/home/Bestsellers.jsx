import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow-gold">The Edit</span>
            <h2
              id="section-bestsellers-title"
              className="font-serif text-ink mt-3 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05]"
            >
              Bestsellers
            </h2>
            <p
              id="section-bestsellers-subtitle"
              className="mt-3 text-muted text-[15px] max-w-md"
            >
              The pieces our community keeps coming back to. Quiet, considered,
              and made to wear forever.
            </p>
          </div>
          <Link to="/shop" className="btn-ghost self-start sm:self-end">
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.slice(0, 5).map((product, idx) => (
            <ProductCard key={product.id} product={product} eager={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
