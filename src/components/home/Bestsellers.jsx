import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="bestsellers"
      className="py-20 sm:py-24 lg:py-28 bg-ivory"
    >
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="eyebrow mb-3">Most Loved</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso"
            >
              The Bestsellers
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-3 max-w-md text-sm sm:text-base text-mocha"
            >
              The five pieces our community keeps coming back to. Quietly
              essential — and made to be worn daily.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.28em] text-espresso link-underline inline-flex items-center gap-2 self-start sm:self-auto"
          >
            Shop All
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
          {PRODUCTS.slice(0, 5).map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
