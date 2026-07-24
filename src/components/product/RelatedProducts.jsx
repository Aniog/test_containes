import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "../ProductCard";

export default function RelatedProducts({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10 md:mb-14">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
