import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRelated } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts({ product }) {
  const related = getRelated(product);
  if (related.length === 0) return null;
  return (
    <section className="bg-cream py-20 md:py-24 border-t border-hairline">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-3">You may also love</div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-[1.1] text-balance">
              Pieces that pair beautifully.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium text-ink hover:text-gold-600 transition-colors group self-start md:self-end"
          >
            View the collection
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
