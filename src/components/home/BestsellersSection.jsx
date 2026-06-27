import { useEffect, useState } from "react";
import { fetchBestsellers } from "@/api/products";
import ProductCard from "@/components/ProductCard";

export default function BestsellersSection() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchBestsellers()
      .then((data) => {
        setProducts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-3">Most Loved</p>
          <h2 className="serif text-3xl md:text-4xl font-light">Bestsellers</h2>
        </div>
        {status === "loading" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-cream-dark rounded-sm animate-pulse" />
            ))}
          </div>
        ) : status === "error" ? (
          <p className="text-center text-warm-gray">Unable to load products.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
