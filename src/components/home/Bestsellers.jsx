import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/data/products";
import useImageLoader from "@/lib/useImageLoader";

export default function Bestsellers() {
  const ref = useRef(null);
  useImageLoader(ref);
  const bestsellers = products.slice(0, 5);

  return (
    <section ref={ref} className="bg-cream-100 py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Bestsellers</p>
            <h2
              id="home-bestsellers-title"
              className="mt-3 font-serif text-4xl md:text-5xl text-espresso-300 leading-[1.05] tracking-tight"
            >
              Loved by the everyday wearer.
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base leading-relaxed max-w-md">
              Our most-worn, most-gifted, most-complimented pieces — the ones
              that quietly become part of your everyday.
            </p>
          </div>
          <Link
            to="/shop"
            className="self-start md:self-end inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300 hover:text-gold-500 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
