import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BESTSELLERS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function HomeBestsellers() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
  }, []);

  return (
    <section id="bestsellers" ref={containerRef} className="py-20 lg:py-32 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow mb-4">Most Loved</p>
            <h2 id="home-bestsellers-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
              Bestsellers
            </h2>
            <p id="home-bestsellers-subtitle" className="mt-3 text-sm text-ivory-muted max-w-md">
              The pieces our community keeps coming back to. Quietly designed, endlessly worn.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex text-[12px] font-sans uppercase tracking-button font-medium text-ivory hover:text-gold transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12 sm:gap-x-6 lg:gap-x-8">
          {BESTSELLERS.map((p, idx) => (
            <div
              key={p.id}
              className={
                idx === 4
                  ? "col-span-2 lg:col-span-1"
                  : ""
              }
            >
              <ProductCard product={p} eager={idx < 2} />
            </div>
          ))}
        </div>

        <div className="mt-12 sm:hidden text-center">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
