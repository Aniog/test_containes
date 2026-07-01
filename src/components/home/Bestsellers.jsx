import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Bestsellers"
            title="The pieces our customers reach for"
            subtitle="A small, considered edit — each one designed to wear daily and last for years."
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 sm:gap-x-5 gap-y-10">
          {products.slice(0, 5).map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/shop" className="btn-outline">
            Shop all
            <ArrowRight className="w-3.5 h-3.5 ml-3" strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
