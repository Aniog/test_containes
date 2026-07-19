import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import SectionHeading from "@/components/common/SectionHeading";

export default function Bestsellers() {
  const top = products.slice(0, 5);

  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <span className="eyebrow mb-3">Most Loved</span>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-xl">
          Bestsellers
        </h2>
        <p className="text-mocha mt-5 max-w-md">
          The pieces our community keeps reaching for — refined, wearable, and quietly made to last.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-7">
        {top.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 md:mt-16 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 font-medium text-espresso hover:text-gold-deep transition-colors"
        >
          View All Pieces
          <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
        </Link>
      </div>
    </section>
  );
}
