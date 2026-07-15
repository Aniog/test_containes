import { useRef } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { useImageLoader } from "@/hooks/useImageLoader";

export function BestsellersSection() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Shop Bestsellers
        </p>
        <h2
          id="bestsellers-title"
          className="mt-3 font-serif text-3xl tracking-wide md:text-4xl"
        >
          Most Loved Pieces
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            contextId="bestsellers-title"
          />
        ))}
      </div>
    </section>
  );
}
