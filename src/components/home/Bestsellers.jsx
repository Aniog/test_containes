import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto max-w-editorial px-5 py-20 md:px-10 md:py-28 lg:px-14"
      aria-labelledby="bestsellers-title"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow eyebrow-gold">Most Loved</p>
          <h2
            id="bestsellers-title"
            className="mt-3 font-serif text-3xl text-ink-300 md:text-4xl"
          >
            Bestsellers
          </h2>
        </div>
        <Link
          to="/shop"
          className="btn-ghost hidden md:inline-flex"
          id="bestsellers-view-all"
        >
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-7 lg:grid-cols-5 lg:gap-x-7">
        {bestsellers.map((product, idx) => (
          <ProductCard key={product.id} product={product} eager={idx < 2} />
        ))}
      </div>

      <div className="mt-12 md:hidden">
        <Link to="/shop" className="btn-outline w-full">
          View All Bestsellers
        </Link>
      </div>
    </section>
  );
}
