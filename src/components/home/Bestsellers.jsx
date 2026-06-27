import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
              The Edit
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.28em] text-espresso underline-offset-8 transition-colors duration-300 hover:text-gold-deep hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
