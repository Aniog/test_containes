import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  // 5 bestsellers, in the specified seed order
  const bestsellers = PRODUCTS;

  return (
    <section className="section bg-editorial">
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-4">Most Loved</p>
            <h2 className="font-display text-cocoa-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em]">
              The <em className="italic font-normal">Bestsellers</em>
            </h2>
            <p className="mt-4 text-cocoa-700 max-w-md text-[15px] leading-relaxed">
              The five pieces our community reaches for again and again — the
              everyday edit, distilled.
            </p>
          </div>
          <Link to="/shop" className="btn-link self-start md:self-end">
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
          </Link>
        </div>

        {/* 5-up grid: 2 col mobile, 3 col md, 5 col lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 lg:gap-x-5 gap-y-10 md:gap-y-14">
          {bestsellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} eagerImage={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
