import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/shop/ProductCard";
import { useReveal } from "@/hooks/useReveal";

export default function Bestsellers() {
  const ref = useRef(null);
  useReveal(ref);

  // Take first 5 from seed.
  const items = PRODUCTS.slice(0, 5);

  return (
    <section
      ref={ref}
      id="bestsellers"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <Eyebrow>The Edit</Eyebrow>
            <SectionTitle className="mt-3">Bestsellers</SectionTitle>
            <p className="mt-4 max-w-md text-sm text-taupe leading-relaxed">
              The five pieces our community reaches for again and again —
              refined staples that anchor every jewelry box.
            </p>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-label text-espresso"
          >
            View all pieces
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-500 ease-elegant group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
          {items.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
