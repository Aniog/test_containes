import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function Bestsellers() {
  // Show 5 cards per spec
  const list = products.slice(0, 5);

  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The Edit</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Bestsellers
            </h2>
            <p className="mt-3 max-w-md text-ink-secondary leading-relaxed">
              The pieces our community reaches for again and again. Quietly
              beautiful, unmistakably Velmora.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 link-underline text-ink"
          >
            View all <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 flex justify-center md:hidden">
          <Link to="/shop" className="btn-outline">
            View all <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
