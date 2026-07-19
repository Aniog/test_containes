import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Loved by you</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
            >
              Bestsellers
            </h2>
            <p className="mt-3 text-sm text-taupe max-w-md">
              The pieces our community reaches for most — each finished by hand
              and shipped in signature velvet.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-1.5 nav-link"
          >
            View all <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-12">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link to="/shop" className="btn-secondary">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
