import { Link } from "react-router-dom";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          <p className="mt-3 text-sm text-stone">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-cream transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
