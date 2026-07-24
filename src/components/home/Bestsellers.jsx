import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { getBestsellers } from "@/data/products";

export default function Bestsellers() {
  const items = getBestsellers(5);

  return (
    <section className="py-20 sm:py-28 bg-cream-100">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-16">
            <div>
              <p className="eyebrow mb-3">Most loved</p>
              <h2 className="font-display text-[40px] sm:text-[64px] leading-[1.02] text-onyx-800">
                Bestsellers
              </h2>
              <p className="font-display italic text-[20px] sm:text-[24px] text-mocha-500 mt-2">
                The five pieces our community can't stop wearing.
              </p>
            </div>
            <Link
              to="/shop"
              className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800 border-b border-onyx-800 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors inline-flex items-center gap-2"
            >
              Shop all <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        {/* Desktop: 5-up grid. Mobile: 2-up, then 3-up. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 sm:gap-y-14">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
