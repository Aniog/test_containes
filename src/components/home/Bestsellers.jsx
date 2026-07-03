import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "../../data/products.js";
import ProductCard from "../product/ProductCard.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function Bestsellers() {
  // Show the five seeded products (bestseller = 5 cards as required).
  const items = PRODUCTS.slice(0, 5);

  return (
    <section id="bestsellers" className="bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">Bestsellers</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[56px]">
              The pieces our{" "}
              <span className="italic text-gold-300">community</span> reaches for.
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-widest2 text-gold-300 transition-colors hover:text-gold-200"
          >
            View all
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <span id="velmora-product-card" className="sr-only">
          Velmora demi-fine jewelry
        </span>
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5 lg:gap-x-7">
          {items.map((p, idx) => (
            <ProductCard key={p.id} productId={p.id} eagerLoad={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
