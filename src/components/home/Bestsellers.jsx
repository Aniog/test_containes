import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/lib/useStrkImages";

export default function Bestsellers() {
  const containerRef = useStrkImages([]);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
          <div className="mx-auto mt-6 h-px w-12 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-ink px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-ink transition-all duration-300 ease-luxury hover:bg-ink hover:text-cream"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
