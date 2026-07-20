import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const related = getRelatedProducts(currentId, 4);

  return (
    <section ref={containerRef} className="bg-bone py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <p className="eyebrow mb-3">You may also love</p>
          <h2 className="font-serif text-3xl md:text-4xl">More from Velmora</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
