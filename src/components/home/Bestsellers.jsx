import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Bestsellers() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
