import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
              The Edit
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1410] tracking-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#1A1410] hover:text-[#B8924A] transition-colors self-start md:self-auto"
          >
            View All
            <span aria-hidden className="w-10 h-px bg-current" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
