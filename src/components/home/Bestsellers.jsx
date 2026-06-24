import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { useReveal } from "@/lib/reveal";

export default function Bestsellers() {
  const headRef = useReveal({ deps: [] });
  const gridRef = useReveal({ deps: [] });

  return (
    <section id="bestsellers" className="bg-bone py-20 md:py-28">
      <div className="container-x">
        <div ref={headRef} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow eyebrow-gold">Most Loved</p>
            <h2 className="section-title mt-3">
              Our <span className="section-title-italic">bestsellers</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] tracking-widest3 uppercase text-espresso hover:text-gold transition-colors"
          >
            View all
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}