import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const items = PRODUCTS.slice(0, 5);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-gold-deep mb-3">Most loved</p>
            <h2 id="bestsellers-title" className="display-lg text-ink">
              Our bestsellers
            </h2>
            <p className="mt-3 text-muted font-sans font-light text-[15px] max-w-md">
              The pieces our community keeps coming back to — sold out twice, then three times, then four.
            </p>
          </div>
          <Link
            to="/shop"
            className="link-underline text-ink self-start md:self-end"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
