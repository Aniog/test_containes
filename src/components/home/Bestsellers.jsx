import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function Bestsellers() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section ref={containerRef} className="bg-ivory">
      <div className="mx-auto max-w-7.5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-16">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
              The Edit
            </p>
            <h2 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">
              Our Bestsellers
            </h2>
            <p className="mt-3 max-w-md font-sans text-sm text-stone">
              The pieces our circle reaches for first — quietly worn, never replaced.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 border-b border-espresso pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-5">
          {PRODUCTS.slice(0, 5).map((p, i) => (
            <div key={p.id} className={i === 4 ? "hidden lg:block" : ""}>
              <ProductCard product={p} eager={i < 2} />
            </div>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-b border-espresso pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-espresso"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
