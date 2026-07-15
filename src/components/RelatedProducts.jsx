import { useRef } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useImageLoader } from "@/hooks/useImageLoader";

export function RelatedProducts({ products }) {
  const containerRef = useRef(null);
  useImageLoader(containerRef, [products]);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <h2 className="mb-10 text-center font-serif text-3xl text-espresso md:text-4xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
