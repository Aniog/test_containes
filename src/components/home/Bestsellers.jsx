import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Bestsellers() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="container-page py-20 sm:py-28" id="bestsellers">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="eyebrow">Most loved</span>
          <h2
            id="bestsellers-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mt-3 text-sable"
          >
            Bestsellers
          </h2>
          <p
            id="bestsellers-subtitle"
            className="mt-3 max-w-md text-sm sm:text-base text-taupe font-sans font-light"
          >
            The pieces our community reaches for again and again — quietly
            elegant, effortlessly worn.
          </p>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-sable font-sans text-[12px] tracking-widest2 uppercase font-medium hover:text-gold transition-colors self-start sm:self-auto"
        >
          View All
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-14">
        {PRODUCTS.map((p, i) => (
          <ProductCard key={p.id} product={p} eager={i < 2} />
        ))}
      </div>
    </section>
  );
}
