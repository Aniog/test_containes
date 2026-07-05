import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section className="py-section md:py-section-lg bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline uppercase text-gold tracking-[0.2em] mb-3">
            Curated for You
          </p>
          <h2
            className="text-display-md text-charcoal-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Bestsellers
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-body-md text-charcoal-500 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-charcoal-800 text-charcoal-800 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg hover:bg-charcoal-800 hover:text-cream-50 transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
