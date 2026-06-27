import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
              Bestsellers
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-xl">
              The pieces our<br />community loves most.
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[12px] tracking-[0.3em] uppercase text-ink hover:text-gold border-b border-ink/30 hover:border-gold pb-1.5 transition-all self-start md:self-end"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
