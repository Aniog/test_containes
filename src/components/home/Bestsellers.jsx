import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <SectionTitle
            eyebrow="The Edit"
            title="Bestsellers, Loved Daily"
            italicWord="Loved"
            align="center"
          />
        </div>

        <Reveal className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-14 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border-b border-espresso/40 pb-2 text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            View the Full Collection
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
