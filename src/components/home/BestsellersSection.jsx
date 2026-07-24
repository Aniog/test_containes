import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Our Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground text-xs tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
