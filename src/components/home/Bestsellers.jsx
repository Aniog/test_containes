import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-velmora-ink md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline hidden text-[12px] uppercase tracking-[0.24em] text-velmora-ink md:inline-block"
          >
            View All
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
          {PRODUCTS.map((p, idx) => (
            <ProductCard key={p.id} product={p} eager={idx < 3} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/shop"
            className="inline-block border border-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-ink"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
