import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bone">
      <div className="container-velmora">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-4">Bestsellers</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink max-w-2xl">
              The pieces our
              <br className="hidden md:block" />
              <span className="italic"> community reaches for.</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-product text-ink hover:text-ink-soft font-medium border-b border-ink pb-1 self-start md:self-end"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
          {bestsellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}