import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

export default function Bestsellers() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ivory">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-4">Most Loved</p>
          <h2 id="bestsellers-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="mt-4 text-sm sm:text-base text-taupe max-w-md mx-auto">
            The pieces our community comes back to — worn daily, gifted often, treasured always.
          </p>
        </div>

        <StrkImageLoader deps={[]} className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {products.slice(0, 5).map((p, i) => (
            <div key={p.id} className={i === 0 ? "col-span-2 lg:col-span-1" : ""}>
              <ProductCard product={p} eager={i < 2} />
            </div>
          ))}
        </StrkImageLoader>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-espresso border-b border-espresso/60 hover:border-espresso pb-1 transition-colors"
          >
            View All Jewelry
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
