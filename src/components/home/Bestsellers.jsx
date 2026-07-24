import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tag === "Bestseller" || p.tag === "Cult Favorite" || p.tag === "New" || p.tag === "Limited" || p.tag === "Gift Edit").slice(0, 5);

  return (
    <section
      id="bestsellers-section"
      className="bg-ivory py-20 md:py-28"
    >
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p
              id="bestsellers-section-eyebrow"
              className="eyebrow"
            >
              The Edit
            </p>
            <h2
              id="bestsellers-section-title"
              className="mt-3 font-serif text-3xl md:text-5xl text-ink font-light"
            >
              Bestsellers
            </h2>
            <p
              id="bestsellers-section-subtitle"
              className="mt-3 text-[15px] text-taupe max-w-md"
            >
              The pieces our community reaches for again and again.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-ui text-ink hover:text-gold-deep transition-colors"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-7">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ui text-ink hover:text-gold-deep transition-colors"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
