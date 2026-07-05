import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex text-sm uppercase tracking-widest border-b border-espresso pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
