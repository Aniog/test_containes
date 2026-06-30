import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getBestsellers } from "@/data/products.js";
import ProductCard from "@/components/product/ProductCard.jsx";
import SectionHeading from "@/components/common/SectionHeading.jsx";
import { useStrkImages } from "@/lib/imageLoader.js";

export default function Bestsellers() {
  const ref = useRef(null);
  useStrkImages(ref);
  const items = getBestsellers();

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading
            align="left"
            eyebrow="Bestsellers"
            title="Loved by every kind of wearer"
            subtitle="Our most-asked-for pieces — chosen for their feel, their finish, and the way they go with everything."
            titleId="bestsellers-title"
            subtitleId="bestsellers-subtitle"
          />
          <Link
            to="/shop"
            className="link-underline inline-flex items-center gap-2 font-sans text-sm text-ink hover:text-gold transition-colors self-start md:self-end"
          >
            View all
            <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
