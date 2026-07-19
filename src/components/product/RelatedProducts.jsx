import { useRef } from "react";
import ProductCard from "@/components/home/ProductCard";
import { getRelatedProducts } from "@/data/products";
import useImageLoader from "@/lib/useImageLoader";

export default function RelatedProducts({ productId }) {
  const ref = useRef(null);
  useImageLoader(ref);
  const related = getRelatedProducts(productId, 4);

  return (
    <section ref={ref} className="bg-cream-200 py-16 md:py-24">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso-300 leading-tight tracking-tight">
            You may also love
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
