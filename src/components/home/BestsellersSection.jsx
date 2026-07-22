import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function BestsellersSection() {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section id="bestsellers" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-velmora-gold mb-2">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs uppercase tracking-widest border-b border-velmora-base pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
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
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest border-b border-velmora-base pb-0.5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
