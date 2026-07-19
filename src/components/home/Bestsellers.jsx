import { useEffect, useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [bestsellers]);

  return (
    <section className="py-16 md:py-24 bg-parchment" ref={containerRef}>
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light tracking-wide-heading">
            Bestsellers
          </h2>
          <p className="mt-2 text-warm-gray text-sm font-sans">
            Our most loved pieces, chosen by women like you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
