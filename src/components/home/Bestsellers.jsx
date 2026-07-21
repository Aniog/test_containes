import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionTitle
            eyebrow="Most Loved"
            title="Bestsellers"
            subtitle="The pieces our community reaches for first — quietly considered, endlessly worn."
            align="left"
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 eyebrow text-[0.7rem] text-ink link-underline self-start md:self-auto"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
