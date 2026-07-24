import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";
import { bestsellers } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function HomeBestsellers() {
  const ref = useRef(null);
  useStrkImages(ref);

  const items = bestsellers();

  return (
    <section ref={ref} className="bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline font-sans uppercase tracking-widest2 text-[11px] text-ink-800"
          >
            Shop all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
