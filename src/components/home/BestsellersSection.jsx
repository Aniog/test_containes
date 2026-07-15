import { Link } from "react-router-dom";
import { products } from "@/data/products.js";
import ProductCard from "@/components/ProductCard.jsx";

export default function BestsellersSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
            Shop the Favorites
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink px-10 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
