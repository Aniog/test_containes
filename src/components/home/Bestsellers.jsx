import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = products.slice(0, 5);

  return (
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28"
      aria-labelledby="bestsellers-title"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow">The Edit</p>
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3"
          >
            Bestsellers
          </h2>
          <p
            id="bestsellers-subtitle"
            className="mt-4 text-sm md:text-base text-ash max-w-md mx-auto leading-relaxed"
          >
            The pieces our community can't stop wearing. Quietly perfect, on
            purpose.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
