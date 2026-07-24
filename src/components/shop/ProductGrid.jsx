import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "../ProductCard";

export default function ProductGrid({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-2xl text-foreground">No pieces match your filters.</p>
        <p className="mt-2 text-muted">Try adjusting your selection.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
