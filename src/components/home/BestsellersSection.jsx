import { Link } from "react-router-dom";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="text-xs tracking-widester uppercase text-velmora-muted mb-2">Most Loved</p>
          <h2 className="font-heading text-3xl md:text-4xl">Bestsellers</h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:inline-flex text-xs tracking-widester uppercase border-b border-velmora-ink pb-0.5 hover:border-velmora-gold transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="btn-outline text-xs">
          View All
        </Link>
      </div>
    </section>
  );
}
