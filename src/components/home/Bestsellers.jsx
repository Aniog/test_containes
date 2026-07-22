import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  // Show 5 bestsellers — keep order as declared (matches seed brief)
  const items = products.slice(0, 5);

  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-title"
      className="bg-ivory py-20 md:py-32"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p id="bestsellers-eyebrow" className="eyebrow mb-4">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="font-serif text-h2 md:text-[52px] leading-[1.05] text-ink"
            >
              Our <em className="italic font-normal text-champagne-deep">Bestsellers</em>
            </h2>
            <p id="bestsellers-subtitle" className="mt-4 text-body text-espresso max-w-md">
              The pieces our community reaches for again and again — refined enough
              for a wedding, simple enough for a Tuesday.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-eyebrow uppercase text-ink border-b border-ink hover:text-champagne-deep hover:border-champagne-deep transition-colors pb-1"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {items.map((product, idx) => (
            <ProductCard key={product.id} product={product} eager={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
