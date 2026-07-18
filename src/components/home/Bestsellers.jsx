import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const ref = useRef(null);
  // The first 5 products are the bestsellers per the spec
  const items = products.slice(0, 5);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} id="bestsellers" className="bg-canvas">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-widest2 text-espresso hover:text-gold transition-colors duration-300 inline-flex items-center gap-2"
          >
            View All
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
