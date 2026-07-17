import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

export default function Bestsellers({ products }) {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container-velmora">
        <div className="flex items-end justify-between mb-10 sm:mb-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal">
              Bestsellers
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our most loved pieces, chosen by you.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:block text-sm tracking-wide uppercase border-b border-velmora-charcoal hover:text-accent hover:border-accent transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
