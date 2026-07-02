import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-light sm:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.16em] text-mocha underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
