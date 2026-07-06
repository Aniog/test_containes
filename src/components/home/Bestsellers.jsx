import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useImageLoader } from "@/hooks/useImageLoader";

export function Bestsellers() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-cream py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-gold">
              Curated Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest text-warm-gray underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
