import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StrkImage from "@/components/ui/StrkImage";

export function Bestsellers() {
  return (
    <section
      aria-labelledby="bestsellers-heading"
      className="container-content py-20 md:py-28"
    >
      <StrkImage>
        <ScrollReveal>
          <div className="flex flex-col items-start gap-4 pb-10 md:flex-row md:items-end md:justify-between md:pb-14">
            <div>
              <p className="eyebrow">Most Loved</p>
              <h2
                id="bestsellers-heading"
                className="mt-3 font-serif text-4xl text-ink md:text-5xl"
              >
                Bestsellers
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                The pieces our community comes back to — quiet, considered, and built to wear daily.
              </p>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-deep"
            >
              Shop All
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-5 md:gap-x-8 md:gap-y-16">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} eager={i < 2} />
            ))}
          </div>
        </ScrollReveal>
      </StrkImage>
    </section>
  );
}

export default Bestsellers;
